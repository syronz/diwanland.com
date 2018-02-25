'use strict';

module.exports = function(app) {
	var todoList = require('../controllers/todoListController');
	var login =  require('../controllers/loginController');
	var count = require('../controllers/countController');
	var testUpload = require('../controllers/testUploadController');
	var upload = require('../controllers/uploadController');
	var imageProvider = require('../controllers/imageController');
	var model = require('../controllers/modelController');

	// todoList Routes
	app.route('/tasks')
		.get(todoList.list_all_tasks)
		.post(todoList.create_a_task);

	app.route('/tasks/:taskId')
		.get(todoList.read_a_task)
		.put(todoList.update_a_task)
		.delete(todoList.delete_a_task);

	app.route('/login')
		.post(login.doLogin)
		.get(login.checkLogin);

	app.route('/logout')
		.post(login.logOut);

	app.route('/count/:collection/:str*?')
		.get(count);

	app.route('/uploadBanner')
		.post(upload.uploadBanner);

	app.route('/upload')
		.post(upload.uploadImage);

	app.route('/images/:imageName/:idElement*?')
		.get(imageProvider)
		.delete(upload.delete)

	app.route('/models/random/:category')
		.get(model.random)

	// app.route('/companies')
	// 	.post(function(req, res){
	// 		// delete req.session.user;
	// 		res.json(req.session);
	// 	});
};
