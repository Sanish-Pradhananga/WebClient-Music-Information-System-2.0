	$("header").load("./shared/header.html");
window.onload= function(){

		var userService = new UserService();

		var form = document.getElementById("edit-user");

		form.addEventListener("submit",function(e){

			var userId = document.getElementById("id").value;

			var username = document.getElementById("username").value;

			var password  = document.getElementById("password").value;

			var firstname = document.getElementById("firstname").value;

			var lastname = document.getElementById("lastname").value;

			e.preventDefault();	

			var user = new User(userId,username,password,firstname,lastname);

			userService.put(user);

			console.log("Submited "+user.userId);
		});
}