$("header").load("./shared/header.html");


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

				var edit = document.createElement("a");

				var glyph = document.createElement("i");

				glyph.className ="glyphicon glyphicon-pencil";

				edit.href = "edit.html?id="+trackList[i].trackId;

				edit.appendChild(glyph);

				edit.className = "btn btn-success";

				var del = document.createElement("a");

				glyph = document.createElement("i");

				glyph.className = "glyphicon glyphicon-remove";

				del.appendChild(glyph);

				del.className = "btn btn-danger";

				(function(trackId){

					del.addEventListener("click",function(){

						trackService.delete(trackId);

					});

				})(trackList[i].trackId);

				action.appendChild(edit);

				action.appendChild(del);

				tr.appendChild(action);

				trackTable.appendChild(tr);

			}



}

window.onload=function(){

		var addButton = document.getElementById("add-button");

		addButton.addEventListener("click",function(){

			var trackInfo = document.getElementById("track-info");

			trackInfo.style.display = "none";

			addButton.style.display = "none";

			var form = document.getElementById("track-form");

			form.style.display = "block";

			form.addEventListener("submit",function(e){

				e.preventDefault();

				var formData = new FormData(form);

				trackService.insert(formData);

			});

		});

}