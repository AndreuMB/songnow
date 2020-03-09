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
    console.log("come ajax");
    console.log(durl);

    $.ajax({
        type: "GET",
        dataType: "json",
        url: durl,  
    })
     .done(function(data) {
        console.log("return ajax");
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
        console.log("enter" + cat);
        ajaxForSearch("module/songs/controller/controller_songs.php?op=data&filter=" + cat + "&filterb=playlists")
    }else if(car){
        product_read(car);
    }else if(id){
        product_read(id);
    }else if(!(singer =="false" || singer == null ) && !id){
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

function filters(){
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "module/home/controller/controller_home.php?op=categories",
    })
     .done(function(data) {
        console.log("filters");
        console.log(data)
        $('#filters').empty();
        var img_categ=""
                         
        for(var i=0;i<data.length;i++){
            img_categ=img_categ+

            '<input type="checkbox" id="check' + [i] + '" value="' + data[i].id + '" class="chk">' + data[i].name + '</br>'

        }
        $("#filters").html(
            '<div class="fff">'+
            '<p>Categories</p>'+
            img_categ+
            '</div>'
        )
    })

    var checks="SELECT * FROM songs WHERE 0";
    var click = 0;
    console.log("checks=");
    $(document).on('click','.chk',function () {
        var id = this.getAttribute('id');
        var value = this.getAttribute('value');
        console.log(id);
        console.log(value);
        if (click==0){
            checks="SELECT * FROM songs WHERE 0"
        }
            if ($('#'+id).is(":checked")){
                console.log("CHECK");
                checks = checks + " OR playlists = '" + value + "'";
                click=click+1;
                console.log(click);
                console.log(checks);
            }else{
                console.log("NOT CHECK");
                checks = checks.replace(" OR playlists = '" + value + "'", "")
                click=click-1;
                console.log(click);
                console.log(checks);
                if (click==0){
                    checks="SELECT * FROM songs ORDER BY id_song ASC";
                }
            }
            send(checks);
    });
}


$(document).ready(function () {
    load();
    filters();

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