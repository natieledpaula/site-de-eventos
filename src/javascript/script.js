$(document).ready(function () {

    // Parte do botão mobile
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav_item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPossition = $(window).scrollTop() - header.outerHeight();

        if (scrollPossition > 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '0px 0px 10px 2px rgb(0,0,0,0.1)');
        }

        sections.each(function (i) {
            const section = $(this);
            const sectionTop = section.offset().top - header.outerHeight();
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPossition >= sectionTop && scrollPossition <= sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        });

        navItems.removeClass('active');
        navItems.eq(activeSectionIndex).addClass('active');
        });
});