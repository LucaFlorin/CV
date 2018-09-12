$(document).ready(function(){
    $('.bubble1').click(function(){
        $(this).addClass('side_pannel1');
    });

    $('.bubble2').click(function(){
        $(this).addClass('side_pannel2');
    });


    $('.arrow_icon').click(function(){
        $(this).toggleClass('arrow_active');
        $('.left').toggleClass('left_active');
        $('.middle').toggleClass('middle_active');
        $('.right').toggleClass('right_active');
        $('.right2').toggleClass('right_active');
    });




    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();


        if($(window).scrollTop() > 30) {
            $('.bubble1').addClass('pop');
                $('.pop_content').delay(1000).fadeIn('slow');
                  $('.title').hide();
            $('.bubble2').addClass('pop2');
                $('.pop_content2').delay(1000).fadeIn('slow');

        }
    });




});