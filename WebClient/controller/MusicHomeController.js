$("header").load("./shared/header.html");


var musicHomeController = function(){

	var trackService = new TrackService();

	function loadData(tracks){

		for (var i = 0; i < tracks.length; i++) {
			
			var alltracks  = document.getElementsByClassName("container")[0];

			var trackContainer = document.createElement("div");

			trackContainer.className = "col-sm-6 col-md-3";

			var track = controllerHelper.getTrack(tracks[i]);

			trackContainer.appendChild(track);

			alltracks.appendChild(trackContainer);
		}

	}

	return{

		trackService:trackService,

		set:loadData
	}
}();

window.onload = function(){

	$(".navbar-brand").attr("href","MusicHome.html");

	musicHomeController.trackService.getAll(musicHomeController);	

}