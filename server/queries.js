const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'favlinks',
  password: 'postgres',
  port: 5432,
})

//Create handler functions that will be request handlers in express server

//Get all data from database
const getLinks = (req, res)=>{
    pool.query('SELECT * FROM links ORDER BY id', (error, result) =>{
        if(error){
            throw error;
        }
        res.status(200).json(result.rows)
    })
}

// Here we’ll get the custom id parameter by the URL and use a WHERE clause to display the result.
const getLinkById = (req, res) => {
    const id = parseInt(req.params.id)
  
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
  }

module.exports = {
    getLinks, getLinkById
}