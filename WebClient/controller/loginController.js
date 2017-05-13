
$('.message').click(function(){

	$('form').animate({height:"toggle",opacity:"toggle"},"slow");

});

var userService = new UserService();

var loginForm = document.getElementById("sign-in");

loginForm.addEventListener("submit",function(e){

	e.preventDefault();

	var formData = new FormData(loginForm);

	var user = new User(0,formData.get("username"),formData.get("password"));


	userService.authenticate(user);

});


var create = document.getElementById("sign-up");

create.addEventListener("submit",function(e){

	e.preventDefault();

	var formData = new FormData(create);

	var user = new User(0,formData.get("username"),formData.get("password"),formData.get("firstname"),formData.get("lastname"),"user");

	userService.insert(user);

});