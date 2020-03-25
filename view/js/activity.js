function g_promise(urlg, datag=undefined){
    return new Promise(function (resolve){
        $.ajax({
            type:'POST',
            dataType: "json",
            url:urlg,
            data:datag,
        })
        .done(function(data){
            resolve(data);
        })
    })
}
function reset_time(){
    $.ajax({
        type:'GET',
        dataType: "json",
        url:'module/login/controller/controller_login.php?op=reset_time'
    })
}
function activity_time(){
    console.log("time reset");
    setInterval(function(){
        console.log("check time");
        $.ajax({
            type:'GET',
            dataType: "json",
            url:'module/login/controller/controller_login.php?op=activity_time'
        })
        .done(function(data){
            console.log(data);
            if (data=="logout"){
                window.location.href = 'index.php?page=controller_login&op=list';
            }
        })
    },1000)
}
// function control_user(){
//     console.log("control_user");
//     g_promise("module/login/controller/controller_login.php?op=control_user")
//     .then(function(data){
//         console.log(data);
//         console.log(window.location.href);
//         var check = window.location.href.includes("controller_song");
//         console.log(check);
//         if(check==true){
//             g_promise("module/login/controller/controller_login.php?op=log_out")
//             .then(function(data){
//                 window.location.href = 'index.php?page=controller_login&op=list';
//             })
//         }
//     })
// }
$(document).ready(function(){
    reset_time();
    activity_time();
});