// Controla si la barra de navegación debe ser fija
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

// Muestra cada sección al entrar al viewport
ScrollReveal().reveal('.services', { delay: 500 });
ScrollReveal().reveal('.team', { delay: 500 });
ScrollReveal().reveal('.testimonies', { delay: 500 });
ScrollReveal().reveal('.contact', { delay: 500 });
ScrollReveal().reveal('.recent-posts', { delay: 500 });
ScrollReveal().reveal('.footer', { delay: 500 });
ScrollReveal().reveal('.features', { delay: 500 });
ScrollReveal().reveal('.features-description', { delay: 500 });
ScrollReveal().reveal('.internships', { delay: 500 });
ScrollReveal().reveal('.interships-info', { delay: 500 });
ScrollReveal().reveal('.post', { delay: 500 });

