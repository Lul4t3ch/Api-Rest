import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'maria',
      sobrenome: 'Henrique',
      email: 'mariasantosmatos15@gmail.com',
      idade: 32,
      peso: 80,
      altura: 1.70,
    });
    res.json({
      novoAluno,
    });
  }
}

export default new HomeController();
