import express from 'express'

const app = express()

app.get('/test', (req, res) => {
    res.send("1 test")
})

const port = process.env.PORT || 4000;
app.listen(port, () => {console.log(`Server started at port ${port}`)});