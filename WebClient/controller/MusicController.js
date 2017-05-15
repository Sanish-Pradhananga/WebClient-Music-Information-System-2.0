$("header").load("./shared/header.html")


var musicController = function(){

	var trackService = new TrackService();

	function loadRecomendations(tracks){

			for (var i = 0; i < tracks.length; i++) {

				var recomendation = document.getElementById("recomendation");

				var trackContainer = document.createElement("div");

				trackContainer.className = "col-sm-6 col-md-3";

				var track = controllerHelper.getTrack(tracks[i]);

				trackContainer.appendChild(track);

				recomendation.appendChild(trackContainer);

			}

	}

	function loadCurrentSong(track){

		var currentImage = document.getElementById("current-image");

		currentImage.addEventListener("error",function(){

			currentImage.src = "./assets/img/placeholder-small.png";

		});

		currentImage.src = track.albumArtURL.replace("300x300","174s");

		var currentSong = document.getElementById("audio");

		currentSong.src = track.streamURL+track.trackSource;

		var artist = document.getElementById("artist");

		artist.innerHTML += track.artist;

		var trackTitle = document.getElementById("track-title");

		trackTitle.innerHTML += track.trackTitle;

	}

	return {

		trackService:trackService,

		setRecomendations:loadRecomendations,

		setCurrentSong:loadCurrentSong
	}
}();


window.onload = function(){

		$(".navbar-brand").attr("href","MusicHome.html");

		$(".header").html("Music Library");

		selectedTrackId = window.location.href.split("?")[1];

		musicController.trackService.getRecomendation(selectedTrackId,musicController);

		musicController.trackService.getById(selectedTrackId,musicController);
		
		var play = document.getElementById("play");

		var song = document.getElementById("audio");

		var seek = document.getElementById("seek");

		play.addEventListener("click",function(){

			song.play();

			var pause = document.createElement("a");
			pause.className = "btn btn-primary";

			var icon = document.createElement("i");
			icon.className="glyphicon glyphicon-pause";

			pause.appendChild(icon);

			play.parentNode.replaceChild(pause,play);

			pause.addEventListener("click",function(){

					song.pause();

					pause.parentNode.replaceChild(play,pause);


			});

		});

		song.addEventListener("timeupdate",function(e){

			seek.value = song.currentTime;

			seek.max = song.duration === Infinity ? 400 : song.duration;

		});


		seek.addEventListener("change",function(){

			song.currentTime = seek.value;

		});


}


