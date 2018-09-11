$(document).ready(function(){
    $('.bubble1').click(function(){
        $(this).addClass('pop');
    });

    $('.bubble2').click(function(){
        $(this).addClass('pop2');
    });



    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();

        if( wScroll == 0 ){
            $('.bubble1').removeClass('pop');
            $('.bubble2').removeClass('pop2');
            $('.pop_content').fadeOut('slow');
            $('.pop_content2').fadeOut('slow');
        }

        if($(window).scrollTop() > 200) {
            $('.bubble1').addClass('pop');
                $('.pop_content').delay(1000).fadeIn('slow');
            $('.bubble2').addClass('pop2');
                $('.pop_content2').delay(1000).fadeIn('slow');

        }


    });
});