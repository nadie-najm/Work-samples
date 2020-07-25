$('.bottom_of_menu_bar').click(function () {

    new WOW().init();
    setInterval(function () {

        $('.menu_options').show();

    }, 1000);

    $('#first_text_about_uniti').fadeOut();
    $('.bottom_of_menu_bar').fadeOut(2000);
    $('.bottom_of_close').fadeIn(2000);


});

$('.bottom_of_close').click(function () {


    $('#first_text_about_uniti').fadeIn(2000);
    $('.menu_options').fadeOut();
    $('.bottom_of_close').fadeOut(2000);
    $('.bottom_of_menu_bar').fadeIn(2000);


});