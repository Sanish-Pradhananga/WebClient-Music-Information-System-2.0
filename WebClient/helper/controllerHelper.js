var controllerHelper = function(){

	function createActions(){

		var actionLink = document.createElement("a");

		var icon = document.createElement("i");

		actionLink.appendChild(icon);

		return icon;

	}

	function createDataRows(data,skipCols){

		var row = document.createElement("tr");

			for(var prop in data){

				if( !skipCols || skipCols.indexOf(prop) === -1){

					var col = document.createElement("td");

					col.appendChild(document.createTextNode(data[prop]));

					row.appendChild(col);
				}

			}

		return row;
	}

	return {

		setAction: createActions,
		setData:createDataRows
	}

}();