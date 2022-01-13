import express from 'express'

const app = express()

app.get('/test', (req, res) => {
    res.send("1 test")
})

export default app