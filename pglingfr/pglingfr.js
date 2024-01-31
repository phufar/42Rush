$(document).ready(function(){
    $('#image').hover(function(){
        $('#image').attr("src","../img/realperson1.jpg");
    })
    $('#image').on('mouseleave',function(){
        $('#image').attr("src","../img/person1.webp");
    })
})