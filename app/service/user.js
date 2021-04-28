const Service = require('egg').Service;

class UserService extends Service {
  async find(uid) {
    const user = await this.ctx.curl('https://www.example.com');
    return user.data.length;
  }
}

module.exports = UserService;