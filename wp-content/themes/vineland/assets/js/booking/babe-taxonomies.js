(function ($) {
    "use strict";
    $(window).on('elementor/frontend/init', () => {

        const addHandler = ($element) => {
            elementorFrontend.elementsHandler.addHandler(vinelandSwiperBase, {
                $element,
            });

            $element.find('.vineland-swiper').on('swiperInit', function(e, slider) {
                var slideSize = slider.slides[0].swiperSlideSize;

                $(this).css('--slider-item-width', slideSize+'px');

                $(slider.el).find('.swiper-slide-active .item-inner').addClass('actived');
                
                $(slider.el).find('.item-inner').on('mouseenter', function() {
                    $(slider.el).find('.item-inner').removeClass('actived')
                    $(this).addClass('actived');
                });
            });

        };
        elementorFrontend.hooks.addAction('frontend/element_ready/babe-taxonomies.default', addHandler);
    });

})(jQuery);

