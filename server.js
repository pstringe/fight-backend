import express from 'express';
import mongoose from 'mongoose';
import {password} from './credentials.js';
import Opponents from './dbOpponents.js';
import Cors from 'cors';

/*
**  App Config
*/
const app = express();
const port = process.env.PORT || 8001
const connection_url = `mongodb+srv://admin:${password}@cluster0.67drb.mongodb.net/fightdb?retryWrites=true&w=majority`

/*
**  Middlewares
*/
app.use(express.json());
app.use(Cors())
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
});

app.post('/fight/opponent', (req, res) => {
    const dbOpponent = req.body;
    Opponents.create(dbOpponent, (err, data) => {
        if (err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    });
});

app.get('/fight/opponents', (req, res) => {
    Opponents.find((err, data) => {
        if (err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    })
});

/*
**  Listener
*/
app.listen(port, () => console.log(`listening on localhost: ${port}`))
