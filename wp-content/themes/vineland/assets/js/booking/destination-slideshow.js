(function ($) {
    "use strict";
    $(window).on('elementor/frontend/init', () => {
        const addHandler = ($element) => {
            elementorFrontend.elementsHandler.addHandler(vinelandSwiperBase, {
                $element,
            });

            // Initializes and opens PhotoSwipe
            if ($element.find('.vineland-swiper').length > 0) {
                
                $element.find('.vineland-swiper').on('swiperInit', function(e, slider) {
                console.log('test');
                    var pswpElement = document.querySelectorAll('.pswp')[0];
                    var items = $element.data('popup-json');
                    $element.find('.elementor-inner-archive-slideshow .gallery-wrap img').on('click', function (event) {
                        event.preventDefault();
                        var currentImage = $(this).data('index');
                        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, {
                            history: false,
                            focus: false,
                            index: currentImage
                        });
                        gallery.init();
                    });
                });    

                // Initializes and opens PhotoSwipe
                var pswpElement = document.querySelectorAll('.pswp')[0];
                var items = $element.data('popup-json');
                $element.find('.js-gallery-popup').on('click', function (event) {
                    event.preventDefault();
                    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, {
                        history: false,
                        focus: false,
                        index: 0
                    });
                    gallery.init();
                });

            }
        };
        elementorFrontend.hooks.addAction('frontend/element_ready/babe-featured-image.default', addHandler);
    });
})(jQuery);
