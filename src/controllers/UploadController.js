// import Aluno from '../models/Aluno';
import multer from 'multer';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig).single('archive');

class UploadController {
  async store(req, res) {
    return upload(req, res, (err) => {
      if (err) {
        return res.status(400).json({
          errors: ['Archive type must be JPG or PNG'],
        });
      }

      return res.json(req.file);
    });
  }
}

export default new UploadController();
