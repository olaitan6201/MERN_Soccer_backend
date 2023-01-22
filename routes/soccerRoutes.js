import {
    addNewPlayer,
    getPlayers,
    getPlayerWithID,
    updatePlayer
} from "../controllers/playerController";

const routes = (app) => {
    app.route('/players')
        .get(getPlayers)
        .post(addNewPlayer);

    app.route('/player/:PlayerId')
        .get(getPlayerWithID)
        .put(updatePlayer)
}

export default routes;