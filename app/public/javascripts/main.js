console.log("loaded client js");

console.log($("#messages").html());

function getThoseMessages() { 
	$.get("/getMessages", function (data) {
		// data[i].text contains the message
		$("#messages").html("");

		for (var i = 0; i < data.length; i++) {
			$("#messages").append("<br/>");
			$("#messages").append(data[i].text);
		}

	});
}

getThoseMessages();

setInterval(function () {
	getThoseMessages();
}, 5000);