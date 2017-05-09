$( document ).ready(function() {
    wdth=$(window).width();
    if( wdth <= 767 ) {
        $(".footerList").find("ul").slideUp(0);
    }

    $(window).resize(function() {
        wdth=$(window).width();
        if( wdth <= 767 ) {
            $(".footerList").find("ul").slideUp(0);
            console.log("i am 767");
        } else {
            $(".footerList").find("ul").slideDown(0);
        }

    });

    $('.footerTitle').on('click', function() {
        // wdth=$(window).width();
        if( wdth <= 767 ) {
            $(this).parent().children("ul").slideToggle(500);
        }

    });
});
