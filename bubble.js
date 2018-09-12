$(document).ready(function(){
    $('.bubble1').click(function(){
        $(this).addClass('side_pannel1');
    });

    $('.bubble2').click(function(){
        $(this).addClass('side_pannel2');
    });



    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();


        if($(window).scrollTop() > 100) {
            $('.bubble1').addClass('pop');
                $('.pop_content').delay(1000).fadeIn('slow');
                    $('.greeting_message').toggleClass('greeting_message_scroll');
            $('.bubble2').addClass('pop2');
                $('.pop_content2').delay(1000).fadeIn('slow');

        }
    });

    if($('.bubble1').hasClass('.side_pannel1') && $('.bubble2').hasClass('.side_pannel2')){
        $('.nav_arrow').toggleClass('animation_arrow');
    }


});