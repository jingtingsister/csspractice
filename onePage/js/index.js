$( document ).ready(function() {

    $( "#main" ).toggleClass( "rock" );

    $("ul li:nth-child(1)").click(function(){
        $("html,body").animate({scrollTop: '0px'}, 800);
    });

    $("ul li:nth-child(2)").click(function(){
        $("html,body").animate({scrollTop:$(".yaPreFace").offset().top+170}, 800);
    });

    $("ul li:nth-child(3)").click(function(){
        $("html,body").animate({scrollTop:$(".yaFirstMet").offset().top+170}, 800);
    });

    $("ul li:nth-child(4)").click(function(){
        $("html,body").animate({scrollTop:$(".yaFirstTouch").offset().top+170}, 800);
    });

    $("ul li:nth-child(5)").click(function(){
        $("html,body").animate({scrollTop:$(".yaChanged").offset().top+170}, 800);
    });

    $("ul li:nth-child(6)").click(function(){
        $("html,body").animate({scrollTop:$(".yaSad").offset().top+170}, 800);
    });
    $("ul li:nth-child(7)").click(function(){
        $("html,body").animate({scrollTop:$(".yaHappiness").offset().top+200}, 800);
    });
    $("ul li:nth-child(8)").click(function(){
        $("html,body").animate({scrollTop:$(".yaMemory").offset().top}, 800);
    });

    var preFace = true;
    var firstMet = true;
    var firstTouch = true;
    var changed = true;
    var sad = true;
    var happiness = true;
    var memory = true;
    var final = true;

    $(window).on("scroll resize", function(){

    // if ($('.preFace').visible() && preFace) {
    //     $('.preFace').animate({'opacity':'1'}, 800);
    //     preFace = false;
    // } else if (!$('.preFace').visible()  && !preFace){
    //     $('.preFace').animate({'opacity':'0'}, 800);
    //     preFace = true;
    // }

        if ($('.firstMet').visible() && firstMet) {
            $('.firstMet').animate({'opacity':'1'}, 800);
            firstMet = false;
        } else if (!$('.firstMet').visible() && !firstMet){
            $('.firstMet').animate({'opacity':'0'}, 800);
            firstMet = true;
        }

        if ($('.firstTouch').visible() && firstTouch) {
            $('.firstTouch').animate({'opacity':'1'}, 800);
            $('.firstTouch').toggleClass("tada");
            firstTouch = false;
        } else if (!$('.firstTouch').visible()  && !firstTouch){
            $('.firstTouch').animate({'opacity':'0'}, 800);
            firstTouch = true;
        }

        if ($('.changed').visible() && changed) {
            $('.changed').animate({'opacity':'1'}, 800);
            changed = false;
        } else if (!$('.changed').visible()  && !changed){
            $('.changed').animate({'opacity':'0'}, 800);
            changed = true;
        }

        if ($('.sad').visible() && sad) {
            $('.sad').animate({'opacity':'1'}, 800);
            sad = false;
        } else if (!$('.sad').visible()  && !sad){
            $('.sad').animate({'opacity':'0'}, 800);
            sad = true;
        }

        if ($('.happiness').visible() && happiness) {
            $('.happiness').animate({'opacity':'1'}, 800);
            $('.happiness').toggleClass("zoomIn");
            happiness = false;
        } else if (!$('.happiness').visible()  && !happiness){
            $('.happiness').animate({'opacity':'0'}, 800);
            happiness = true;
        }

        if ($('.memory').visible() && memory) {
            $('.memory').animate({'opacity':'1'}, 800);
            memory = false;
        } else if (!$('.memory').visible()  && !memory){
            $('.memory').animate({'opacity':'0'}, 800);
            memory = true;
        }

        if ($('.final').visible() && final) {
            $('.final').animate({'opacity':'1'}, 800);
            $('.final').animate({'opacity':'1'}, 800);
            $('.final').toggleClass("slideInDown");
            final = false;
        } else if (!$('.final').visible()  && !final){
            $('.final').animate({'opacity':'0'}, 800);
            final = true;
        }
    });
  });


    /* Check the location of each desired element */
    // $(window).on("scroll resize", function(){
    //     $('.moment').each( function(i){
    //         var bottom_of_object = $(this).offset().top + $(this).outerHeight()-210;
    //         var bottom_of_window = $(window).scrollTop() + $(window).height();
            //$(window).scrollTop()整個body從一開始滾動的距離
            //$(window).height()視窗的高度
            //$(this).offset().top該元素offset中的top值
            //$(this).outerHeight()該元素本身的高度


        //     if( bottom_of_window  > bottom_of_object && i==0 && bottom_of_window - 450 < bottom_of_object){
        //         $(this).animate({'opacity':'1'},1800);
        //     }
        //     if( bottom_of_window  > bottom_of_object && i==0 && bottom_of_window - 450 > bottom_of_object){
        //     }
        //
        //     if( bottom_of_window  > bottom_of_object && i==1){
        //         $(this).animate({'opacity':'1'},1800);
        //         $(this).addClass("tada");
        //     }
        //     if( bottom_of_window  > bottom_of_object && i==2){
        //         $(this).animate({'opacity':'1'},1800);
        //         $(this).addClass("slideInLeft");
        //     }
        //     if( bottom_of_window  > bottom_of_object && i==3){
        //         $(this).animate({'opacity':'1'},1800);
        //         $(this).addClass("slideInRight");
        //     }
        //     if( bottom_of_window  > bottom_of_object && i==4){
        //         $(this).animate({'opacity':'1'},1800);
        //         $(this).addClass("zoomIn");
        //     }
        //     if( bottom_of_window  > bottom_of_object && i==5){
        //         $(this).animate({'opacity':'1'},1800);
        //         $(this).addClass("slideInLeft");
        //     }
        //     if( bottom_of_window  > bottom_of_object && i==6){
        //         $(this).animate({'opacity':'1'},1800);
        //         $(this).addClass("slideInDown");
        //     }
        // });





        // $.fn.isOnScreen = function(){
        //
        //     var win = $(window);
        //     var viewport = {
        //         top : win.scrollTop(),
        //         left : win.scrollLeft()
        //     };
        //     viewport.right = viewport.left + win.width();
        //     viewport.bottom = viewport.top + win.height();
        //
        //     var bounds = this.offset();
        //     bounds.right = bounds.left + this.outerWidth();
        //     bounds.bottom = bounds.top + this.outerHeight();
        //
        //     console.log('---');
        //     console.log(bounds.top+'bounds.top');
        //     console.log(viewport.bottom+'viewport.bottom');
        //     console.log(viewport.top+'viewport.top');
        //     console.log(bounds.bottom+'bounds.bottom');
        //
        //     return (!(viewport.right < bounds.left || viewport.left > bounds.right ||   viewport.bottom < bounds.top || viewport.top > bounds.bottom));
        //
        // };


//     });
