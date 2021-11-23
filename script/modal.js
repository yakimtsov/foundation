$('.modal-overlay').on('click', function(e){
    if($(e.target).closest('.modal').length ==0){
    $(this).fadeOut()
    }
})
$('.close').on('click', function(){
    $(this).parents('.modal-overlay').fadeOut()
})
$('#learn').on('click', function(){
    $('.modal-overlay').fadeIn()
})
$('.register-overlay').on('click', function(e){
    if($(e.target).closest('.register').length ==0){
    $(this).fadeOut()
    }
})
$('.close').on('click', function(){
    $(this).parents('.register-overlay').fadeOut()
})
$('.get').on('click', function(){
    $('.register-overlay').fadeIn()
})
$('.slick').slick({
    autoplay: true,
    autoplaySpeed: 6000,
    dots: true,
    adaptiveHeight: true,
})

$(window).scroll(function(){
    if($(this).scrollTop() > 500){
        $('#up').fadeIn();
    }else{
        $('#up').fadeOut();
    }
})
$('#up').on('click', function(){
    $('html, body').animate({scrollTop:0}, 1000)
})