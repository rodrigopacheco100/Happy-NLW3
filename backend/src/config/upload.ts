import multer from 'multer';
import { join } from 'path';
import { hash } from 'bcrypt';

export default {
  storage: multer.diskStorage({
    destination: join(__dirname, '..', '..', 'uploads'),
    filename: (_, file, cb) => {
      cb(null, `${Date.now()}${file.originalname}`);
    },
  }),
};
