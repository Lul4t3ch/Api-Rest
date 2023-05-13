import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll();
    res.json(alunos);
  }
}

export default new AlunoController();

// const novoAluno = await Aluno.create({
//   nome: 'maria',
//   sobrenome: 'Henrique',
//   email: 'mariasantosmatos15@gmail.com',
//   idade: 32,
//   peso: 80,
//   altura: 1.70,
// });
