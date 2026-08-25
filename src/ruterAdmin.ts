import express from 'express'
const routerAdmin = express.Router();
import restaurantController from './controllers/restaurant.controller'


/** RESTAURANT */
routerAdmin.get("/login", restaurantController.getLogin)
routerAdmin.post("/Login", restaurantController.processLogin);