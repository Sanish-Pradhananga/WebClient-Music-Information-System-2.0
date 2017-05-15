function UserService(){


}

UserService.prototype.getAll= function(controller){

	$.getJSON("http://localhost:8080/MusicInformationSystem/user",function(data,status){
		
		controller.set(data);

	});
}

UserService.prototype.insert = function(user){

	$.ajax({
		url:"http://localhost:8080/MusicInformationSystem/user",
		method:"POST",
		data: user,
		success:function(response){

			var page = location.pathname.split("/").pop();

			if(response.userId === 0){

				location.href=page+"?userExists";

			}
			else{

				location.href=page.split("?")[0];
			}
		},
		error:function(err){

			console.log(err.responseText);
		}

	});
	
}

UserService.prototype.put = function(user){

	$.ajax({

		url:"http://localhost:8080/MusicInformationSystem/user/"+user.userId,
		method:"PUT",
		data:{user},
		success:function(){

		},
		error:function(err){

			console.log(err.responseText);
		}

	});
}

UserService.prototype.delete = function(id){

	$.ajax({

		url:"http://localhost:8080/MusicInformationSystem/user/"+id,
		method:"DELETE",
		success:function(){
			location.reload();
		},
		error:function(err){

			console.log(err.responseText);

		}
	});
}

UserService.prototype.authenticate = function(user){


	$.ajax({
		url:"http://localhost:8080/MusicInformationSystem/user/authenticate",
		method:"POST",
		data:user,
		success:function(status){

			if(status==="authenticated_user"){

				location.href="MusicHome.html";

			}

			else if(status ==="authenticated_admin"){

				location.href="index.html";
			}

			else{

				location.href="login.html?loginError";
			}

		},
		error:function(err){
			console.log(err);
			console.log(err.reponseText);
		}
	});

}

UserService.prototype.update = function(data){


	$.ajax({
		url:"http://localhost:8080/MusicInformationSystem/user/update",
		method:"POST",
		data:data,
		success:function(status){

			if(status.userId === 0)
				$("#error-msg").html("Username is Invalid or User doesn't exist");


			else
				$("#error-msg").html("Username and Password changed Sucessfully");

		},
		error:function(err){


			console.log(err.responseText)


		}


	});



}