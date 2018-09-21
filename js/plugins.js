/*  global , $ ,  , document , window */


 
$(document).ready(function () {
    "use strict";
    $("html").niceScroll();
    
    $('.gear').click(function () {
        $('.color').fadeToggle();
        
    });
    
    $('.color ul li').eq(0).css("backgroundColor", "#E41B17").end();
    $('.color ul li').eq(1).css("backgroundColor",  "#a9259f").end();
    $('.color ul li').eq(2).css("backgroundColor", "#3325a9").end();
    $('.color ul li').eq(3).css("backgroundColor", "#18e0e0");
    
    $(".color ul li").click(function () {
        
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    });
    
    var scroll = $("#scroll");
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 700) {
                 
            scroll.show();
            
        } else {
                
            scroll.hide();
               
        }
        scroll.click(function () {
            $("html,body").animate({scrollTop: 0}, 600);
            
        });
        
    });
    
});


/*$(window).on('load', function () {
    "use strict";
    $(".loading-overlay .spinner ").fadeOut(2000, function () {
        $(this).parent().fadeOut(2000);
        $("body").css("overflow", "auto");
        
    });
    
    
    
});
*/

