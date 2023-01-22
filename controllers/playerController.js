const { default: mongoose } = require("mongoose");
import { PlayerSchema } from '../models/playerModel'

const Player = mongoose.model('Player', PlayerSchema)

export const addNewPlayer = (req, res) => {
    let newPlayer = new Player(req.body);

    newPlayer.save((err, Player) => {
        if (err) return req.send(err);

        res.json(Player)
    });
}

export const getPlayers = (req, res) => {
    Player.find({}, (err, Player) => {
        if (err) return req.send(err);

        res.json(Player)
    });
}