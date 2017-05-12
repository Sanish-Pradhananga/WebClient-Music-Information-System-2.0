$("header").load("./shared/header.html");
var userService = new UserService();

userService.getAll();

function loadData(userList){

			var userTable = document.getElementById("user-table-body");

			for (var i = 0; i < userList.length; i++) {

				var tr = document.createElement("tr");

				for(var prop in userList[i]){

					if(prop === "userId" ||  prop === "username" || prop === "firstName" || prop === "lastName"){

						var td = document.createElement("td");

						td.innerHTML = userList[i][prop];

						tr.appendChild(td);
					}

				}

				var action = document.createElement("td");

				var edit = document.createElement("a");

				var glyph = document.createElement("i");

				glyph.className = "glyphicon glyphicon-pencil";

				edit.appendChild(glyph);

				edit.href = "editUser.html?id="+userList[i].userId;

				edit.className = "btn btn-success";

				var del = document.createElement("a");

				glyph = document.createElement("i");

				glyph.className = "glyphicon glyphicon-remove";

				del.appendChild(glyph);

				del.className = "btn btn-danger";

				(function(userId){

					del.addEventListener("click",function(){


						userService.delete(userId);


					});

				})(userList[i].userId);

				action.appendChild(edit);

				action.appendChild(del);

				tr.appendChild(action);

				userTable.appendChild(tr);
			}
}


window.onload = function(){

	var addButton = document.getElementById("add-button");


	addButton.addEventListener("click",function(){

		var userInfo = document.getElementById("user-info");

		userInfo.style.display = "none";

		var form = document.getElementById("user-form");

		form.style.display = "block";

		addButton.style.display = "none";

		form.addEventListener("submit",function(e){

			e.preventDefault();

			var formData = new FormData(form);

			var user = new User(formData.get("id"),
				formData.get("username"),
				formData.get("password"),formData.get("firstname"),
				formData.get('lastname'));

			console.log(user);

			userService.insert(user);
		});

	});

}