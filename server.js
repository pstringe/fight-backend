import express from 'express';
import mongoose from 'mongoose';
import {password} from './credentials.js';

/*
**  App Config
*/
const app = express();
const port = process.env.PORT || 8001
const connection_url = `mongodb+srv://admin:${password}@cluster0.67drb.mongodb.net/fightdb?retryWrites=true&w=majority`

/*
**  Middlewares
*/

/*
**  DB config
*/
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

/*
**  API Express
*/
app.get('/', (req, res) => {
    return res.status(200).send('TEST');
})

/*
**  Listener
*/
app.listen(port, () => console.log(`listening on localhost: ${port}`))
