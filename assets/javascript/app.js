  var queryURL = "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";

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
                // $("#gifsReturned").append('<iframe " src = " ' +  gif.embed_url +' " />');

            });
        });
     











$('#gameInput').keypress(function(e) {

    	
        if(e.which == '13'){
        
        
       
        
        $('#gifsReturned').empty();
        
    var keyword = $('#gameInput').val();
        

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + keyword + "&api_key=dc6zaTOxFJmzC&limit=20";

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
                // $("#gifsReturned").append('<iframe " src = " ' +  gif.embed_url +' " />');

            });
        });
       return false;
   };
    
    });


