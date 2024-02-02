$(document).ready(function () {
    $('#image').hover(function () {
        $('#image').attr("src", "../img/realperson2.jpg");
    })
    $('#image').on('mouseleave', function () {
        $('#image').attr("src", "../img/person2.webp");
    })
})

