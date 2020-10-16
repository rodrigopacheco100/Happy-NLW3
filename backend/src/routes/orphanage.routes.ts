import { Router } from 'express';
import multer from 'multer';

import OrphanageController from '../database/controller/OrphanageController';
import uploadConfig from '../config/upload';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanage', OrphanageController.index);
routes.get('/orphanage/:id', OrphanageController.show);
routes.post('/orphanage', upload.array('images'), OrphanageController.create);

export default routes;
