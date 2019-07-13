
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello MeawMii !'))
app.get('/about', (req, res) => res.send('หน้า about !'))
app.get('/aboutme', (req, res) => res.send('หน้า เกี่ยวกับเรา !'))
app.get('/telme', (req, res) => res.send('หน้า ติดต่อเรา !'))
app.get('/test', (req, res) => {
    res.json({message:"test"})
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
