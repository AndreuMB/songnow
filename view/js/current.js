$(document).ready(function() {
    var path = window.location.search;
    var parts = window.location.search.substr(1).split("?");
    var $_GET = {};
    for (var i = 0; i < parts.length; i++) {
        var temp = parts[i].split("=");//page=...op=
        $_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
    }
    console.log($_GET['page']);

    var temp = $_GET['page'].split("&");//page=...
    var page = temp[0];
   
        var element = document.getElementById(page);
        element.classList.add("active");
//});
});