$(document).ready(function(){
    $("#card1").click(function(event){
        event.preventDefault();
        $("#bj2").hide();
        $("#j2").hide();
        $("#bj3").hide();
        $("#j3").hide();
        $("#bj1").show();
        $("#j1").show();   
    });
    $("#card2").click(function(event){
        event.preventDefault();
        $("#bj1").hide();
        $("#j1").hide(); 
        $("#bj3").hide();
        $("#j3").hide();
        $("#bj2").show();
        $("#j2").show();
    });
    $("#card3").click(function(event){
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
$(document).ready(function () {
    $("#news-t").click(function (event) {
        event.preventDefault();
        $("#jumbs").toggle();
    });
});
$(document).ready(function () {
    $("#news-tc").click(function (event) {
        event.preventDefault();
        $("#jumbs").hide(1000);
    });
});
$(document).ready(function () {
    $("#filters").click(function (event) {
        event.preventDefault();
        var pickSol = $("#servicess option:selected").val();

        switch (pickSol) {
            case "DCS":
                //HIDE MENU
                $("#b-EA").hide();
                $("#b-ES").hide();
                $("#b-OAS").hide();
                $("#b-DCS").show();
                //HIDE PART 2
                $("#ser").hide();
                $("#ser-ES").hide();
                $("#ser-OAS").hide();
                $("#ser-DCS").show();
                //part 3
                $("#t-EA").hide();
                $("#t-ES").hide();
                $("#t-OAS").hide();
                $("#t-DCS").show();
                //part 4
                $("#c-EA").hide();
                $("#c-ES").hide();
                $("#c-OAS").hide();
                $("#c-DCS").show();
                //part 4
                $("#cl-EA").hide();
                $("#cl-ES").hide();
                $("#cl-OAS").hide();
                $("#cl-DCS").show();
                break;
            case "ES":
                //HIDE MENU
                $("#b-EA").hide();
                $("#b-OAS").hide();
                $("#b-DCS").hide();
                $("#b-ES").show();
                //HIDE PART 2
                $("#ser").hide();
                $("#ser-DCS").hide();
                $("#ser-OAS").hide();
                $("#ser-ES").show();
                //part 3
                $("#t-EA").hide();
                $("#t-DCS").hide();
                $("#t-OAS").hide();
                $("#t-ES").show();
                //part 4
                $("#c-EA").hide();
                $("#c-DCS").hide();
                $("#c-OAS").hide();
                $("#c-ES").show();
                //part 4
                $("#cl-EA").hide();
                $("#cl-DCS").hide();
                $("#cl-OAS").hide();
                $("#cl-ES").show();
                break;
            case "OAS":
                $("#b-EA").hide();
                $("#b-ES").hide();
                $("#b-DCS").hide();
                $("#b-OAS").show();
                //HIDE PART 2
                $("#ser").hide();
                $("#ser-DCS").hide();
                $("#ser-ES").hide();
                $("#ser-OAS").show();
                //part 3
                $("#t-EA").hide();
                $("#t-DCS").hide();
                $("#t-ES").hide();
                $("#t-OAS").show();
                //part 4
                $("#c-EA").hide();
                $("#c-DCS").hide();
                $("#c-ES").hide();
                $("#c-OAS").show();
                //part 4
                $("#cl-EA").hide();
                $("#cl-DCS").hide();
                $("#cl-ES").hide();
                $("#cl-OAS").show();
                break;
            case "ERP":
                $("#b-OAS").hide();
                $("#b-ES").hide();
                $("#b-DCS").hide();
                $("#b-EA").show();
                //HIDE PART 2
                $("#ser-OAS").hide();
                $("#ser-DCS").hide();
                $("#ser-ES").hide();
                $("#ser").show();
                //part 3
                $("#t-OAS").hide();
                $("#t-DCS").hide();
                $("#t-ES").hide();
                $("#t-EA").show();
                //part 4
                $("#c-OAS").hide();
                $("#c-DCS").hide();
                $("#c-ES").hide();
                $("#c-EA").show();
                //part 4
                $("#cl-OAS").hide();
                $("#cl-DCS").hide();
                $("#cl-ES").hide();
                $("#cl-EA").show();
                break;
            default:
                break;
        }
    });
});

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
        Background slideshow
    */
    $('.top-content').backstretch("assets/img/backgrounds/4.jpg");
    $('.section-4-container').backstretch("assets/img/backgrounds/2.jpg");
    $('.section-6-container').backstretch("assets/img/backgrounds/1.jpg");

    /*
        Wow
    */
    new WOW().init();

});

$('#recipeCarousel').carousel({
    interval: 10000
})

$('.carousel .carousel-item').each(function () {
    var minPerSlide = 6;
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < minPerSlide; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
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
/*-----EA start---*/
//expert team
 // Load google charts
 google.charts.load('current', {'packages':['corechart']});
 google.charts.setOnLoadCallback(drawChart);
 
 // Draw the chart and set the chart values
 function drawChart() {
   var data = google.visualization.arrayToDataTable([
   ['Microsoft Navision', 'Number of Consultants'],
   ['IoT Experts', 8],
   ['Oracle DBAs', 2],
   ['Hyperion Experts', 4],
   ['Azure Cloud Service', 2],
   ['System Engineers', 8]
 ]);
 
   // Optional; add a title and set the width and height of the chart
   var options = {'title':'Oracle Expertise', 'width':700, 'height':400};
 
   // Display the chart inside the <div> element with id="piechart"
   var chart = new google.visualization.PieChart(document.getElementById('piechart_EA'));
   chart.draw(data, options);
 }
 google.charts.load('current', {'packages':['corechart']});
 google.charts.setOnLoadCallback(drawCharts);
  // Draw the chart and set the chart values
  function drawCharts() {
    var datas = google.visualization.arrayToDataTable([
    ['Microsoft Navision', 'Number of Consultants'],
    ['IoT Experts', 8],
    ['Oracle DBAs', 2],
    ['Hyperion Experts', 4],
    ['Azure Cloud Service', 2],
    ['System Engineers', 8]
  ]);
  
    // Optional; add a title and set the width and height of the chart
    var options = {'title':'Microsft Expertise', 'width':700, 'height':400};
  
    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('piecharts_EA'));
    chart.draw(datas, options);
  }
   /*-----EA end---*/

 /*-----DCS start---*/
 google.charts.load('current', {'packages':['corechart']});
 google.charts.setOnLoadCallback(drawChartD);
 
 // Draw the chart and set the chart values
 function drawChartD() {
   var dataD = google.visualization.arrayToDataTable([
   ['Microsoft Navision', 'Number of Consultants'],
   ['IoT Experts', 8],
   ['Oracle DBAs', 2],
   ['Hyperion Experts', 4],
   ['Azure Cloud Service', 2],
   ['System Engineers', 8]
 ]);
 
   // Optional; add a title and set the width and height of the chart
   var options = {'title':'Oracle Expertise', 'width':700, 'height':400};
 
   // Display the chart inside the <div> element with id="piechart"
   var chart = new google.visualization.PieChart(document.getElementById('piechart_DCS'));
   chart.draw(dataD, options);
 }
 google.charts.load('current', {'packages':['corechart']});
 google.charts.setOnLoadCallback(drawChartsDC);
  // Draw the chart and set the chart values
  function drawChartsDC() {
    var dataDCS = google.visualization.arrayToDataTable([
    ['Microsoft Navision', 'Number of Consultants'],
    ['IoT Experts', 8],
    ['Oracle DBAs', 2],
    ['Hyperion Experts', 4],
    ['Azure Cloud Service', 2],
    ['System Engineers', 8]
  ]);
  
    // Optional; add a title and set the width and height of the chart
    var options = {'title':'Microsft Expertise', 'width':700, 'height':400};
  
    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('piecharts_DCS'));
    chart.draw(dataDCS, options);
  }
  /*-----DCS END---*/
   /*-----ES start---*/
 google.charts.load('current', {'packages':['corechart']});
 google.charts.setOnLoadCallback(drawChartE);
 
 // Draw the chart and set the chart values
 function drawChartE() {
   var data = google.visualization.arrayToDataTable([
   ['Microsoft Navision', 'Number of Consultants'],
   ['IoT Experts', 8],
   ['Oracle DBAs', 2],
   ['Hyperion Experts', 4],
   ['Azure Cloud Service', 2],
   ['System Engineers', 8]
 ]);
 
   // Optional; add a title and set the width and height of the chart
   var options = {'title':'Oracle Expertise', 'width':700, 'height':400};
 
   // Display the chart inside the <div> element with id="piechart"
   var chart = new google.visualization.PieChart(document.getElementById('piechart_ES'));
   chart.draw(data, options);
 }
 google.charts.load('current', {'packages':['corechart']});
 google.charts.setOnLoadCallback(drawChartsES);
  // Draw the chart and set the chart values
  function drawChartsES() {
    var dataDCS = google.visualization.arrayToDataTable([
    ['Microsoft Navision', 'Number of Consultants'],
    ['IoT Experts', 8],
    ['Oracle DBAs', 2],
    ['Hyperion Experts', 4],
    ['Azure Cloud Service', 2],
    ['System Engineers', 8]
  ]);
  
    // Optional; add a title and set the width and height of the chart
    var options = {'title':'Microsft Expertise', 'width':700, 'height':400};
  
    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('piecharts_ES'));
    chart.draw(dataDCS, options);
  }
  /*-----ES END---*/
   /*-----OAS start---*/
 google.charts.load('current', {'packages':['corechart']});
 google.charts.setOnLoadCallback(drawChartO);
 
 // Draw the chart and set the chart values
 function drawChartO() {
   var dataD = google.visualization.arrayToDataTable([
   ['Microsoft Navision', 'Number of Consultants'],
   ['IoT Experts', 8],
   ['Oracle DBAs', 2],
   ['Hyperion Experts', 4],
   ['Azure Cloud Service', 2],
   ['System Engineers', 8]
 ]);
 
   // Optional; add a title and set the width and height of the chart
   var options = {'title':'Oracle Expertise', 'width':700, 'height':400};
 
   // Display the chart inside the <div> element with id="piechart"
   var chart = new google.visualization.PieChart(document.getElementById('piechart_OAS'));
   chart.draw(dataD, options);
 }
 google.charts.load('current', {'packages':['corechart']});
 google.charts.setOnLoadCallback(drawChartsOA);
  // Draw the chart and set the chart values
  function drawChartsOA() {
    var dataDCS = google.visualization.arrayToDataTable([
    ['Microsoft Navision', 'Number of Consultants'],
    ['IoT Experts', 8],
    ['Oracle DBAs', 2],
    ['Hyperion Experts', 4],
    ['Azure Cloud Service', 2],
    ['System Engineers', 8]
  ]);
  
    // Optional; add a title and set the width and height of the chart
    var options = {'title':'Microsft Expertise', 'width':700, 'height':400};
  
    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('piecharts_OAS'));
    chart.draw(dataDCS, options);
  }
  /*-----DCS END---*/