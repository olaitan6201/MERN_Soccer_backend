const { default: mongoose } = require("mongoose");
import { PlayerSchema } from '../models/playerModel'

const Player = mongoose.model('Player', PlayerSchema)

export const addNewPlayer = (req, res) => {
    let newPlayer = new Player(req.body);

    newPlayer.save((err, Player) => {
        if (err) return res.send(err);

        res.json(Player)
    });
}

export const getPlayers = (req, res) => {
    Player.find({}, (err, Player) => {
        if (err) return res.send(err);

        res.json(Player)
    });
}

export const getPlayerWithID = (req, res) => {
    Player.findById(req.params.PlayerId,
        (err, Player) => {
            if (err) return res.send(err);

            res.json(Player)
        });
}

export const updatePlayer = (req, res) => {
    const id = req.params.PlayerId;

    Player.findOneAndUpdate(
        { _id: id },
        req.body,
        { new: true },
        (err, Player) => {
            if (err) return res.send(err);

            res.json(Player)
        });
}

export const deletePlayer = (req, res) => {
    const id = req.params.PlayerId
    Player.remove({ _id: id },
        (err, Player) => {
            if (err) return res.send(err);

            res.json({
                message: 'Successfully deleted player'
            })
        });
}