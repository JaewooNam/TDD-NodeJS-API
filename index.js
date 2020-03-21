const express = require('express')
const app = express()
const morgan = require('morgan')
const users = [
    {id: 1, name: 'alice'},
    {id: 2, name: 'bek'},
    {id: 3, name: 'chris'},
]

app.use(morgan('dev'))

const port = 3000

// set routing
app.get('/users', (req, res) => {
    res.json(users)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
}) // when listen completed -> call back