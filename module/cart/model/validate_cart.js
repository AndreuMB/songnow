function view(){
    console.log("cart");
    $("#content").html(
    '<article>'+
        '<h2>CART</h2>'+
        '<p>content products</p>'+
        '<h3>More intriguing information</h3>'+
        '<p>extrainfo</p>'+
    '</article>'
    )
}
$(document).ready(function () {
    view();
});