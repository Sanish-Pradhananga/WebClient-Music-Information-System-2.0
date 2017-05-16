# WebClient-Music-Information-System-2.0
Web Client for MIS
The web client is built using core javascript and jquery. 

The RESTful services of the MIS server is accessed via Jquery. For example the TrackService.js uses jquery's ajax function to get the tracks from the MIS server and similiarly other methods of the service layer are used to update MusicInformationSystem database at the server end. 

Events are handled using mostly javascript and a few jquery functions.

Entities are transferred between client and server in JSON format and content is presented dynamically through controller helper functions.

The mp3 is streamed using expressMp3Server built using node's express module and using a single get method to stream the mp3 through the requested URL. The get method applies the proper header to the response and reads the mp3 file into a read stream and pipes it to the request.

# Getting started
Run the login.html file to get started
