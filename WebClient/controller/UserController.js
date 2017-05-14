$("header").load("./shared/header.html");

function loadData(userList){

			var userTable = document.getElementById("user-table-body");

			for (var i = 0; i < userList.length; i++) {

				var tr = document.createElement("tr");

				for(var prop in userList[i]){

						var td = document.createElement("td");

						td.innerHTML = userList[i][prop];

						tr.appendChild(td);

				}

				var action = document.createElement("td");

				var edit = document.createElement("a");

				var glyph = document.createElement("i");

				var del = document.createElement("a");

				glyph = document.createElement("i");

				glyph.className = "glyphicon glyphicon-remove";

				del.appendChild(glyph);

				del.className = "btn btn-danger";

				(function(user){

					del.addEventListener("click",function(){

						var userService = new UserService();

						var ch = confirm("Do you want to delete user "+user.firstName +"?");
						
						if(ch)
						userService.delete(user.userId);

					});

				})(userList[i]);

				action.appendChild(del);

				tr.appendChild(action);

				userTable.appendChild(tr);
			}
}


window.onload = function(){

	var userService = new UserService();

	userService.getAll();

	var addButton = document.getElementById("add-button");


	addButton.addEventListener("click",function(){

		var userInfo = document.getElementById("user-info");

		userInfo.style.display = "none";

		var form = document.getElementById("user-form");

		addButton.style.display = "none";

		$("#user-form").animate({height:"toggle"},"slow");

		form.addEventListener("submit",function(e){

			e.preventDefault();

			var formData = new FormData(form);

			var user = new User(0,formData.get("username"),formData.get("password"),
				formData.get("firstname"),
				formData.get('lastname'),
				"admin",formData.get("email"));

			userService.insert(user);
		});

	});

	var error = location.href.split("?")[1];

	if(error === "userExists"){

		var errorMsg = document.getElementById("error-msg");

		errorMsg.innerHTML = "User already exits. Duplicate user cannot be created";
	
	}

}