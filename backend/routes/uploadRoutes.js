/* FILE UPLOAD ROUTE */
import path from 'path';
import express from 'express';
import multer from 'multer';

const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/;
  const fileExtname = filetypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  // match 'image/png' etc.
  const fileMimetype = filetypes.test(file.mimetype);

  if (fileExtname && fileMimetype) {
    return cb(null, true);
  } else {
    cb('JPG / JPEG or PNG only.');
  }
}

// middleware: ensure only image files
const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

router.post('/', upload.single('image'), (req, res) => {
  // return db path to file
  res.send(`/${req.file.path}`);
});

export default router;
