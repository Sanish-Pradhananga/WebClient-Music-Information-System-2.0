function TrackService(){


}


TrackService.prototype.getAll = function(){

		$.getJSON("http://localhost:8080/MusicInformationSystem/track",function(data,status){

			loadData(data);

		});

}


function loadData(trackList){

			var trackTable = document.getElementsByTagName("tbody")[0];

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

					});

				})(trackList[i].trackId);

				action.appendChild(add);

				action.appendChild(del);

				tr.appendChild(action);

				trackTable.appendChild(tr);

			}



}

function deleteTrack(trackId){




}



var trackService = new TrackService();

trackService.getAll();