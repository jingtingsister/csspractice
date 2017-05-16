$( document ).ready(function() {
    $("ul li:nth-child(1)").click(function(){
        $("html,body").animate({scrollTop: '0px'}, 800);
    });

    $("ul li:nth-child(2)").click(function(){
        $("html,body").animate({scrollTop:$(".yaPreFace").offset().top}, 800);
    });

    $("ul li:nth-child(3)").click(function(){
        $("html,body").animate({scrollTop:$(".yaFirstMet").offset().top}, 800);
    });

    $("ul li:nth-child(4)").click(function(){
        $("html,body").animate({scrollTop:$(".yaFirstTouch").offset().top}, 800);
    });

    $("ul li:nth-child(5)").click(function(){
        $("html,body").animate({scrollTop:$(".yaChanged").offset().top}, 800);
    });

    $("ul li:nth-child(6)").click(function(){
        $("html,body").animate({scrollTop:$(".yaSad").offset().top}, 800);
    });
    $("ul li:nth-child(7)").click(function(){
        $("html,body").animate({scrollTop:$(".yaHappiness").offset().top}, 800);
    });
    $("ul li:nth-child(8)").click(function(){
        $("html,body").animate({scrollTop:$(".yaMemory").offset().top}, 800);
    });


    /* Check the location of each desired element */
    $(window).on("scroll resize", function(){
        $('.moment').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight()-210;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            // var scrollTopPlus = $(window).scrollTop()+20;
            // console.log('start');
            // console.log(bottom_of_window);
            // console.log(bottom_of_object);
// scrollTopPlus < $(this).offset().top
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},1800);
                console.log('------------------------');
                console.log($(".firstMet").offset().top + $(this).outerHeight()-195);
                console.log(bottom_of_window);
                console.log($(".firstMet").offset().top);
                console.log($(window).scrollTop());

            }

            // if( bottom_of_window > bottom_of_object && bottom_of_window - bottom_of_object > 100 ){
            //         $(this).animate({'opacity':'0'},500);
                // if( $(this).offset().top = Math.max(document.documentElement.scrollTop,document.body.scrollTop) ){
                //     $(this).animate({'opacity':'0'},500);
                // }s
                // if( bottom_of_window - bottom_of_object > 200 ){
                //     $(this).animate({'opacity':'0'},500);
                // }
            //  }


        });
        $( "#main" ).toggleClass( "rock" );

    });

});
