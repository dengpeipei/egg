const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {

    await this.ctx.render(
        'home/index',
        {title:'hello'}
    );
    //this.ctx.body = 'Hello world';
  }
}

module.exports = HomeController;