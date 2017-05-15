window.onload = function(){

	$('.message').click(function(){

		$('form').animate({height:"toggle"},"slow");

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

		var user = new User(0,formData.get("username"),formData.get("password"),formData.get("firstname"),formData.get("lastname"),"user",formData.get("email"));

		userService.insert(user);

	});

	var error = location.href.split("?")[1];

	if(error === "loginError"){

		var errorMsg = document.getElementById("error-msg");

		errorMsg.innerHTML = "Your credentials are Invalid";
	
	}
	if(error === "userExists"){

		var errorMsg = document.getElementById("error-msg");

		errorMsg.innerHTML = "Username already exits. Duplicate user cannot be created";
	
	}

}