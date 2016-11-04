/**
 * Created by Lex on 15.07.14.
 */

window.llOptions = {};

$(document).ready(function(){
    $(document).on('click', '.ll-load-more', function(e){
        e.preventDefault();
        var _el = $(this);
        var id = $(this).data('id');
        var options;
        if(options = window.llOptions[id]){

            _el.prev().addClass('active');

            delete_null_properties(window.llOptions[id], true);
            var requestParams = {loader: {currentPage: options.currentPage}};
            if(options.urlData){
                requestParams.data = options.urlData;
            }
            if(options.orderBy){
                requestParams.loader.orderBy = options.orderBy;
            }
            if(options.skip){
                requestParams.loader.skip = options.skip;
            }
            if(options.viewOptions){
                requestParams.viewOptions = options.viewOptions;
            }

            requestParams.page = options.page;

            $.get($(this).attr('href'), requestParams, function(response){

                var $container = $(options.container);

                _el.prev().removeClass('active');

                options.total -= options.perPage;

                _el.data('current-page', ++options.currentPage);
                console.log($container);
                var loader = $('.more_btn');


                $(response).each(function(){
                    if(this.nodeType != 3){
                        var _el = $(this);
                        console.log(this);

                        _el.css({display: "none"});
//                        $container.append(this);
                        _el.fadeIn(200);
                        loader.addClass('active');
                        $container.append(_el).imagesLoaded(function() {
                            if($container.data('masonry')){
                                _el.fadeIn(200);
                                $container.masonry('appended', _el);
                            }
                            setTimeout(function() {
                                loader.removeClass('active');
                                $container.find('.all_width').css({'display' : 'block'});

                                setTimeout(function() {
                                    $container.find('.all_width').css({'opacity' : '1',  'visibility' : 'visible'});
                                }, 100);

                            }, 2000);
                        });
//                        $(this).find('.icon_svg').svgInject();
                    }
                });
                setTimeout(function() {
                    loader.removeClass('active');
                    if(options.total <= 0){
//                        _el.parent().next('hr').remove();
                        _el.hide();
                    }
                }, 1000);


            });
        }
    });
});

function delete_null_properties(obj, recursive) {
    for (var i in obj) {
        if (obj[i] === null) {
            delete obj[i];
        } else if (recursive && typeof obj[i] === 'object') {
            delete_null_properties(obj[i], recursive);
        }
    }
}