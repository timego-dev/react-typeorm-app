import multer from 'multer';

const multerConfig = {
  storage: multer.diskStorage({
    destination: './uploads',
    filename: (req, file, next) => {
      const ext = file.mimetype.split('/')[1];
      next(null, `${file.fieldname}-${Date.now()}.${ext}`);
    }
  })
};

const upload = multer(multerConfig);

export default upload;
