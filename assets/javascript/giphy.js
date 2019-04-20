// get input value
// get request for giphy


$(document).ready(function() {

var apiKey = "&api_key=DklCagYa3Dh0043femtmnXnX36BPGEEa";
var query = "&q=sport+fails";
var input = $('#input');
var submit = $('#submit');
var inputVal = submit.val();

$(input).on('click', function(event){
    event.preventDefault();
    // console.log(submit.val());
    var inputVal = input.val();
    // getGiphy(inputVal);
});

// function displayGifs(){
//     var action = $(this).attr("data-name");
//     var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + action + "&api_key=dc6zaTOxFJmzC&limit=10";
//     console.log(queryURL); // displays the constructed url
//     $.ajax({
//         url: queryURL,
//         method: 'GET'
    })
function getGiphy(inputVal) {
    $.get('https://api.giphy.com/v1/gifs/search?q=' +  inputVal + apiKey + '&limit=10')
    .done(function (data) {
        console.log(data);
        for (var i = 0; i < 9; i++) {
            ;

        }
    });


// getGiphy();

};