import express from 'express'

const app = express()

app.post('/users', (req, res) => {
    res.statusCode(200)
})

export default app