function view(){
    console.log("cart");
    var cart = localStorage.getItem('cart');
    var prod = cart.split(",");
    var count = 0;
    var item = [];
    // console.log(prod)
    console.log(cart);
    for (var i = 0; prod.length > i; i++){
        var count = 0;
        if (cart.includes(prod[i])){
            for (var x = 0; prod.length > x; x++){
                if (prod[i]==prod[x]){
                    count++;
                }
            }
        }
        item[i]=count;
        console.log(item[i]);
    }

    
    g_promise("module/cart/controller/controller_cart.php?&op=products")
    .then(function(data){
        var print_prod=[];
        for(var i = 0;data.length > i; i++){
            console.log(data[i].id + "=" + prod[i])
            if (cart.includes(data[i].id)){
                print_prod=print_prod+
                '<tr class="song" id=' + data[i].id + '>'+
                    '<td>' + data[i].name + '</td>'+
                    '<td>' + data[i].price + '</td>'+
                    '<td>' + item[i] + '</td>'+
                '</tr>'
            }
        }
        $("#content").html(
            '<article>'+
                '<h2>CART</h2>'+
                '<table>'+
                '<tr>'+
                '<th>NAME</th>'+
                '<th>PRICE</th>'+
                '<th>UNITS</th>'+
                '</tr>'+
                print_prod+
                '</table>'+
                '<h3>More intriguing information</h3>'+
                '<p>extrainfo</p>'+
            '</article>'
            )
    })
}

$(document).ready(function () {
    view();
});