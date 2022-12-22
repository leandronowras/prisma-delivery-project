import { UpdateEndDateController } from './modules/deliveries/useCases/updateEndDate/UpdateEndDateController';
import { FindAllDeliveriesDeliverymanController } from './modules/deliveryman/useCases/findAllDeliveries/FindAllDeliveriesDeliverymanController';
import { FindAllDeliveriesController } from './modules/clients/useCases/deliveries/FindAllDeliveriesController';
import { UpdateDeliverymanController } from './modules/deliveries/useCases/updateDeliveryman/useCases/UpdateDeliverymanController';
import { FindAllAvailableController } from './modules/deliveries/useCases/findAllAvailable/FindAllAvailableController';
import { CreateDeliveryController } from './modules/deliveries/useCases/createDelivery/CreateDeliveryController';
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';
import { AuthenticateClientController } from './modules/account/authenticateClient/AuthenticateClientController';
import { Router } from "express";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { AuthenticateDeliverymanController } from './modules/account/authenticateDeliveryman/AuthenticateDeliverymanController';
import { ensureAuthenticateClient } from './middlewares/ensureAuthenticateClient';
import { ensureAuthenticateDelivery } from './middlewares/ensureAuthenticateDelivery';

const routes = Router()
const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
const createDeliverymanController = new CreateDeliverymanController() 
const authenticateDelirymanController = new AuthenticateDeliverymanController()
const createDeliveryController = new CreateDeliveryController()
const findeAllAvailableController = new FindAllAvailableController()
const updateDeliverymanController = new UpdateDeliverymanController()
const findAllDeliveriesController = new FindAllDeliveriesController()
const findAllDeliveriesDeliverymanController = new FindAllDeliveriesDeliverymanController()
const updateEndDateController = new UpdateEndDateController()

routes.post('/client/', createClientController.handle)
routes.post('/client/authenticate/', authenticateClientController.handle)
routes.post('/deliveryman/authenticate/', authenticateDelirymanController.handle)
routes.post('/deliveryman/', createDeliverymanController.handle)
routes.post('/delivery/', ensureAuthenticateClient, createDeliveryController.handle)
routes.get('/delivery/available', ensureAuthenticateDelivery, findeAllAvailableController.handle)
routes.put('/delivery/updateDeliveryman/:id', ensureAuthenticateDelivery, updateDeliverymanController.handle)
routes.get("/client/deliveries", ensureAuthenticateClient, findAllDeliveriesController.handle)
routes.get('/deliveryman/deliveries', ensureAuthenticateDelivery, findAllDeliveriesDeliverymanController.handle)
routes.put('/delivery/updateEndDate/', ensureAuthenticateDelivery, updateEndDateController.handle)

export { routes }