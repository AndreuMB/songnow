function account(id){
    localStorage.setItem('account', id);
    window.location.href = 'index.php?page=controller_login&op=list';
}

function print_menu(){
    console.log("print_menu");
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "module/login/controller/controller_login.php?op=menut",
    })
     .done(function(data) {
        console.log("data menu");
        console.log(data)
        var menu_basic= ['<li><a class="menu" id="controller_home" href="index.php?page=controller_home&op=list" data-tr="Home">Home</a></li>',
        '<li><a class="menu" id="controller_songs" href="index.php?page=controller_songs&op=list" data-tr="Songs">Songs</a></li>',
        '<li><a class="menu" id="controller_song_list" href="index.php?page=controller_song_list&op=list" data-tr="Song list">Song list</a></li>',
        '<li><a class="menu" id="controller_shop" href="index.php?page=controller_shop&op=list" data-tr="Shop">Shop</a></li>',
        '<li><a class="menu" id="aboutus" href="index.php?page=aboutus" data-tr="About us">About us</a></li>',
        '<li><a class="menu" id="controller_contact" href="index.php?page=controller_contact" data-tr="Contact us">Contact us</a></li>',
        '<li><a class="menu" id="controller_cart" href="index.php?page=controller_cart&op=list"</a><i class="fas fa-shopping-cart"></i></li>'];

        var menu_client="";
        var menu_admin="";
        var menu_guest="";

        if (data != null){
            if (data.type=="client"){
                menu_basic.push('<li><img src="'+data.avatar+'" alt="avatar" height="42" width="42"><a class="menu" id="user" href="#">'+data.username+'</a></li>',
                '<li><a class="menu" id="controller_login" href="index.php?page=controller_login&op=log_out" data-tr="Log out">Log out</a></li>');
                for (var i=0;i<menu_basic.length;i++){
                    menu_client=menu_client+menu_basic[i];
                }                
                // console.log(menu_client);
                $("#menu").html(
                    '<nav id="nav">'+
                        '<ul>'+
                        menu_client+
                        '</ul>'+
                    '</nav>'
                )
            }else{
                menu_basic.splice(2, 0, '<li><a class="menu" id="controller_song" href="index.php?page=controller_song&op=list" data-tr="Song admin">Song admin</a></li>');
                menu_basic.push('<li><img src="'+data.avatar+'" alt="avatar" height="42" width="42"><a class="menu" id="user" href="#">'+data.username+'</a></li>',
                '<li><a class="menu" id="controller_login" href="index.php?page=controller_login&op=log_out" data-tr="Log out">Log out</a></li>');
                for (var i=0;i<menu_basic.length;i++){
                    menu_admin=menu_admin+menu_basic[i];
                }                
                // console.log(menu_admin);
                $("#menu").html(
                    '<nav id="nav">'+
                        '<ul>'+
                        menu_admin+ 
                        '</ul>'+
                    '</nav>'
                )
            }

        }else{
            menu_basic.push('<li><a class="menu" id="login_button" href="index.php?page=controller_login&op=list" data-tr="Login">Login</a></li>');
            for (var i=0;i<menu_basic.length;i++){
                menu_guest=menu_guest+menu_basic[i];
            }
            // console.log(menu_guest);
            $("#menu").html(
                '<nav id="nav">'+
                    '<ul>'+
                    menu_guest+
                    '</ul>'+
                '</nav>'
            )
        }
        // var img_categ=""
        // // var title_categ = ["POPULAR MUSIC", "POPULAR MUSIC SPAIN", "RECOMMEND FOR YOU"]; 

                         
        // for(var i=0;i<data.length;i++){
        //     img_categ=img_categ+
        // '<div class="col-4 col-12-medium">'+


        //     '<section class="box feature">'+
        //         '<a class="image featured"><img src="' + data[i].rute + '" class="categ_img" id=' + data[i].id + ' alt="" /></a>'+
        //         '<div class="inner">'+
        //             '<header>'+
        //                 '<h2 data-tr="">' + data[i].name + '</h2>'+
        //             '</header>'+
        //         '</div>'+
        //     '</section>'+

        // '</div>'

        // }
        // $("#categories").html(
        //     img_categ
        // )
    })
}

$(document).ready(function() {
    console.log("menmu js");
    print_menu();

    // if()

    $(document).on('click','.menu',function () {
    console.log("come here menu");
    var id = this.getAttribute('id');
    console.log(id);
    // account(id);
    });

});