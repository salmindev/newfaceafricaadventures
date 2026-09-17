(function ($) {
    "use strict";
    $(window).on('elementor/frontend/init', () => {
        elementorFrontend.hooks.addAction('frontend/element_ready/babe-item-steps.default', ($scope) => {
            var $btnToggle = $('.elementor-heading-item-step .elementor-toggle-step-open');
            $btnToggle.on('click', function(e) {
                e.preventDefault();
                if($(this).hasClass('expanded')) {
                    $('.block_step_title.collapse-title.block_active').trigger('click');
                }
                else {
                    $('.block_step_title.collapse-title:not(.block_active)').trigger('click');
                }
                $(this).toggleClass('expanded');
            })


        });
    });

})(jQuery);

