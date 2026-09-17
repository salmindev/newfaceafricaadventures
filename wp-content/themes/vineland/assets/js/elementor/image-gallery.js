(function ($) {
    "use strict";
    $(window).on('elementor/frontend/init', () => {
        elementorFrontend.hooks.addAction('frontend/element_ready/vineland-image-gallery.default', ($scope) => {
            let settings = $scope.data('settings');
            let $iso = $scope.find('.isotope-grid');
            // if ($iso) {
            //     let currentIsotope = $iso.isotope({
            //         filter: '*',
            //         masonry: {
            //             columnWidth: '.grid__item',
            //             gutter: settings.column_spacing.size,
            //         }
            //     });
            //     $scope.find('.elementor-galerry__filters li').on('click', function () {
            //         $(this).parents('ul.elementor-galerry__filters').find('li.elementor-galerry__filter').removeClass('elementor-active');
            //         $(this).addClass('elementor-active');
            //         let selector = $(this).attr('data-filter');
            //         currentIsotope.isotope({
            //             filter: selector,
            //             masonry: {
            //                 columnWidth: '.grid__item',
            //                 gutter: settings.column_spacing.size,
            //             }
            //         });
            //     });
            // }
            if ($scope.hasClass('vineland-image-gallery-transform')) {
                var $item = $('.vineland-image-gallery-transform .elementor-flex .grid__item');
                $item.hover(
                    function(){
                        var $curIndex = $(this).index();
                        if($curIndex % 3 == 0) {
                            $item.eq($curIndex + 1).addClass('collapsed');
                            $item.eq($curIndex + 2).addClass('collapsed');
                        }
                        if($curIndex % 3 == 1) {
                            $item.eq($curIndex - 1).addClass('collapsed');
                            $item.eq($curIndex + 1).addClass('collapsed');
                        }
                        if($curIndex % 3 == 2) {
                            $item.eq($curIndex - 1).addClass('collapsed');
                            $item.eq($curIndex - 2).addClass('collapsed');
                        }
                        
                        $(this).addClass('hovered');
                    },
                    function () {
                        $(this).removeClass('hovered');
                        $item.removeClass('collapsed');
                    }
                );
            }
            
        });
    });
})(jQuery);

