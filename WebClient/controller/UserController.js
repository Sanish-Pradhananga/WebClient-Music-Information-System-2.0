function UserService(){


}


UserService.prototype.getAll= function(){

	$.getJSON("http://localhost:8080/MusicInformationSystem/user",function(data,status){

		console.log(data);
		loadData(data);

	});	
}


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

				var add = document.createElement("a");

				add.innerHTML = "Edit";

				add.href = "edit.html?id="+userList[i].userId;

				add.className = "btn btn-success";

				var del = document.createElement("a");

				del.innerHTML = "Delete";

				del.className = "btn btn-danger";

				(function(userId){

					del.addEventListener("click",function(){


						userService.delete(userId);


					});

				})(userList[i].userId);

				action.appendChild(add);

				action.appendChild(del);

				tr.appendChild(action);

				userTable.appendChild(tr);

			}



}