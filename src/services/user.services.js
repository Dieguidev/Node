
const Users = require('../models/users.model');

class UserServices {
  static async getAll() {    //stattic es como una funcion pero parecido a una plkantilla
    try {
      const result = await Users.findAll();
      return result;
    } catch (error) {
      throw new error;
    }
  }
  
  static async getById(id) {
    try {
      const result =await Users.findByPk(id);
      return result;
    } catch (error) {
      throw new error;
    }
  }
}

module.exports = UserServices;


