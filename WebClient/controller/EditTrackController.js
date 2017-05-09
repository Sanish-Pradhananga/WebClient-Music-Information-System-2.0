
		var form = document.getElementsByTagName("form")[0];

		var trackId = document.getElementById("id");

		var trackTitle = document.getElementById("trackTitle");

		var artist = document.getElementById("artist");

		var trackSource = document.getElementById("trackSource");

		form.addEventListener("submit",function(e){

			var track = { trackTitle: trackTitle.value, trackSource: trackSource.value, artist: artist.value};

			console.log(track);

			e.preventDefault();	

			$.ajax({
				url:"http://localhost:8080/MusicInformationSystem/track/"+trackId.value,
				method:"PUT",
				data:track,
				dataType:"json",
				success:function(status){
						console.log(status);
				},		
				error:function(error,status){

					console.log(error.responseText);

					console.log(status);
				}	

			});


			console.log("Submited "+trackId.value);
		});