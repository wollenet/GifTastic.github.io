var sport = ["Baseball", "Hockey", "Football", "Golf", "Tennis", "Volleyball", "Basketball", "Cricket", "Table tennis", "Soccer", "Bowling"];

function sport () {
	var sport = $(this).attr("data-name");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + sports + "&api_key=WmeIdNLVJCn8w3gQVIZK1q7bx6SHfyu0&limit=10";
	
	$.ajax({
		url: queryURL,
		method: "GET"
	})
		.done(function(response) {
		
		var results = $(results.data-name)

		var rating = response.Rated;

		var ratingone = $("<p>").text("Rating:" + rating);
	}

function populatebuttons () {

	$("#buttons").empty();

	for (var i = 0; i < sport.length; i++)

		var btn = $("<button>");

		btn.addclass("sport");

		btn.attr("data-name", sport[i]);

		btn.text(sport[i]);

	$("buttons").append(btn);

	$("#add-sport").on("click", function(event) {

		var sport = $("#sport-input").val().trim();
		event.preventdefault();

		sport.push(sport);

		populatebuttons();
	});

	$(document).on("click", ".sport")