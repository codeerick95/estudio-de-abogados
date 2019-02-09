$(window).scroll(function (event) {
    var scrollTop = $(window).scrollTop();
    if (scrollTop >= 600) {
        $("#navbar").addClass("fixed-top border-bottom");
        $("#header").removeClass("fixed-top");
    }
    else {
        $("#navbar").removeClass("fixed-top border-bottom");
        $("#header").addClass("fixed-top");
    }
});