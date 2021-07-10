$(document).ready(function () {
    $("#card1").click(function (event) {
        event.preventDefault();
        $("#bj2").hide();
        $("#j2").hide();
        $("#bj3").hide();
        $("#j3").hide();
        $("#bj1").show();
        $("#j1").show();
    });
    $("#card2").click(function (event) {
        event.preventDefault();
        $("#bj1").hide();
        $("#j1").hide();
        $("#bj3").hide();
        $("#j3").hide();
        $("#bj2").show();
        $("#j2").show();
    });
    $("#card3").click(function (event) {
        event.preventDefault();
        $("#bj1").hide();
        $("#j1").hide();
        $("#bj2").hide();
        $("#j2").hide();
        $("#bj3").show();
        $("#j3").show();
    });
});

//main
function scroll_to(clicked_link, nav_height) {
    var element_class = clicked_link.attr('href').replace('#', '.');
    var scroll_to = 0;
    if (element_class != '.top-content') {
        element_class += '-container';
        scroll_to = $(element_class).offset().top - nav_height;
    }
    if ($(window).scrollTop() != scroll_to) {
        $('html, body').stop().animate({
            scrollTop: scroll_to
        }, 1000);
    }
}


jQuery(document).ready(function () {

    /*
        Sidebar
    */
    $('.dismiss, .overlay').on('click', function () {
        $('.sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('.open-menu').on('click', function (e) {
        e.preventDefault();
        $('.sidebar').addClass('active');
        $('.overlay').addClass('active');
        // close opened sub-menus
        $('.collapse.show').toggleClass('show');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
    /* change sidebar style */
    $('a.btn-customized-dark').on('click', function (e) {
        e.preventDefault();
        $('.sidebar').removeClass('light');
    });
    $('a.btn-customized-light').on('click', function (e) {
        e.preventDefault();
        $('.sidebar').addClass('light');
    });
    /* replace the default browser scrollbar in the sidebar, in case the sidebar menu has a height that is bigger than the viewport */
    $('.sidebar').mCustomScrollbar({
        theme: "minimal-dark"
    });

    /*
        Navigation
    */
    $('a.scroll-link').on('click', function (e) {
        e.preventDefault();
        scroll_to($(this), 0);
    });

    $('.to-top a').on('click', function (e) {
        e.preventDefault();
        if ($(window).scrollTop() != 0) {
            $('html, body').stop().animate({
                scrollTop: 0
            }, 1000);
        }
    });
    /* make the active menu item change color as the page scrolls up and down */
    /* we add 2 waypoints for each direction "up/down" with different offsets, because the "up" direction doesn't work with only one waypoint */
    $('.section-container').waypoint(function (direction) {
        if (direction === 'down') {
            $('.menu-elements li').removeClass('active');
            $('.menu-elements a[href="#' + this.element.id + '"]').parents('li').addClass('active');
            //console.log(this.element.id + ' hit, direction ' + direction);
        }
    }, {
        offset: '0'
    });
    $('.section-container').waypoint(function (direction) {
        if (direction === 'up') {
            $('.menu-elements li').removeClass('active');
            $('.menu-elements a[href="#' + this.element.id + '"]').parents('li').addClass('active');
            //console.log(this.element.id + ' hit, direction ' + direction);
        }
    }, {
        offset: '-5'
    });

    /*
        Wow
    */
    new WOW().init();

});


//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
$(document).ready(function () {
    $("#callBtn").click(function () {
        alert("Thank you for your interest, we will contact you soon.")
    });
});
$(document).ready(function () {
    $("#tops").click(function () {
        $("form#myValid").toggle(500);
    });
});
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});