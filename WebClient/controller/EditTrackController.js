$("header").load("./shared/header.html");

var trackService = new TrackService();

var trackId = location.href.split("=")[1];

trackService.getById(trackId);

window.onload= function(){

		var form = document.getElementById("edit-track");

		form.addEventListener("submit",function(e){

			var trackTitle = document.getElementById("trackTitle").value;

			var artist = document.getElementById("artist").value;

			var trackSource = document.getElementById("trackSource").value;

			var track = new Track(trackId,trackTitle,trackSource,artist);

			e.preventDefault();	

			var formData = new FormData(form);

			console.log(formData.entries());

			trackService.put(formData);

			console.log("Submited "+track.id);
		});
}


function loadCurrentSong(track){

	var trackTitle = document.getElementById("trackTitle");

	trackTitle.value = track.trackTitle;

	var artist = document.getElementById("artist");

	artist.value = track.artist;

}