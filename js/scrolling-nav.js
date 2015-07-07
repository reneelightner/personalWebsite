//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

var theOriginalDevice = getDevice();


function getDevice(){
    var windowWidth = $(window).width();
    if(windowWidth>767){
        return "desktop";
     }else{
        return "mobile";
    }
}

$(window).resize(function(){

    var newDevice = getDevice();

    if(newDevice != theOriginalDevice){
        theOriginalDevice = newDevice;
    }

});

function closeTheNavBarCollapse(){
    if(theOriginalDevice == "mobile"){
        $("button.navbar-toggle").click();
        console.log("clicked");
    }  
}

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo',closeTheNavBarCollapse);
        event.preventDefault();
    });
});
