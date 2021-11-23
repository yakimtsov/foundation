$('.about').on('click', function(){
    $(this).children('.about-icon').toggleClass('active');
    $(this).parent('.about-items').toggleClass('toggleBG');
    $(this).children('.about-vac').toggleClass('togglecolor');
    $(this).children('.about-loc').toggleClass('togglecolor');
    $(this).children('.about-icon').toggleClass('togglecolor');
    $(this).next('p').slideToggle(500)
})
$('.find-icon').on('click', function(){
    $(this).next('p').slideToggle(300);
    $(this).children('.find-text').toggleClass('togglecolor1');
})
$('#home').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('.section6').offset().top}, 1000)
    $('body input:checkbox').prop('checked', false);
})
$('#stories').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('.carusel-section').offset().top}, 1000);
    $('body input:checkbox').prop('checked', false);
})

$('#form-button').on('click', function(e){
    e.preventDefault();

    let name = $('#name').val().trim();
    let email = $('#email').val().trim();

    if(name == ""){
        $('#error-name').text('Enter your name');
        return false
    }else if(email == ""){
        $('#error-email').text('Enter your email');
        return false

    }
    $.ajax({
        url: '../ajax/telegram.php',
        type: 'POST',
        cache: false,
        data: {'email': email, 'name': name},
        dataType: 'html',
        beforeSend: function(){
            $('#form-button').prop('disabled', true)
        },
        success: function(){
            $('.register-overlay').fadeOut();
            $('#name').val('');
            $('#email').val('');
            $('#error-email').text('');
            $('#error-name').text('');
            $('#form-button').prop('disabled', false)
        }
    })
})