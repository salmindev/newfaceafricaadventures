(function ($) {
    "use strict";
    $(window).on('elementor/frontend/init', () => {
        var $item = $('.filter-style-dropdown .elementor-heading-title');
        $item.on('click', function() {
            $(this).toggleClass('collapsed')
                .next('.filter-body').slideToggle()
                .parents('.filter-style-dropdown')
                .siblings('.filter-style-dropdown')
                .find('.filter_body_absolute').stop().slideUp();
        })
    });

})(jQuery);