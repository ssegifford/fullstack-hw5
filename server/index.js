// import path module
const path = require('path')

// initialize express app
const express = require('express')
const app = express()

// to receive imported functions
const db = require('./queries')

// define port for server
const port = 8000

// host react app as static files
app.use(express.static(path.resolve(__dirname, '../client/build')))

// define routes
app.get('/', (req, res)=>{
    // define what should happen (send html file)
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

// send message back to client
app.get('/links', db.getLinks)

app.get('/links/:id', ()=>{
});


// start app on port
app.listen(port, () => {
    console.log(`Server is listenning on port ${port}`)
}) 
