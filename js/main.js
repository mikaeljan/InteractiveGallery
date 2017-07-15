let $search = $('#search');

$(document).ready(function(){
    $search.keyup(function(){

        // Retrieve the input field text
        var filter = $(this).val();

        // Loop through the comment list
        $(".columns img").each(function(){

            // If the list item does not contain the title attr, fade it out
            if ($(this).attr("title").search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();

                // Show the list item if the phrase matches
            } else {
                $(this).fadeIn();
            }
        });
    });
});

//Lightbox firing plugin, changed maxWidth and resizing
lightbox.option({
    'resizeDuration': 200,
    'maxWidth': 800
});
