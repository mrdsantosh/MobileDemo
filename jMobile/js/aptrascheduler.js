jQuery.support.cors = true; // force cross-site scripting (as of jQuery 1.5)

$.ajaxSetup({ 
	cache: false,
	error: function(xhr, status, error) {
		alert("An AJAX error occured: " + status + "\nError: " + error);
		window.location = "index.html";
	}
});

function getParams(url) {
	 var match = url.match(/[^=&?]+\s*=\s*[^&#]*/g);
	 var params = {};

	 for ( var i = match.length; i--; ) {
	   var spl = match[i].split("=");
	   var name = spl[0].replace("[]", "");
	   var value = spl[1];

	   params[name] = params[name] || [];
	   params[name].push(value);
	 }
	 
	 return params;
}