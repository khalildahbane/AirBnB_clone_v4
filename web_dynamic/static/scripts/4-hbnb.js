$(document).ready(function(){
    $("#filter_button").click(function(){
        var amenities = [];
        $('input[type=checkbox]').each(function(){
            if(this.checked){
                amenities.push($(this).data("id"));
            }
        });
        
        $.ajax({
            type: "POST",
            url: "http://0.0.0.0:5001/api/v1/places_search",
            contentType: "application/json",
            data: JSON.stringify({"amenities": amenities}),
            success: function(response) {
                $(".places").empty(); // Clear existing places
                response.forEach(function(place) {
                    var article = "<article>" +
                                    "<div class='title'>" +
                                        "<h2>" + place.name + "</h2>" +
                                        "<div class='price_by_night'>" + place.price_by_night + "</div>" +
                                    "</div>" +
                                    "<div class='information'>" +
                                        "<div class='max_guest'><i class='fa fa-users fa-3x' aria-hidden='true'></i><br/>" + place.max_guest + " Guests</div>" +
                                        "<div class='number_rooms'><i class='fa fa-bed fa-3x' aria-hidden='true'></i><br/>" + place.number_rooms + " Bedrooms</div>" +
                                        "<div class='number_bathrooms'><i class='fa fa-bath fa-3x' aria-hidden='true'></i><br/>" + place.number_bathrooms + " Bathroom</div>" +
                                    "</div>" +
                                    "<div class='description'>" + place.description + "</div>" +
                                "</article>";
                    $(".places").append(article);
                });
            }
        });
    });
});
