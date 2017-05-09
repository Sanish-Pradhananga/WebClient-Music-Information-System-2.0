function TrackService(){


}


TrackService.prototype.getAll = function(){

		$.getJSON("http://localhost:8080/MusicInformationSystem/track",function(data,status){

			loadData(data);

		});

}

TrackService.prototype.insert = function(track){
	$.ajax({
		url:"http://localhost:8080/MusicInformationSystem/track",
		method:"POST",
		data:track,

		success:function(){

			location.reload();
		},

		error:function(err){

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

var trackService = new TrackService();

trackService.getAll();


function loadData(trackList){

			var trackTable = document.getElementById("track-table-body");

			for (var i = 0; i < trackList.length; i++) {

				var tr = document.createElement("tr");

				for(var prop in trackList[i]){

					if(prop === "trackId" ||  prop === "trackTitle" || prop === "artist"){

						var td = document.createElement("td");

						td.innerHTML = trackList[i][prop];

						tr.appendChild(td);
					}

				}

				var action = document.createElement("td");

				var add = document.createElement("a");

				add.innerHTML = "Edit";

				add.href = "edit.html?id="+trackList[i].trackId;

				add.className = "btn btn-success";

				var del = document.createElement("a");

				del.innerHTML = "Delete";

				del.className = "btn btn-danger";

				(function(trackId){

					del.addEventListener("click",function(){


						trackService.delete(trackId);


					});

				})(trackList[i].trackId);

				action.appendChild(add);

				action.appendChild(del);

				tr.appendChild(action);

				userTable.appendChild(tr);

			}



}

window.onload=function(){

var content = document.getElementById("track-info");

var addButton = document.getElementById("add-button");

var form = document.getElementById("track-form");

addButton.addEventListener("click",function(){

	content.style.display = "none";

	form.style.display = "block";

});

var save = document.addEventListener("submit",function(e){

	var trackId = document.getElementById("id");

	var trackTitle = document.getElementById("trackTitle");

	var artist = document.getElementById("artist");

	var trackSource = document.getElementById("trackSource");

	e.preventDefault();

	trackService.insert({id:trackId.value,trackTitle:trackTitle.value,artist:artist.value,trackSource:trackSource.value});

});

}