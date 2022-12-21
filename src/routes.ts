import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';
import { AuthenticateClientController } from './modules/account/authenticateClient/AuthenticateClientController';
import { Router } from "express";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { AuthenticateDeliverymanController } from './modules/account/authenticateDeliveryman/AuthenticateDeliverymanController';

const routes = Router()
const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
const createDeliverymanController = new CreateDeliverymanController() 
const authenticateDelirymanController = new AuthenticateDeliverymanController()

routes.post('/client/', createClientController.handle)
routes.post('/client/authenticate/', authenticateClientController.handle)
routes.post('/deliveryman/authenticate/', authenticateDelirymanController.handle)
routes.post('/deliveryman/', createDeliverymanController.handle)

export { routes }