function view(){
    console.log("cart");
    var cart = localStorage.getItem('cart');
    var prod = cart.split(",");
    prod.sort();
    var count = 0;
    var item = [];
    // console.log(prod)
    var current = 1;
    var count=0;
    var count2=0;
    console.log(prod);
    for (var i = 0; prod.length >= i; i++){
        // console.log(prod[i]);
        if(prod[i]==current){
            count++;
        }else{
            item[count2]=count;
            count2++;
            count=1;
            current=prod[i];
        }
        // if (cart.includes(prod[i])){
        //     for (var x = 0; prod.length > x; x++){
        //         if (prod[i]==prod[x]){
        //             count++;
        //         }
        //     }
        // }
    }
    console.log(item);

    
    g_promise("module/cart/controller/controller_cart.php?&op=products")
    .then(function(data){
        var print_prod="";
        total=0;
        for(var i = 0;data.length > i; i++){
            console.log(data[i].id + "=" + prod[i])
            if (cart.includes(data[i].id)){
                total=data[i].price*item[i];
                print_prod=print_prod+
                '<tr class="song" id="' + data[i].id + '">'+
                    '<td>' + data[i].name + '</td>'+
                    '<td>' + data[i].price + '</td>'+
                    '<td  class="item_pr"><i class="fas fa-minus operator minus" id="' + data[i].id + '"></i><input type="number" class="input_num" min="1" max="50" value="' + item[i] + '" readonly><i class="fas fa-plus operator plus" id="' + data[i].id + '"></i></td>'+
                    '<td>' + total + '</td>'+
                    '<td class="delete_pr_tb"><i class="fas fa-times delete_pr" id="' + data[i].id + '"></i></td>'+
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
                '<th>TOTAL</th>'+
                '</tr>'+
                print_prod+
                '</table>'+
                '<h3>More intriguing information</h3>'+
                '<p>extrainfo</p>'+
            '</article>'
            )
    })
}

function delete_pr(id){
    var cart = localStorage.getItem('cart');
    var regex = new RegExp(id, "g");
    var cart2 = cart.replace(regex,"");
    localStorage.removeItem(cart);
    localStorage.setItem("cart", cart2);
    view();
}

function plus(id){
    var cart = localStorage.getItem('cart');
    var cart2 = cart + "," + id;
    localStorage.setItem("cart", cart2);
    view();
}
function minus(id){
    var cart = localStorage.getItem('cart');
    var cart2 = cart.replace(id +",","");
    localStorage.removeItem(cart);
    localStorage.setItem("cart", cart2);
    view();
}

$(document).ready(function () {
    view();
    $(document).on('click','.delete_pr',function () {
        var id = this.getAttribute('id');
        console.log(id);
        delete_pr(id);
    });
    $(document).on('click','.plus',function () {
        var id = this.getAttribute('id');
        plus(id);
    });
    $(document).on('click','.minus',function () {
        var id = this.getAttribute('id');
        minus(id);
    });
});