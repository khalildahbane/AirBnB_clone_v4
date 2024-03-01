/*checking if its correct*/
$(document).ready(() => {
  const amenities = {};

  $('input[type="checkbox"]').change(function () {
    const id = $(this).data('id');
    const name = $(this).data('name');

    if ($(this).is(':checked')) {
      amenities[id] = name;
    } else {
      delete amenities[id];
    }

    const amenitiesList = Object.values(amenities).join(', ') || 'No amenities selected';
    $('.amenities h4').text('Amenities: ');
    $('.amenities h4').next('p').text(amenitiesList);
  });
});
