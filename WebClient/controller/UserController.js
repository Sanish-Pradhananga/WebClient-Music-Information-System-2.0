$("header").load("./shared/header.html");


var userController = function(){

		var userService = new UserService();

		var error = location.href.split("?")[1];

		if(error === "userExists"){

			var errorMsg = document.getElementById("error-msg");

			errorMsg.innerHTML = "User already exits. Duplicate user cannot be created";
		
		}


		function loadData(userList){

					var userTable = document.getElementById("user-table-body");

					for (var i = 0; i < userList.length; i++) {

						var row = controllerHelper.setData(userList[i]);

						var action = document.createElement("td");

						var del = controllerHelper.setAction();
						
						del.className = "glyphicon glyphicon-remove";

						del.parentElement.className = "btn btn-danger";

						(function(user){

							del.addEventListener("click",function(){

								var ch = confirm("Do you want to delete user "+user.firstName +"?");
								
								if(ch)
									userService.delete(user.userId);

							});

						})(userList[i]);

						action.appendChild(del.parentElement);

						row.appendChild(action);

						userTable.appendChild(row);
					}
		}

		return{

			userService : userService,

			set:loadData
		}

}();



window.onload = function(){

	userController.userService.getAll(userController);

	var addButton = document.getElementById("add-button");

	addButton.addEventListener("click",function(){

		var userInfo = document.getElementById("user-info");

		userInfo.className = "disappear";

		addButton.className += " disappear";

		var form = document.getElementById("user-form");

		$("#user-form").animate({height:"toggle"},"slow");

		form.addEventListener("submit",function(e){

			e.preventDefault();

			var formData = new FormData(form);

			var user = new User(0,formData.get("username"),formData.get("password"),
				formData.get("firstname"),
				formData.get('lastname'),
				"admin",formData.get("email"));

			userController.userService.insert(user);
		});

	});
}