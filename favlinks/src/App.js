import React from 'react'
import LinkContainer from './components/LinkContainer'
import { useEffect, useState } from 'react'

function App() {

  const[message, setMessages] = useState(null)

  const fetchAPI = async () => {
    try{
      let response = await fetch('/api')
      let data = await response.json()
      setMessages(data.message)
    }
    catch(error){
      console.log(error)
    }
  }

  //use fetch to get data
  useEffect(()=>{
   fetchAPI() 
  }, [])


  return (
    <div className="App">
      <LinkContainer />
    </div>
  )
}

export default App
