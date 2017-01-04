//This application uses Three AJAX calls to display content depending on the content desired.




//This Ajax call diplsays the trending GIFs from the Giphy API
var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";

$.ajax({
    url:queryURL, 
    data: {
        limit: 20,

    },
    method: 'GET'

})
.done(function (res) {

    $.each(res.data, function (key, gif) {
                //Renders to the #gifsReturned div
                $("#gifsReturned").append('<iframe " src = " ' +  gif.embed_url +' " />');
                

            });
});

//This call is triggered with an on click event which returns GIFs depending on their value.
$('#presets, #presets1, #presets2, #presets3, #presets4, #presets5').on('click', function(){

    $('#gifsReturned').empty();    

    var keyword = $(this).data("value");


    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + keyword + "&api_key=dc6zaTOxFJmzC&limit=20";

    $.ajax({
        url:queryURL, 
        data: {
            limit: 20,

        },
        method: 'GET'

    })
    .done(function (res) {

        $.each(res.data, function (key, gif) {

            $("#gifsReturned").append('<iframe " src = " ' +  gif.embed_url +' " />');


        });
    });

    return false;

});








/*This event is triggered when the end key is pressed with text inside of the #gameInput
div and displays GIFs based on categories */

$('#gameInput').keypress(function(e) {

    if(e.which == '13'){

        $('#gifsReturned').empty();
        
        var keyword = $('#gameInput').val();
        
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + keyword + "&api_key=dc6zaTOxFJmzC&limit=20";

        $.ajax({
          url:queryURL, 
          data: {
           limit: 20,

       },
       method: 'GET'

   })
        .done(function (res) {

            $.each(res.data, function (key, gif) {

                $("#gifsReturned").append('<iframe " src = " ' +  gif.embed_url +' " />');
                

            });
        });
        return false;
    };
    
});


