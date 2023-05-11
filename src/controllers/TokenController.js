import User from '../models/User';

class TokenController {
  async create(req, res) {
    const { email = '', password = '' } = req.body;

    res.send('tudo funcionando.');
  }
}

export default new TokenController();
