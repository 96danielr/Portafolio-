$(function () {


    let equipo = $('#enlace-Acercademi').offset().top,
        Acercademi = $('#enlace-Experiencia').offset().top,
        trabajo = $('#enlace-Mishabilidades').offset().top,
        contacto = $('#enlace-Contacto').offset().top;
        portafolio = $('#enlace-Miportafolio').offset().top;



    $('#enlace-Home').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });

    $('#enlace-Acercademi').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 500
        }, 550);
    });

    $('#enlace-Experiencia').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 1150
        }, 900);
    });
    $('#enlace-Mishabilidades').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 1700
        }, 900);
    });
    $('#enlace-Miportafolio').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 2300
        }, 900);
    });
    $('#enlace-Contacto').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 2830
        }, 900);
    });


});