const multer = require("multer");
const multerConfig = require("../config/multerConfig");
const Foto = require("../models/Foto");

const upload = multer(multerConfig).single("foto");

class FotoController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(401).json({
          errors: [error.code],
        });
      }
      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const foto = await Foto.create({ originalname, filename, aluno_id }, {raw: true});

        return res.status(200).json(foto);
      } catch (e) {
          console.log(e)
          return res.status(400).json({
              errors: ["Aluno não existe"],
            });
      }
    });
  }
}

module.exports = new FotoController();
