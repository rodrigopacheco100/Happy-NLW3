import { Router } from 'express';

import orphanageRouter from './orphanage.routes';

const routes = Router();

routes.use(orphanageRouter);

export default routes;
