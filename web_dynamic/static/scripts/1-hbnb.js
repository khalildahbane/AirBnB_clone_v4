$(document).ready(function() {
    var amenities = {};

    $('input[type="checkbox"]').change(function() {
        var id = $(this).data('id');
        var name = $(this).data('name');

        if ($(this).is(":checked")) {
            amenities[id] = name;
        } else {
            delete amenities[id];
        }

        var amenitiesList = Object.values(amenities).join(', ') || "No amenities selected";
        $('.amenities h4').text("Amenities: ");
        $('.amenities h4').next('p').text(amenitiesList);
    });
});
