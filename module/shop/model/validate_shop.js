function products(){
    console.log("products");
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "module/shop/controller/controller_shop.php?op=data",
    })
     .done(function(data) {
        console.log("sdfa");
        console.log(data);
        $('#products').empty();

        var img_categ=""
        var title_categ = ["PREMIUM", "FAMILY PREMIUM", "STUDENT PREMIUM"]; 

                         
        for(var i=0;i<data.length;i++){
            img_categ=img_categ+
        '<div class="col-4 col-12-medium">'+
            '<section class="box feature">'+
                '<a href="#" class="image featured prod_img" id="' + data[i].id + '"><img src="' + data[i].rute + '" alt="" /></a>'+
                '<div class="inner prod_title">'+
                    '<header>'+
                        '<h2>' + title_categ[i] + '</h2>'+
                    '</header>'+
                    '<h2 class="buy_b buy" id="' + data[i].id + '">BUY</h2>'+
                '</div>'+
            '</section>'+
        '</div>'

        }
        $("#products").html(
            img_categ

            )                  
        })

}
function product_read(id){
    console.log("products");
    console.log(id);
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "module/shop/controller/controller_shop.php?op=read&modal=" + id,
    })
     .done(function(data) {
        console.log(data);
        $('#products').empty();

        var img_shop=""
        var title_shop = ["POPULAR MUSIC", "POPULAR MUSIC SPAIN", "RECOMMEND FOR YOU"]; 

                         
        // for(var i=0;i<data.length;i++){
            img_shop=
                '<a href="#" class="image featured prod_img" id="prod' + data.id + '"><img src="' + data.rute + '" alt="" /></a>'

        // }
        $("#products").html(
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
                                '<h2>'+ data.name +'</h2>'+
                                '<ul><li>Users:'+ data.users +'</li><li>Price: '+ data.price +'</li></ul>'+
                            '</section>'+
                            '<h2 class="buy_b buy2" id="' + data.id + '">ADD TO CART</h2>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>'

            )                  
        })

}

function add_cart(id){
    var cart = localStorage.getItem('cart');
    if (cart){
            localStorage.setItem('cart', cart + "," + id);
    }else{
        localStorage.setItem('cart', id);
    }
}

$(document).ready(function () {
    products();

    $(document).on('click','.prod_img',function () {
        var id = this.getAttribute('id');
        product_read(id);

    });

    $(document).on('click','.buy_b',function () {
        var id = this.getAttribute('id');
        add_cart(id);

    });
});