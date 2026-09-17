(function ($) {
    "use strict";
    $(window).on('elementor/frontend/init', () => {
        elementorFrontend.hooks.addAction('frontend/element_ready/babe-sort-filter.default', ($scope) => {
            if($scope.hasClass('sort-filter-show-count-yes') && $('.babe_search_results .count-posts').length > 0) {
                $scope.prepend($('.babe_search_results .count-posts'));
                $scope.find('.count-posts').removeClass('d-none');
            }
            /////////search form & widgets /////////
            if ($('form#search_form').length > 0){
                if($('form#search_form input[name="search_results_sort_by"]').length > 0) $('form#search_form input[name="search_results_sort_by"]').remove();
                $('input[name="search_results_sort_by"]').on('change', function(ev){
                    var sort = $('.elementor-widget-babe-sort-filter input:radio[name=search_results_sort_by]:checked').val();

                    if ($('form#search_form input[name="search_results_sort_by"]').length > 0) {
                        $('form#search_form input[name="search_results_sort_by"]').val(sort);
                    } else {
                        $('form#search_form').append('<input type="hidden" name="search_results_sort_by" value="' + sort + '">');
                    }

                    babe_search_form_submit();
                });
            }

        });

    });

    function babe_search_form_submit(){

        $('#babe_search_result_refresh').css('display', 'block');

        var args = $('#search_form').serialize();
        var action = $('#search_form').attr('action');
        var action_args = action.split('?')[1];
        var url;
        if (action_args != undefined){
            url = action + '&' + args;
        } else {
            url = action + '?' + args;
        }

        document.location.href = url;
    }

})(jQuery);
