// use giphy API 


$(document).ready(function(){
    // array to hold bottons
    var animal =
["Doggos", "Kitty-Cats", "Horse", "Birds"];

    // function to make buttons

    function populateButtons(arrayToUse, classToAdd, areaToAddTo){
        $(areaToAddTo).empty();

        for (var i = 0; i < arrayToUse.length; i++){
            var a = $("<button>");
            a.addClass(classToAdd);
            a.attr("data-type", arrayToUse[i]);
            a.text(arrayToUse[i]);

            $(areaToAddTo).append(a);
        }
    }

    // function to populate images from api
    $(document).on("click", ".animal-button", function(){
        $("#images").empty();

        $(".animal-button").removeClass("active");
        $(this).addClass("active");

        var type = $(this).attr("data-type");
        var queryURL = ("https://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=DklCagYa3Dh0043femtmnXnX36BPGEEa&limit=10");

        //Ajax call
        $.ajax({
            url:queryURL,
            method: "GET"

        })

        .then(function(response){
            var results = response.data;

            for (var i = 0; i < results.length; i++){
                var animalDiv = $("<div class=\"animal-item\">");

                var rating = results[i].rating;

                var p = $("<p>").text("Rating: " + rating);

                var animated = results[i].images.fixed_height.url;
                var still = results[i].images.fixed_height_still.url;

                var animalImages = $("<img>");
                animalImages.attr("src", still);
                animalImages.attr("data-still", still);
                animalImages.attr("data-animate", animated);
                animalImages.attr("data-state", "still");
                animalImages.addClass("animal-images");

                animalDiv.append(p);
                animalDiv.append(animalImages);

                $("#images").append(animalDiv);
            
            }
        });
    });

    // set state from still to animated when clicking images

    $(document).on("click", ".animal-images", function(){
        var state = $(this).attr("data-state");

        if (state === "still"){
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");

        }
        else {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "still");
        }
    });

    $("#add-animal").on("click", function(event){
        event.preventDefault();
        var newAnimal = $("input").eq(0).val();

        if(newAnimal.length > 2) {
            animal.push(newAnimal);
        }

        populateButtons(animal, "animal-button", "#animal-buttons");

    });
populateButtons(animal, "animal-button", "#animal-buttons");

}); //end of code