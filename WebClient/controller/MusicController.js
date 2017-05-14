$("header").load("./shared/header.html")


function loadRecomendations(tracks){

		for (var i = 0; i < tracks.length; i++) {

			var recomendation = document.getElementById("recomendation");

			var trackContainer = document.createElement("div");

			trackContainer.className = "col-xs-6 col-md-3";

			var trackLink = document.createElement("a");

			trackLink.className = "thumbnail";

			trackLink.href="MusicPlayer.html?"+tracks[i].trackId;

			var trackAlbumArt = document.createElement("img");

			trackAlbumArt.src = tracks[i].albumArtURL;


			trackAlbumArt.addEventListener("error",function(e){


				e.target.src="./assets/img/placeholder.png";


			});

			var details = document.createElement("div");

			details.className="caption";

			var trackName = document.createElement("h4");

			trackName.innerHTML = tracks[i].trackTitle;

			var artistName = document.createElement("p");

			artistName.innerHTML = tracks[i].artist;

			details.appendChild(trackName);

			details.appendChild(artistName);

			trackLink.appendChild(trackAlbumArt);

			trackLink.appendChild(details);

			trackContainer.appendChild(trackLink);

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


window.onload = function(){

		$(".navbar-brand").attr("href","MusicHome.html");

		var trackService = new TrackService();

		selectedTrackId = window.location.href.split("?")[1];

		trackService.getRecomendation(selectedTrackId);

		trackService.getById(selectedTrackId);


		$(".header").html("Music Library");
		
		var play = document.getElementById("play");

		var song = document.getElementById("audio");

		var seek = document.getElementById("seek");

		play.addEventListener("click",function(){

			song.play();

			seek.max = song.duration;

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

		});


		seek.addEventListener("change",function(){

			song.currentTime = seek.value;

		});


}


