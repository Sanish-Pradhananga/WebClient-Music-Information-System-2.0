$("header").load("./shared/header.html");
window.onload= function(){

		var trackService = new TrackService();

		var form = document.getElementById("edit-track");

		form.addEventListener("submit",function(e){

			var trackId = document.getElementById("id").value;

			var trackTitle = document.getElementById("trackTitle").value;

			var artist = document.getElementById("artist").value;

			var trackSource = document.getElementById("trackSource").value;

			var track = new Track(trackId,trackTitle,trackSource,artist);

			e.preventDefault();	

			var formData = new FormData(form);

			trackService.put(track);

			//console.log("Submited "+track.id);
		});
}