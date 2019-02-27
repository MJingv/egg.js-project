const Controller = require('egg').Controller;

class HomeController extends Controller {
	async index() {
		this.ctx.body = 'hello world from jehol';
	}

}

module.exports = HomeController;
