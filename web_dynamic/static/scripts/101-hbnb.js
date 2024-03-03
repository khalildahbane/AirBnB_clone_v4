$(document).ready(function(){
    // Function to toggle reviews visibility
    function toggleReviews() {
        var reviews = $(".reviews");
        if (reviews.is(":visible")) {
            reviews.hide();
            $("#toggle_reviews").text("Show");
        } else {
            reviews.show();
            $("#toggle_reviews").text("Hide");
        }
    }

    // Initial setup
    $(".reviews").hide(); // Hide reviews initially

    // Event listener for toggling reviews visibility
    $("#toggle_reviews").click(function(){
        toggleReviews();
    });
});
