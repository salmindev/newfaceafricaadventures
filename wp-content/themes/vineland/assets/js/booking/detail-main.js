(function ($) {
    "use strict";
    $(window).on('elementor/frontend/init', () => {
        var $share = $('.vineland_ba_share_item');
        $share.on('click', function() {
            $(this).toggleClass('actived').next('.pbr-social-share').toggle();
        })
    });

})(jQuery);