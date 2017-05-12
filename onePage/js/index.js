$( document ).ready(function() {

    $("ul li:nth-child(2)").click(function(){
        $("html,body").animate({scrollTop:$(".learning").offset().top}, 800);
    });
});
