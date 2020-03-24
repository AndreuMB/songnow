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
$(document).ready(function(){
    reset_time();
    activity_time();
});