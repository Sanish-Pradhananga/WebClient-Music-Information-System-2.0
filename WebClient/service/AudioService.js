function AudioService(){

	this.serverURL = "http://localhost:8080/MusicInformationSystem/audio";


}

AudioService.prototype.insert = function(audio){

	$.ajax({
		url:this.serverURL,
		method:"POST",
		data:audio,
		success:function(status){

			location.reload();

		},
		error:function(err){

			console.log(err.responseText);
		}

	});

}

AudioService.prototype.delete = function(track){

	$.ajax({
		url:this.serverURL+"/"+track.audio.audioId,
		method:"DELETE",

		success:function(){

			var trackService = new TrackService();

			trackService.delete(track.trackId);

		},
		error:function(){

		}

	});



}