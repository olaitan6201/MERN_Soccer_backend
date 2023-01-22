import { addNewPlayer } from "../controllers/playerController";

const routes = (app) => {
    app.route('/players')
        .post(addNewPlayer);
}

export default routes;