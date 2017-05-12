function UserService(){


}

UserService.prototype.getAll= function(){

	$.getJSON("http://localhost:8080/MusicInformationSystem/user",function(data,status){
		
		loadData(data);

	});
}

UserService.prototype.insert = function(user){

	$.ajax({
		url:"http://localhost:8080/MusicInformationSystem/user",
		method:"POST",
		data: user,
		success:function(response){

			location.reload();
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