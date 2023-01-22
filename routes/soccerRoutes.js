import { addNewPlayer, getPlayers } from "../controllers/playerController";

const routes = (app) => {
    app.route('/players')
        .get(getPlayers)
        .post(addNewPlayer);
}

export default routes;