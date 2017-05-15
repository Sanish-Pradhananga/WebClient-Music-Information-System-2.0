$("header").load("./shared/header.html");

var defaultController = function(){

	var trackService = new TrackService();

	var audioService = new AudioService();

	function loadData(trackList){

			var trackTable = document.getElementById("track-table-body");

			for (var i = 0; i < trackList.length; i++) {

				var row = controllerHelper.setData(trackList[i],["albumArtURL","audio"]);

				var action = document.createElement("td");

				var edit = controllerHelper.setAction();

				edit.className = "glyphicon glyphicon-pencil";

				edit.parentElement.className = "btn btn-success";

				edit.parentElement.href = "edit.html?id="+trackList[i].trackId;

				var del = controllerHelper.setAction();

				del.className = "glyphicon glyphicon-remove";

				del.parentElement.className = "btn btn-danger";

				(function(track){

					del.addEventListener("click",function(){

						var ch = confirm("Do you want to delete track "+track.trackTitle+" ?");

						if(ch)
							audioService.delete(track);

					});

				})(trackList[i]);

				action.appendChild(edit.parentElement);

				action.appendChild(del.parentElement);

				row.appendChild(action);

				trackTable.appendChild(row);

			}
	}

	return {

		trackService:trackService,

		audioService:audioService,
		
		set: loadData
	}

}();

window.onload=function(){

		defaultController.trackService.getAll(defaultController);

		var addButton = document.getElementById("add-button");

		addButton.addEventListener("click",function(){

			var trackInfo = document.getElementById("track-info");

			trackInfo.className = "disappear";

			addButton.className += " disappear";

			var form = document.getElementById("track-form");

			$("#track-form").animate({height:"toggle"},"slow");

			form.addEventListener("submit",function(e){

				e.preventDefault();

				var formData = new FormData(form);

				var audio = new Audio("0",
					Math.random().toFixed(10),Math.random().toFixed(10),
					Math.random().toFixed(10),Math.random().toFixed(10),
					Math.random().toFixed(10),Math.random().toFixed(10),formData.get("id"));//Dummy Audio attributes

				defaultController.trackService.insert(formData,audio);


			});

		});

}