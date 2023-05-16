// import path module
const path = require('path')

// initialize express app
const express = require('express')
const app = express()

// define port for server
const port = 8000

// host react app as static files
app.use(express.static(path.resolve(__dirname, '../favlinks/build')))

// define routes
app.get('/', (req, res)=>{
    // define what should happen (send html file)
    res.sendFile(path.resolve(__dirname, '../favlinks/build', 'index.html'))
})

// send message back to client
app.get('/api', (req, res) => {
    res.json({message: 'Live from the server'})
})

// start app on port
app.listen(port, () => {
    console.log(`Server is listenning on port ${port}`)
}) 
