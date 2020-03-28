function sum_view(id){
    console.log("sum " + id);
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "module/songs/controller/controller_songs.php?op=sum_view&id=" + id,
    })
     .done(function(data) {
        console.log(data);
        console.log("WORK");
})
}
function product_read(id){
    sum_view(id);
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
        $('#api').empty();
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
            api_details(data.singer);
            localStorage.removeItem('carousel');
            localStorage.removeItem('id');

        })
        

}

function initMap() {
    $("#map").css({
        "color": "black", 
        "height": "700", 
        "width": "auto"
    });
    
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
        pagination();
    }
   
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

    function send(data){
        var sql = "";
        sql=data;
        data2 = data.replace("*", "COUNT(*) tsongs")
        console.log(data);
        console.log(data2);
        $.ajax({
            type: "GET",
            dataType: "json",
            url: "module/songs/controller/controller_songs.php?op=filter&checks=" + data2,
        })
         .done(function(data) {
            console.log("pagination");
            console.log("sql come here= ")
            console.log(sql);
            console.log(data);
            console.log(data[0].tsongs);
            var num_page;
            var show_songs=3;
            var total_pages=data[0].tsongs/show_songs;
            if ((data[0].tsongs%show_songs) !== 0){
                total_pages=total_pages+1;
            }
            pages(1, show_songs, sql);
            $("#pagination").bootpag({
                total: total_pages,
                page: num_page,
                maxVisible: 5,
                next: 'next',
                prev: 'prev'
            }).on("page", function (e, num) {
                console.log(num);
                pages(num, show_songs, sql);
                num_page=num;
            });
        });
    }

function pagination(){
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "module/songs/controller/controller_songs.php?op=pagination",
    })
     .done(function(data) {
        console.log("pagination");
        console.log(data);
        console.log(data[0].tsongs);
        var num_page;
        var show_songs=3;
        var total_pages=data[0].tsongs/show_songs;
        if ((data[0].tsongs%show_songs) !== 0){
            total_pages=total_pages+1;
        }
        var sql = "SELECT * FROM songs";
        pages(1, show_songs, sql);
        $("#pagination").bootpag({
            total: total_pages,
            page: num_page,
            maxVisible: 5,
            next: 'next',
            prev: 'prev'
        }).on("page", function (e, num) {
            console.log(num);
            pages(num, show_songs, sql);
            num_page=num;
        });
    })
}

function pages(page_now, show_songs, sql){
    console.log("page_now= " + page_now);
    console.log("show_songs= " + show_songs);
    console.log("sql= " + sql);

    // $.ajax({
    //     type: "GET",
    //     dataType: "json",
    //     url: "module/songs/controller/controller_songs.php?op=pages&num_page=" + page_now + "&show_songs=" + show_songs + "&sql=" + sql,  
    // })
    //  .done(function(data) {

    g_promise("module/songs/controller/controller_songs.php?op=pages&num_page=" + page_now + "&show_songs=" + show_songs + "&sql=" + sql)
    .then(function(data){
        console.log("songs in this page= ");
        console.log(data);

        $('#songs').empty();
    
        var img_categ="";
        var favorite="";

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
            g_promise("module/login/controller/controller_login.php?&op=info_user")
            .then(function(data_user){
                console.log("data user")
                console.log(data_user);
                console.log("data song id")
                console.log(data);
                var id_like=[];
                for(var i = 0;i<data.length;i++){
                    id_like.push(data[i].id);
                }
                console.log(id_like);
            
 
                g_promise("module/songs/controller/controller_songs.php?op=check_likes&id_like="+ id_like +"&id_user=" + data_user.id)
                .then(function(data2){
                    for(var i=0;i<data2.length;i++){
                        console.log(data2[i]);
                        if (data2[i]=="exist"){
                            console.log("enter in exist");
                            favorite='<td><i id="'+ data[i].id +'" class="far fa-heart favorite like"></i></td>'
                        }else{
                            favorite='<td><i id="'+ data[i].id +'" class="far fa-heart favorite"></i></td>'
                        }
                        $("#"+ data[i].id_song).append(
                            favorite
                        );
                    }
                })
            }).catch(function(){
                console.log("error_catch not loged");
                favorite='<td><i id="'+ data[1].id +'" class="far fa-heart favorite"></i></td>'
                // img_categ=img_categ+
                // '<tr class="song" id=' + data[y].id_song + '>'+
                // '<td>' + data[y].song_name + '</td>'+
                // '<td>' + data[y].singer + '</td>'+
                // '<td>' + data[y].album + '</td>'+
                // '<td>' + data[y].duration + '</td>'+
                //     favorite+
                // '</tr>'
            
                // $("#songs").html(
                //     '<div class="map">'+
                //     '<img src="view/img/map.png" alt="map" id=map_img style="width:100%;">'+
                //     '<div class="centered" data-tr="See map"></div>'+
                //     '</div>'+
                //         '<table>'+
                //         '<tr>'+
                //         '<th>TITLE</th>'+
                //         '<th>ARTIST</th>'+
                //         '<th>ALBUM</th>'+
                //         '<th>DURATION</th>'+
                //         '</tr>'+
                //         img_categ+
                //         '</table>'
                //     )
            })

        localStorage.removeItem('filter');
        localStorage.removeItem('genre');
        localStorage.removeItem('singer');
})

}

//      })
// }

// function favorites(){
//     g_promise("module/login/controller/controller_login.php?&op=info_user")
//     .then(function(data_user){
//         console.log("data_user")
//         console.log(data_user);
//         var array=["113", "112", "127"];
//             g_promise("module/songs/controller/controller_songs.php?op=check_likes&id_like=113&id_user=20")
//             .then(function(data){
//                 console.log("enter here");
//                 console.log(data);
//             });
//     }).catch(function(){
//         console.log("error_catch not loged");
//     })
// }

function api_details(data){
    console.log("api");
    $.getJSON("https://www.googleapis.com/books/v1/volumes?q=" + data,
    function(data){
        $("#images").empty();
        console.log("api_enter");
        console.log(data)
        var img_categ=""                         
        for(var i=0;i<3;i++){
            img_categ=img_categ+
        '<div class="col-4 col-12-medium">'+
            '<section class="box feature">'+
                '<a class="image featured"><img src="' + data.items[i].volumeInfo.imageLinks.thumbnail + '" class="related" id=' + data.items[i].volumeInfo.previewLink + ' alt="" /></a>'+
                '<div class="inner">'+
                    '<header>'+
                        '<h2 data-tr="">' + data.items[i].volumeInfo.title + '</h2>'+
                    '</header>'+
                '</div>'+
            '</section>'+

        '</div>'

        }
        $("#api").html(
            img_categ
        )
    });
}

function api(){
    console.log("api");
    $.getJSON("https://www.googleapis.com/books/v1/volumes?q=Lady Gaga",
    function(data){
        $("#images").empty();
        console.log("api_enter");
        console.log(data)
        var img_categ=""                         
        for(var i=0;i<3;i++){
            img_categ=img_categ+
        '<div class="col-4 col-12-medium">'+
            '<section class="box feature">'+
                '<a class="image featured"><img src="' + data.items[i].volumeInfo.imageLinks.thumbnail + '" class="related" id=' + data.items[i].volumeInfo.previewLink + ' alt="" /></a>'+
                '<div class="inner">'+
                    '<header>'+
                        '<h2 data-tr="">' + data.items[i].volumeInfo.title + '</h2>'+
                    '</header>'+
                '</div>'+
            '</section>'+

        '</div>'
        }
        $("#api").html(
            img_categ
        )
    });
}
function likes(id){
    g_promise("module/login/controller/controller_login.php?&op=info_user")
    .then(function(data){
        console.log(data);
        g_promise("module/songs/controller/controller_songs.php?op=check_like&id_like="+ id +"&id_user=" + data.id)
        .then(function(data2){
            console.log(data2);
            if (data2=="exist"){
                console.log("enter in exist");
                g_promise("module/songs/controller/controller_songs.php?op=delete_like&id_like="+ id +"&id_user=" + data.id)
                $('#'+id).removeClass('like');
            }else{
                g_promise("module/songs/controller/controller_songs.php?op=add_like&id_like="+ id +"&id_user=" + data.id)
                $('#'+id).addClass('like');
            }
        })
    }).catch(function(){
        console.log("error_catch");
        window.alert("First log in");
        window.location.href = 'index.php?page=controller_login&op=list';
    })
    }

$(document).ready(function () {
    load();
    filters();
    api();
    // favorites();

    $('.songs_page').on('click','.song',function (e) {
        console.log(e.target);
        if (!$(e.target).is('.favorite')){
            var id = this.getAttribute('id');
            product_read(id);
        }
    });
    $(document).on('click','.related',function () {
        var id = this.getAttribute('id');
        console.log(id);
        window.location.href = id;
    });

    $(document).on('click','.map',function () {
        console.log("map");
        var script = document.createElement('script');
        script.src = "https://maps.googleapis.com/maps/api/js?key=" + apikeygmaps + "&callback=initMap";
        script.async;
        script.defer;
        document.getElementsByTagName('script')[0].parentNode.appendChild(script);
    });
    $('.songs_page').on('click','.favorite',function () {
        var id = this.getAttribute('id');
        console.log(id);
        likes(id);
    });

})