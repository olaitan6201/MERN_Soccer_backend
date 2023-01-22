import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import routes from './routes/soccerRoutes'

const app = express()
const PORT = 3000

//mongo connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb+srv://developer_habeeb:4AGuuAKvJBvPZ@cluster0.hlc4c.mongodb.net/mern_soccer_db?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to database'))
    .catch((err) => console.log(`Connection failed: ${err}`))

mongoose.set('strictQuery', false)

// body-parser setup
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

routes(app)

app.get('/', (req, res) => {
    res.send(`Node started on PORT: ${PORT}!`)
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})