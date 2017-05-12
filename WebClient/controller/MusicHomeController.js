$("header").load("./shared/musicHeader.html");

var trackService = new TrackService();

trackService.getAll();

function loadData(tracks){

for (var i = 0; i < tracks.length; i++) {
	
	var alltracks  = document.getElementsByClassName("container")[0];

	var trackContainer = document.createElement("div");

	trackContainer.className = "col-sm-6 col-md-3";

	var trackLink = document.createElement("a");

	trackLink.className = "thumbnail";

	trackLink.href="MusicPlayer.html?"+tracks[i].trackId;

	var trackAlbumArt = document.createElement("img");

	trackAlbumArt.src = tracks[i].albumArtURL;

	trackAlbumArt.addEventListener("error",function(e){

		e.target.src = "./assets/img/placeholder.png";


	});

	var trackDetails = document.createElement("div");

	trackDetails.className = "caption";

	var title = document.createElement("h4");

	title.innerHTML = tracks[i].trackTitle;

	var trackArtist = document.createElement("artist");

	trackArtist.innerHTML = tracks[i].artist;

	trackDetails.appendChild(title);

	trackDetails.appendChild(trackArtist);

	trackLink.appendChild(trackAlbumArt);

	trackLink.appendChild(trackDetails);

	trackContainer.appendChild(trackLink);

	alltracks.appendChild(trackContainer);
}

}