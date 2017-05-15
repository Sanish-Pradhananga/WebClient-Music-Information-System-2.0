var controllerHelper = function(){


	function createThumbnail(track){

		var trackDetails = document.createElement("a");

		trackDetails.className ="thumbnail";

		trackDetails.href="MusicPlayer.html?"+track.trackId;

		trackDetails.appendChild(createImage(track.albumArtURL));

		trackDetails.appendChild(createDetails(track.trackTitle,track.artist));

		return trackDetails;

	}

	function createDetails(title,artist){

		var details = document.createElement("div");

		details.className = "caption";

		details.appendChild(createDetail(title,"h4"));

		details.appendChild(createDetail(artist,"h5"));

		return details;

	}

	function createImage(url){

		var img = document.createElement("img");

		img.src = url;

		img.addEventListener("error",function(e){

			e.target.src = "./assets/img/placeholder.png";


		});

		return img;

	}

	function createDetail(data,type){

		var detail = document.createElement(type);

		detail.appendChild(document.createTextNode(data));

		return detail;

	}

	return {

		getDetails:createDetails,

		getImage:createImage,

		getTrack:createThumbnail
	}

}();