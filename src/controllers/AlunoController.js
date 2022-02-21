const Aluno = require("../models/Aluno");
const Foto = require('../models/Foto');

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: ['id', 'nome','sobrenome', 'email', 'idade', 'peso', 'altura'],
      order: [['id', 'DESC'], [Foto, 'id', 'Desc']],
      include:{
        model:Foto,
        attributes: ['url', 'filename' ]
      }
    });
    return res.json(alunos);
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ["Faltando ID"],
        });
      }
      const aluno = await Aluno.findByPk(id,{ 
        attributes: ['id', 'nome','sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Foto, 'id', 'Desc']],
        include:{
          model:Foto,
          attributes: [ 'url', 'filename' ],
        },
      });
      if (!aluno) {
        return res.status(400).json({
          errors: ["Aluno não existe"],
        });
      }
      res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ["Faltando ID"],
        });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ["Aluno não existe"],
        });
      }
      await aluno.destroy();
      res.json({
        apagado: true,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      await Aluno.update(req.body, {
        where: { id },
      });
      return res.json({"Usuário atualizado": req.body});
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
  
}

module.exports = new AlunoController();