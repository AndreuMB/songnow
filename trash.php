<html>
    <head>
		<!-- <script src="view/assets/js/jquery.min.js"></script> -->
    </head>
    <body>
        <div id="content">Dynamic Content goes here</div>
        <div id="page-selection">Pagination goes here</div>
        <script>
    $('.demo1').bootpag({
        total: 5
    }).on("page", function(event, num){
        $(".content").html("Page " + num); // or some ajax content loading...
     
        // ... after content load -> change total to 10
        $(this).bootpag({total: 10, maxVisible: 10});
     
    });	
        </script>
    </body>
    </html>