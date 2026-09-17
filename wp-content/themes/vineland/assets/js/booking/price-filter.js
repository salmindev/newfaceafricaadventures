(function ($) {
    "use strict";
    $(window).on('elementor/frontend/init', () => {
        elementorFrontend.hooks.addAction('frontend/element_ready/babe-price-filter.default', ($scope) => {
            
            // babe_price_slider is required to continue, ensure the object exists
            if ( typeof babe_price_slider === 'undefined' ) {
                return false;
            }

            $scope.bind( 'babe_price_slider_create babe_price_slider_slide', function( event, min, max ) {
                if ( babe_price_slider.currency_pos === 'left' ) {

                    $( '#babe_range_price' ).val( babe_price_slider.currency_symbol + min + ' - ' + babe_price_slider.currency_symbol + max );

                } else if ( babe_price_slider.currency_pos === 'left_space' ) {

                    $( '#babe_range_price' ).val( babe_price_slider.currency_symbol + ' ' + min + ' - ' + babe_price_slider.currency_symbol + ' ' + max );

                } else if ( babe_price_slider.currency_pos === 'right' ) {

                    $( '#babe_range_price' ).val( min + babe_price_slider.currency_symbol + ' - ' + max + babe_price_slider.currency_symbol );

                } else if ( babe_price_slider.currency_pos === 'right_space' ) {

                    $( '#babe_range_price' ).val( min + ' ' + babe_price_slider.currency_symbol + ' - ' + max + ' ' + babe_price_slider.currency_symbol );

                }

                $scope.trigger( 'babe_price_slider_updated', [ min, max ] );
            });
            

            
            function initPriceSlider(current_min_price, current_max_price) {

                // Price slider uses jquery ui
                var min_price = parseInt($( '#babe_range_price' ).data( 'min' )),
                    max_price = parseInt($( '#babe_range_price' ).data( 'max' ));
                console.log(current_min_price);
                $( '.babe_price_slider' ).slider({
                    range: true,
                    animate: true,
                    min: min_price,
                    max: max_price,
                    values: [ current_min_price, current_max_price ],
                    create: function() {
    
                        $scope.trigger( 'babe_price_slider_create', [ current_min_price, current_max_price ] );
                    },
                    slide: function( event, ui ) {
    
                        $scope.trigger( 'babe_price_slider_slide', [ ui.values[0], ui.values[1] ] );
                    },
                    change: function( event, ui ) {
                        $('#babe_btn_filter_price').attr('data-min', ui.values[0]);
                        $('#babe_btn_filter_price').attr('data-max', ui.values[1]);
                    }
                });
            }

            var current_min_price = babe_price_slider.min_price ? parseInt( babe_price_slider.min_price ) : min_price,
                current_max_price = babe_price_slider.max_price ? parseInt( babe_price_slider.max_price ) : max_price;
            initPriceSlider(current_min_price, current_max_price);
            
            $('#babe_btn_filter_price').on('click', function() {
                $scope.trigger( 'babe_price_slider_change', [ $(this).attr('data-min'), $(this).attr('data-max') ] );
            });

            $('#babe_btn_clear_price').on('click', function() {
                var min_price = parseInt($( '#babe_range_price' ).data( 'min' )),
                    max_price = parseInt($( '#babe_range_price' ).data( 'max' ));
                initPriceSlider(min_price, max_price);
                $scope.trigger( 'babe_price_slider_create', [ min_price, max_price ] );
            });


            // console.log(priceSlider);
        });

    });
})(jQuery);

