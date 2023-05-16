import { useState } from 'react'
import Table from './Table';
import Form from './Form';

const LinkContainer = (props) => {

  const [newLinks, setNewLinks] = useState([])    /* creates an array of state */
  
  const handleRemove = (index) => {   /* Create logic for setting the state to filter array and remove favLink at index */
    
  /*short way to create new waythat filters out link at the index of existing array and only keep links that are not */
    const filter = newLinks.filter((_, i) => i !== index)
    setNewLinks(filter)
  }

  const handleSubmit = (favLink) => {       /* Create logic to set state and add new favLink to favLinks array in state.
                                               Called whenever the form submits a new link. Form will pass back the message*/
    let favLinks = [...newLinks]            /* Creating a new array with old links; */
    favLinks.push(favLink)                  /* Then adding new link to the array; */
    setNewLinks(favLinks)                   /*  Then setting entire state to array with the new links*/
 
    /* shorter version below
    let favLinks = [...newLinks, favLink]; 
    setNewLinks(favLinks); */
  }

  return (                                  
    <div className="container" style={{width: '80%', paddingLeft:'10%',   }}>
      <h1>My Favorite Links</h1>
      <p>Add a new url with a name and link to the table.</p>
  
      <Table linkData ={newLinks}                            /* linkData is created prop to send data to table component */
             removeLink = {handleRemove}  />                 {/* removeLink is created prop to send data to table component*/}      
      <br />

      <h3>Add New</h3>
      <Form onNewSubmit={handleSubmit} />     {/* onNewSubmit is a created as a prop to receive data from form component file */}    
    </div>
  )
}

export default LinkContainer
