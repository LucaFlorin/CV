$(document).ready(function(){
    $('.bubble1').click(function(){
        $(this).toggleClass('pop');
        $('.pop_content').delay(1000).fadeIn('slow');
    });

    $('.bubble2').click(function(){
        $(this).toggleClass('pop2');
        $('.pop_content2').delay(1000).fadeIn('slow');
    });



    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        if($(window).scrollTop() > 200) {
            $('.bubble1').addClass('pop');
                $('.pop_content').delay(1000).fadeIn('slow');
            $('.bubble2').addClass('pop2');
                $('.pop_content2').delay(1000).fadeIn('slow');

        }
    });
});