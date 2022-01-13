import express from 'express'

const app = express()

app.get('/users', (req, res) => {
    res.statusCode(200)
})

export default app