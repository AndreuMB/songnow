function view(){
    console.log("cart");
    var cart = localStorage.getItem('cart');
    if (!cart){
        cart="";
    }else{
        var prod = cart.split(",");
        prod.sort();
        var count = 0;
        var item = [];
        // console.log(prod)
        var current = prod[0];
        var count=0;
        var count2=0;
        console.log(cart);
        // console.log(prod);
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
        }
        console.log(prod);
        console.log(item);
    }



    g_promise("module/cart/controller/controller_cart.php?&op=products")
    .then(function(data){
        console.log("data=" + data);
        if (!cart){
            $("#content").html(
                '<article>'+
                '<h2>NOTHING IN THE CART</h2>'+
                '<p>Go to the <a href="index.php?page=controller_shop&op=list">store</a> to buy something</p>'+
                '</article>'
                )
        }else{
            var print_prod="";
            var x=0;
            total=0;
            console.log(data);
            console.log(prod);
            for(var i = 0;data.length > i; i++){
                // console.log(data[i].id + "=" + prod[i])
                console.log(cart + "include" + data[i].id);
                if (cart.includes(data[i].id)){
                    console.log("enter" + data[i].id);
                    total=data[i].price*item[x];
                    print_prod=print_prod+
                    '<tr class="song" id="' + data[i].id + '">'+
                        '<td>' + data[i].name + '</td>'+
                        '<td>' + data[i].price + '</td>'+
                        '<td  class="item_pr"><i class="fas fa-minus operator minus" id="' + data[i].id + '"></i><input type="number" class="input_num" min="1" max="50" value="' + item[x] + '" readonly><i class="fas fa-plus operator plus" id="' + data[i].id + '"></i></td>'+
                        '<td>' + total + '</td>'+
                        '<td class="delete_pr_tb"><i class="fas fa-times delete_pr" id="' + data[i].id + '"></i></td>'+
                    '</tr>'
                    x++;
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
                    '<h2 class="buy2" id="buy">BUY</h2>'+
                '</article>'
                )
        }

    })
}

function buy(){
    //logged?
    g_promise("module/login/controller/controller_login.php?&op=info_user")
    .then(function(data_user){
        console.log("cart");
        var cart = localStorage.getItem('cart');
        if (!cart){
            cart="";
        }else{
            var prod = cart.split(",");
            prod.sort();
            var count = 0;
            var item = [];
            // console.log(prod)
            var current = prod[0];
            var count=0;
            var count2=0;
            console.log(cart);
            // console.log(prod);
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
            }
            console.log(prod);
            console.log(item);
        }    
        g_promise("module/cart/controller/controller_cart.php?&op=products")
        .then(function(data){
            console.log("data=" + data);

            var x=0;
            total=0;
            console.log(data);
            console.log(prod);
            var shopping = [];
            for(var i = 0;data.length > i; i++){
                console.log(cart + "include" + data[i].id);
                if (cart.includes(data[i].id)){
                    console.log("id producto " + data[i].id);
                    console.log("quantity producto " + item[x]);
                    console.log("id user " + data_user.id);
                    shopping[i]=[data[i].id, item[x], data_user.id]
                    x++;
                }
            }
            console.log(shopping); 

            g_promise("module/cart/controller/controller_cart.php?&op=shopping", shopping)
            .then(function(data){
                console.log(data);
                alert("Your purchase has been successfully completed");
                localStorage.removeItem('cart');
                window.location.href = 'index.php?page=controller_shop&op=list';
            })
        })
    }).catch(function(){
        console.log("ENTER_CATCH NEED LOGIN");
        localStorage.setItem('buy','buy');
        window.location.href = 'index.php?page=controller_login&op=list';
    })
}

function delete_pr(id){
    var cart = localStorage.getItem('cart');
    var regex = new RegExp(id + ",", "g");
    var regex2 = new RegExp(id, "g");
    var cart2 = cart.replace(regex,"");
    var cart3 = cart2.replace(regex2,"");
    console.log("last character" + cart3.substring(cart3.length - 1));
    if (cart3.substring(cart3.length - 1)==","){
        console.log("delete ,")
        var cart4 = cart3.substring(0, cart3.length - 1);
        // localStorage.removeItem(cart);
        localStorage.setItem("cart", cart4);
    }else{
        // localStorage.removeItem(cart);
        localStorage.setItem("cart", cart3);
    }
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
    $(document).on('click','#buy',function () {
        buy();
    });
});