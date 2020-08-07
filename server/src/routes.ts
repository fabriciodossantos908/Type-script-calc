import express from 'express'
import ClassesControllers from './controllers/ClassesController';
import ConnectionsControlers from './controllers/ConnectionsControllers';

const routes = express.Router();

const classesController = new ClassesControllers();
const connectionsController = new ConnectionsControlers();


routes.get("/classes", classesController.index);
routes.post("/classes", classesController.create);

routes.get('/connections', connectionsController.index)
routes.post('/connections', connectionsController.create)

export default routes;