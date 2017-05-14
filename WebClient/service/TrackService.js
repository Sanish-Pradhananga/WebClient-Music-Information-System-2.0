function TrackService(){


}

TrackService.prototype.getAll = function(){

		$.getJSON("http://localhost:8080/MusicInformationSystem/track",function(data,status){

			loadData(data);

		});

}

TrackService.prototype.getById = function(id){

		$.getJSON("http://localhost:8080/MusicInformationSystem/track/"+id,function(data,status){

			loadCurrentSong(data);

		});

}

TrackService.prototype.insert = function(track,audio){

	$.ajax({
		url:"http://localhost:8080/MusicInformationSystem/track",
	    method: "POST",
	    processData: false,
	    contentType: false,
	    data: track,
		success:function(status){	

			audio.trackId = status.trackId;

			audioService.insert(audio);

		},

		error:function(err){

			console.log(err);
			console.log(err.responseText);
		}
	});

}

TrackService.prototype.delete = function(trackId){
	$.ajax({
		url:"http://localhost:8080/MusicInformationSystem/track/"+trackId,
		method:"DELETE",

		success:function(status){

		location.reload();

		},

		error:function(err){

		console.log(err.responseText);
		}
	});
}

TrackService.prototype.put = function(track){

	$.ajax({
		url:"http://localhost:8080/MusicInformationSystem/track/"+track.id,
		method:"PUT",
		data:JSON.stringify(track),
		processData:false,
		contentType: "multipart/form-data",
		success:function(status){
				console.log(status);	
		},		
		error:function(error,status){

			console.log(error.responseText);

			console.log(status);
		}	
	});
}

TrackService.prototype.getRecomendation = function(id){

	$.getJSON("http://localhost:8080/MusicInformationSystem/track/recom/"+id,function(data,status){

		loadRecomendations(data);
	});
}
