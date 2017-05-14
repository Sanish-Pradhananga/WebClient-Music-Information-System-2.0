$("header").load("./shared/header.html");

window.onload = function(){

	$(".navbar-brand").attr("href","settings.html");

	$(".header").html("Settings");

	var back = document.getElementById("back");

	back.addEventListener("click",function(){

		history.back()

	});


	var submit = document.getElementById("settings-form");

	submit.addEventListener("submit",function(e){

		e.preventDefault();

		var formData = new FormData(submit);

		if(formData.get("newPassword")!== formData.get("confirmedPassword")){

			var msg  = document.getElementById("error-msg");

			msg.innerHTML = "Passwords Don't Match";
		}
		else{

			var userService = new UserService();

			var user = {};

			for(var key of formData.keys())
				user[key] = formData.get(key);

			userService.update(user);
		}

	});

}


