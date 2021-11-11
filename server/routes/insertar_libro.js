const router = require("express").Router();
const path = require("path");
const pool = require("../database/database");
const multer = require("multer");
const { json } = require("express");
//const autorizacion = require("../middlewares/autorizacion");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "pdf") {
      cb(null, "./public/libros");
    } else if (file.fieldname === "image") {
      cb(null, "./public/portada_libros");
    }
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.fieldname === "pdf") {
      const filetypes = /pdf/;
      const mimetype = filetypes.test(file.mimetype);
      const extname = filetypes.test(path.extname(file.originalname));
      if (mimetype && extname) {
        return cb(null, true);
      }
      cb("Error, archivo pdf no valido");
    } else if (file.fieldname === "image") {
      const filetypes = /jpeg|jpg|png|gif/;
      const mimetype = filetypes.test(file.mimetype);
      const extname = filetypes.test(path.extname(file.originalname));
      if (mimetype && extname) {
        return cb(null, true);
      }
      cb("Error, imagen no valida");
    }
  },
});

router.post(
  "/",
  upload.fields([
    { name: "pdf", maxCount: "1" },
    { name: "image", maxCount: "1" },
  ]),
  async (req, res) => {
    try {
      //1. deseseamos obtener los datos del libro
      const { titulo, 
              autor, 
              editorial, 
              descripcion, 
              fecha_publicacion } =
      req.body;

      //2. Ver si el libro ya existe
        const libro = await pool.query(
            "SELECT * FROM libros WHERE titulo = ?",
            [titulo]
        );
        //3. Si el libro no existe, insertarlo
        if (libro.length === 0) {
            const { pdf, image } = req.files;
            const pdf_name = pdf[0].filename;
            const image_name = image[0].filename;
            const new_libro = {
                titulo,
                autor,
                editorial,
                descripcion,
                fecha_publicacion,
                pdf_name,
                image_name
            };
            await pool.query("INSERT INTO libros set ?", [new_libro]);  //insertar el libro en la base de datos     
            res.json({ message: "Libro guardado" });
        } else {
            res.json({ message: "El libro ya existe" });
        }
    } catch (err) {
      console.error(err.message);
    }
  }
);

module.exports = router;
