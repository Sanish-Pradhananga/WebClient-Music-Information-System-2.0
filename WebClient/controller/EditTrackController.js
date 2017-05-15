$("header").load("./shared/header.html");

var editTrackController = function(){

	var trackService = new TrackService();

	function loadCurrentSong(track){

		var trackTitle = document.getElementById("trackTitle");

		trackTitle.value = track.trackTitle;

		var artist = document.getElementById("artist");

		artist.value = track.artist;

	}

	return{

		setCurrentSong:loadCurrentSong,

		trackService:trackService
	}
}();

window.onload= function(){

		var trackId = location.href.split("=")[1];

		editTrackController.trackService.getById(trackId,editTrackController);

		var form = document.getElementById("edit-track");

		form.addEventListener("submit",function(e){

			e.preventDefault();	

			var formData = new FormData(form);

			formData.append("id",trackId);

			editTrackController.trackService.update(formData);
		});
}
