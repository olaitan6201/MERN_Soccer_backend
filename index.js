import express from 'express'

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send(`Node started on PORT: ${PORT}!`)
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})