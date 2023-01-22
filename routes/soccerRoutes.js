import {
    addNewPlayer,
    getPlayers,
    getPlayerWithID
} from "../controllers/playerController";

const routes = (app) => {
    app.route('/players')
        .get(getPlayers)
        .post(addNewPlayer);

    app.route('/player/:PlayerId')
        .get(getPlayerWithID)
}

export default routes;