import express from 'express';
import { CardRoutes } from '../modules/card/card.route';

const router = express.Router();
const moduleRoutes = [
    {
        path: '/',
        route: CardRoutes
    },
   
]


moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;