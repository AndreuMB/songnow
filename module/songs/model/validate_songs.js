function products(){
    console.log("songs");
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "module/songs/controller/controller_songs.php?op=data",
    })
     .done(function(data) {
        console.log("songs");
        console.log(data);
        $('#songs').empty();

        var img_categ=""

                         
        for(var i=0;i<data.length;i++){
            img_categ=img_categ+

  '<tr>'+
    '<td>' + data[i].song_name + '</td>'+
    '<td>' + data[i].singer + '</td>'+
    '<td>' + data[i].album + '</td>'+
    '<td>' + data[i].duration + '</td>'+
  '</tr>'


        }
        $("#songs").html(
            '<table>'+
            '<tr>'+
            '<th>TITLE</th>'+
            '<th>ARTIST</th>'+
            '<th>ALBUM</th>'+
            '<th>DURATION</th>'+
          '</tr>'+
            img_categ+
            '</table>'
            )                  
        })

}

function product_read(id){
    console.log(id);
    console.log("carousel_jump");
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "module/songs/controller/controller_songs.php?op=read&modal=" + id,
    })
     .done(function(data) {
        console.log("carousel=")
        console.log(data);
        $('#songs').empty();
        $("#songs").html(

            '<h1>DETAILS</h1>'+
            '<div id="main-wrapper">'+
            '<div class="container">'+
                '<div class="row gtr-200">'+
                    '<div class="col-4 col-12-medium">'+
                            '<div id="sidebar">'+
                                '<section class="widget thumbnails">'+
                                    '<div class="grid">'+
                                        '<div class="row gtr-50">'+
                                            '<div class="col-6"><a href="#" class="image fit"><img class="prod_img" src="'+ data.rute +'" alt="" /></a></div>'+
                                        '</div>'+
                                    '</div>'+
                                '</section>'+
                            '</div>'+
                    '</div>'+
                    '<div class="col-8 col-12-medium imp-medium">'+
                            '<div id="content">'+
                                '<section class="last">'+
                                    '<h2>'+ data.song_name +'</h2>'+
                                    '<ul><li>Singer:'+ data.singer +'</li>'+
                                    '<li>Album:'+ data.album +'</li>'+
                                    '<li>Relase date:'+ data.relase_date +'</li>'+
                                    '<li>Genre:'+ data.genre +'</li>'+
                                    '<li>Duration:'+ data.duration +'</li></ul>'+
                                '</section>'+
                            '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>'

            )
            localStorage.removeItem('carousel');
            localStorage.removeItem('id');

        })
        

}

function ajaxForSearch(durl) {
    $.ajax({
        type: "GET",
        dataType: "json",
        url: durl,
    })
     .done(function(data) {
        console.log("filter=");
        console.log(data);

        $('#songs').empty();
 
        var img_categ=""
 
        
        for(var i=0;i<data.length;i++){
             img_categ=img_categ+
            '<tr class="song" id=' + data[i].id_song + '>'+
                '<td>' + data[i].song_name + '</td>'+
                '<td>' + data[i].singer + '</td>'+
                '<td>' + data[i].album + '</td>'+
                '<td>' + data[i].duration + '</td>'+
            '</tr>'
         }

         $("#songs").html(
            '<div class="map">'+
            '<img src="view/img/map.png" alt="map" id=map_img style="width:100%;">'+
            '<div class="centered" data-tr="See map"></div>'+
            '</div>'+
             '<table>'+
             '<tr>'+
             '<th>TITLE</th>'+
             '<th>ARTIST</th>'+
             '<th>ALBUM</th>'+
             '<th>DURATION</th>'+
           '</tr>'+
             img_categ+
             '</table>'
             )                  

         localStorage.removeItem('filter');
         localStorage.removeItem('genre');
         localStorage.removeItem('singer');
         

     })
    }
function load(){

    var cat = localStorage.getItem('filter');
    var car = localStorage.getItem('carousel');
    var genre = localStorage.getItem('genre');
    var singer = localStorage.getItem('singer');
    var song = localStorage.getItem('song');
    var id = localStorage.getItem('id');
    console.log(id);
    console.log(cat);
    console.log(singer);
    if(cat){
        ajaxForSearch("module/songs/controller/controller_songs.php?op=data&filter=" + cat + "&filterb=playlists")
    }else if(car){
        product_read(car);
    }else if(id){
        product_read(id);
    }else if(singer !=="false" && !id){
        console.log("enter in singer");
        ajaxForSearch("module/songs/controller/controller_songs.php?op=data&filter=" + singer + "&filter2=" + genre + "&filterb=singer")
    }else if(genre && singer=="false"){
        console.log("genre: " + genre);
        ajaxForSearch("module/songs/controller/controller_songs.php?op=data&filter=" + genre + "&filterb=genre")
    }else{
        ajaxForSearch("module/songs/controller/controller_songs.php?op=data")
    }
   
}

function send(data){
    console.log(data);
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "module/songs/controller/controller_songs.php?op=filter&checks=" + data,
    })
     .done(function(data) {
        console.log(data);
        $('#songs').empty();
 
        var img_categ=""
 
        
        for(var i=0;i<data.length;i++){
             img_categ=img_categ+
            '<tr class="song" id=' + data[i].id_song + '>'+
                '<td>' + data[i].song_name + '</td>'+
                '<td>' + data[i].singer + '</td>'+
                '<td>' + data[i].album + '</td>'+
                '<td>' + data[i].duration + '</td>'+
            '</tr>'
         }

         $("#songs").html(
            '<div class="map">'+
            '<img src="view/img/map.png" alt="map" id=map_img style="width:100%;">'+
            '<div class="centered" data-tr="See map"></div>'+
            '</div>'+
             '<table>'+
             '<tr>'+
             '<th>TITLE</th>'+
             '<th>ARTIST</th>'+
             '<th>ALBUM</th>'+
             '<th>DURATION</th>'+
           '</tr>'+
             img_categ+
             '</table>'
             )         
    });
}

function initMap() {
    $.ajax({
    type: "GET",
    dataType: "json",
    url: "module/songs/controller/controller_songs.php?op=map",
    })
    .done(function(data) {
        console.log(data);

        $('.row').empty();

        var markers = [];


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: new google.maps.LatLng(38.905081, -0.544696),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    for (var i = 0; i < data.length; i++) {

        var newMarker = new google.maps.Marker({
            position: new google.maps.LatLng(data[i].lat, data[i].lng),
            map: map,
            title: data[i].name
        });

        google.maps.event.addListener(newMarker, 'click', (function (newMarker, i) {
            return function () {
                infowindow.setContent(data[i].name);
                infowindow.open(map, newMarker);
            }
        })(newMarker, i));

        markers.push(newMarker);
    }

    })
}

$(document).ready(function () {
    load();
    var count = 0;
    console.log("checks=");
    $('#check1').click(function () {
        if ($('#check1').is(":checked")){
            if(count == 0){
                checks = "WHERE playlists = '10'";
                count=count+1;
                console.log(count);
                console.log(checks);
            }else{
                checks = checks + " OR playlists = '10'";
                count=count+1;
                console.log(count);
                console.log(checks);

            }
        }else{
            if(count == 1){
                console.log("quit where");
                checks.split("WHERE").pop()
                count=count-1;
                console.log(count);
                console.log(checks);
            }else{
                // checks.split("OR").pop()
                console.log("replace")
                checks = checks.replace(" OR playlists = '10'", "")
                count=count-1;
                console.log(count);
                console.log(checks);
            }
        }
        // console.log("U SEE ME");
        send(checks);
    });
    $('#check2').click(function () {
        if ($('#check2').is(":checked")){
            if(count == 0){
                checks = "WHERE playlists = '11'";
                count=count+1;
                console.log(count);
                console.log(checks);
            }else{
                count=count+1;
                checks = checks + " OR playlists = '11'";
                console.log(count);
                console.log(checks);

            }
        }else{
            if(count == 1){
                console.log("quit where");
                checks.split("WHERE").pop()
                count=count-1;
                console.log(count);
                console.log(checks);
            }else{
                // checks.split("OR").pop()
                checks = checks.replace(" OR playlists = '11'", "")
                count=count-1;
                console.log(count);
                console.log(checks);
            }
        }
        send(checks);
    });
    $('#check3').click(function () {
        if ($('#check3').is(":checked")){
            if(count == 0){
                checks = "WHERE playlists = '14'";
                count=count+1;
                console.log(count);
                console.log(checks);
            }else{
                checks = checks + " OR playlists = '14'";
                count=count+1;
                console.log(count);
                console.log(checks);

            }
        }else{
            if(count == 1){
                console.log("quit where");
                checks.split("WHERE").pop()
                count=count-1;
                console.log(count);
                console.log(checks);
            }else{
                // checks.split("OR").pop()
                checks = checks.replace(" OR playlists = '14'", "")
                count=count-1;
                console.log(count);
                console.log(checks);
            }
        }
        send(checks);
    });
    $('#check4').click(function () {
        if ($('#check4').is(":checked")){
            if(count == 0){
                checks = "WHERE genre LIKE '%Rock%'";
                count=count+1;
                console.log(count);
                console.log(checks);
            }else{
                checks = checks + " OR genre LIKE '%Rock%'";
                count=count+1;
                console.log(count);
                console.log(checks);

            }
        }else{
            if(count == 1){
                console.log("quit where");
                checks.split("WHERE").pop()
                count=count-1;
                console.log(count);
                console.log(checks);
            }else{
                // checks.split("OR").pop()
                checks = checks.replace(" OR genre LIKE '%Rock%'", "")
                count=count-1;
                console.log(count);
                console.log(checks);
            }
        }
        send(checks);
    });
    $('#check5').click(function () {
        if ($('#check5').is(":checked")){
            if(count == 0){
                checks = "WHERE genre LIKE '%Pop%'";
                count=count+1;
                console.log(count);
                console.log(checks);
            }else{
                checks = checks + " OR genre LIKE '%Pop%'";
                count=count+1;
                console.log(count);
                console.log(checks);

            }
        }else{
            if(count == 1){
                console.log("quit where");
                checks.split("WHERE").pop()
                count=count-1;
                console.log(count);
                console.log(checks);
            }else{
                // checks.split("OR").pop()
                checks = checks.replace(" OR genre LIKE '%Pop%'", "")
                count=count-1;
                console.log(count);
                console.log(checks);
            }
        }
        send(checks);
    });
    $('#check6').click(function () {
        if ($('#check6').is(":checked")){
            if(count == 0){
                checks = "WHERE genre LIKE '%Blues%'";
                count=count+1;
                console.log(count);
                console.log(checks);
            }else{
                checks = checks + " OR genre LIKE '%Blues%'";
                count=count+1;
                console.log(count);
                console.log(checks);

            }
        }else{
            if(count == 1){
                console.log("quit where");
                checks.split("WHERE").pop()
                count=count-1;
                console.log(count);
                console.log(checks);
            }else{
                // checks.split("OR").pop()
                checks = checks.replace(" OR genre LIKE '%Blues%'", "")
                console.log(count);
                console.log(checks);
            }
        }
        send(checks);
    });
    $(document).on('click','.song',function () {
        var id = this.getAttribute('id');
        product_read(id);

    });

    $(document).on('click','.map',function () {
        console.log("map");
        var script = document.createElement('script');
        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCPOh55wpPWjSR3OskEOux1PyHgV_LkcpE&callback=initMap";
        script.async;
        script.defer;
        document.getElementsByTagName('script')[0].parentNode.appendChild(script);

    });

})