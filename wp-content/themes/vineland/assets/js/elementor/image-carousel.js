(function ($) {
    "use strict";
    $(window).on('elementor/frontend/init', () => {
        const addHandler = ($element) => {
            if(!$element.hasClass('smoot-carousel-yes')) {
                elementorFrontend.elementsHandler.addHandler(vinelandSwiperBase, {
                    $element,
                })
            }
            else {
                var par = $('.elementor-widget-vineland-image-carousel.smoot-carousel-yes .vineland-con .vineland-con-inner'),
                    wrapper = $('.elementor-image-carousel-item-wrapper.vineland-wrapper');
                wrapper.css('--e-global-wrapper-width', wrapper.width()+'px');
                par.children('.elementor-item-image-carousel').clone().appendTo(par);
            }
        }

        elementorFrontend.hooks.addAction('frontend/element_ready/vineland-image-carousel.default', addHandler);
    })
})(jQuery);
