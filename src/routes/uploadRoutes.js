import { Router } from 'express';
import multer from 'multer';
import uploadController from '../controllers/UploadController';
import multerConfig from '../config/multerConfig';

const router = new Router();

const upload = multer(multerConfig);

router.post('/', upload.single('archive'), uploadController.store);

export default router;
