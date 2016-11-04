
$(document).ready(function() {



});

$(document).ready(function() {

    var widthBl= $('.all_width.no_image').width();
    $('.all_width.no_image').find('.text').css({
        'height' : widthBl
    });

    $( window ).resize(function() {
        var widthBl= $('.all_width.no_image').width();
        $('.all_width.no_image').find('.text').css({
            'height' : widthBl
        });
    })


});


$(document).ready(function() {


    $('.menu_btn').on('click', function(e) {
        e.preventDefault();
        $(this).parents('.nav_menu').find('ul').toggleClass('open');
        $(this).toggleClass('close_btn');
    });

    $('.social_btn .search').on('click', function(e) {
        // $('.search_big_line').find('input[type="text"]').focus();
        $('body').toggleClass('search_open');
        e.preventDefault();
        $(this).toggleClass('search_open');
        $('header').find('.search_big_line').toggleClass('show');
    });

});





$(document).ready(function() {
    $('.fotorama').fotorama({
        width: '100%',
        nav: 'thumbs',
        arrows: true
    });
    $('.content_social_btn a').on('click', function(e){
        e.preventDefault();
    });


    $('#to-thanks').on('click', function(e) {
        e.preventDefault();
        var data = {data: {
            name: $('#contact_name').val(),
            email: $('#contact_email').val(),
            city: $('#contact_city').val(),
            question: $('#contact_question').val(),
            page_url: current_url
        }

        };
        console.log($('#answer').val());
        if($('#answer').val() != undefined) {
            data.data.answer = $('#answer').val();
        }
        if($('#section').val() != undefined) {
            data.data.section = $('#section').val();
        }
        if($('#page').val() != undefined) {
            data.data.page = $('#page').val();
        }
          console.log(data);
        $.ajax({
           method: 'POST',
           url: contact_ajax_url,
           data: data
        }).success(function(response) {

            if(response.length > 0) {
                var decoded = $.parseJSON(response);
                console.log(decoded);
                $.each(decoded, function(key, val){

                   $('#contact_'+key+'_container').addClass('error');
                });


            } else {
                $('#thanks_form').toggleClass('open');
            }
        });

        return false
    });

    $('#back_to_form').on('click', function(e) {
        e.preventDefault();
        $('#contact_name').val('');
        $('#contact_email').val('');
        $('#contact_city').val('');
        $('#contact_question').val('');
        $('.open').removeClass('open');
        return false
    });




});


//Share = {
//    vkontakte: function(purl, ptitle, pimg, text) {
//        url  = 'http://vkontakte.ru/share.php?';
//        url += 'url='          + encodeURIComponent(purl);
//        url += '&title='       + encodeURIComponent(ptitle);
//        url += '&description=' + encodeURIComponent(text);
//        url += '&image='       + encodeURIComponent(pimg);
//        url += '&noparse=true';
//        Share.popup(url);
//    },
//    facebook: function(purl, ptitle, pimg, text) {
//        url  = 'http://www.facebook.com/sharer.php?s=100';
//        url += '&p[title]='     + encodeURIComponent(ptitle);
//        url += '&p[summary]='   + encodeURIComponent(text);
//        url += '&p[url]='       + encodeURIComponent(purl);
//        url += '&p[images][0]=' + encodeURIComponent(pimg);
//        Share.popup(url);
//    },
//    twitter: function(purl, ptitle) {
//        url  = 'http://twitter.com/share?';
//        url += 'text='      + encodeURIComponent(ptitle);
//        url += '&url='      + encodeURIComponent(purl);
//        url += '&counturl=' + encodeURIComponent(purl);
//        Share.popup(url);
//    },
//
//    popup: function(url) {
//        window.open(url,'','toolbar=0,status=0,width=626,height=436');
//    }
//};



$(document).ready(function() {


    $('.yes_btn').on('click', function(e){
        e.preventDefault();
        $('.modal').modal();
        $('#answer').val(1);
        var modalOpen = $('body').hasClass('.modal-open');
        var data = {data:{option: $('#answer').val()}};
        if($('#section').val() != undefined) {
            data.data.section = $('#section').val();
        }
        if($('#page').val() != undefined) {
            data.data.page = $('#page').val();
        }

        $.ajax({
            url: '/engage/log',
            data: data,
            method: "POST"
        });
        if(modalOpen){
            $('html').css({
                'overflow': 'hidden'
            })
        }
    });


    $('.no_btn').on('click', function(e){
        e.preventDefault();
        $('.modal').modal();
        $('#answer').val(0);
        var modalOpen = $('body').hasClass('.modal-open');
        var data = {data:{option: $('#answer').val()}};
        if($('#section').val() != undefined) {
            data.data.section = $('#section').val();
        }
        if($('#page').val() != undefined) {
            data.data.page = $('#page').val();
        }

        $.ajax({
            url: '/engage/log',
            data: data,
            method: "POST"
        });
        if(modalOpen){
            $('html').css({
                'overflow': 'hidden'
            })
        }
    });

});


$(document).ready(function() {

    $(".thing-with-videos").fitVids();
    $('.video_btn').on('click', 'a', function(e){
        e.preventDefault();
        var video_btn = $(this);
        video_btn.parents('.text_video').toggleClass('video_play');
        setTimeout(function() {
            $('.thing-with-videos iframe').toggleClass('video_play_iframe');
        }, 200);



        var srcVideo = $('.thing-with-videos iframe').attr('src');
        var vv = $('.thing-with-videos iframe').attr({
            src: srcVideo + '&autoplay=1'
        });





        // console.log(srcVideo)
    });





});





//
//$('.more_btn').on( 'click', 'a', function() {
//    var $gridContainer = $('.squares .container');
//    var $items = '';
//    var loader = $('.more_btn');
//
//    $.each(testJSON, function(key, value) {
//        var tmpl = '';
//
//        tmpl += testJSON[key]['block'];
//        $items = $items + tmpl;
//        loader.addClass('active');
//
//    });
//
//    $items = $( $items );
//
//    $items.css({'opacity' : '0', 'visibility' : 'hidden',  'display' : 'none'});
//
//    $gridContainer.append( $items ).imagesLoaded(function() {
//
//        setTimeout(function() {
////
//            loader.removeClass('active');
//            $gridContainer.find('.all_width').css({'display' : 'block'});
//
//            setTimeout(function() {
//                $gridContainer.find('.all_width').css({'opacity' : '1',  'visibility' : 'visible'});
//            }, 100);
////
////            // $gridContainer.find('.all_width').css({'opacity' : '1', 'visibility' : 'visible'});
////            // $gridContainer.masonry( 'appended', $items );
////
//        }, 2000);
//
//    });
//
//    return false;
//
//} );

// $('.load_more_btn').on( 'click', function() {

//   return false;
// });
//var testJSON = [
//    {
//        "block": "<div class=' col-xs-12 col-md-6 all_width  right_ps video_icon orng'><div class='col-xs-6 img_title'><img src='images/3.jpg' alt=''></div><div class='col-xs-6 text_title'><a href='#'><span class='view_bl'><span class='view_share'><span class='share_icon'>48</span><span class='view_icon'>24</span></span></span><span class='text'><span class='text_fix_bl'><span class='heading'><span>Статья</span></span><span class='text_descr'>Почему вероятна генеративная поэтика?</span></span></span></a></div></div>"
//    },
//    {
//        "block": "<div class=' col-xs-12 col-md-6 all_width  right_ps video_icon green'><div class='col-xs-6 img_title'><img src='images/2.jpg' alt=''></div><div class='col-xs-6 text_title'><a href='#'><span class='view_bl'><span class='view_share'><span class='share_icon'>48</span><span class='view_icon'>24</span></span></span><span class='text'><span class='text_fix_bl'><span class='heading'><span>Статья</span></span><span class='text_descr'>Почему вероятна генеративная поэтика?</span></span></span></a></div></div>"
//    },
//    {
//        "block": "<div class=' col-xs-12 col-md-6 all_width  left_ps video_icon blue'><div class='col-xs-6 img_title'><img src='images/1.jpg' alt=''></div><div class='col-xs-6 text_title'><a href='#'><span class='view_bl'><span class='view_share'><span class='share_icon'>48</span><span class='view_icon'>24</span></span></span><span class='text'><span class='text_fix_bl'><span class='heading'><span>Статья</span></span><span class='text_descr'>Почему вероятна генеративная поэтика?</span></span></span></a></div></div>"
//    },
//    {
//        "block": "<div class=' col-xs-12 col-md-6 all_width  left_ps video_icon purple'><div class='col-xs-6 img_title'><img src='images/4.jpg' alt=''></div><div class='col-xs-6 text_title'><a href='#'><span class='view_bl'><span class='view_share'><span class='share_icon'>48</span><span class='view_icon'>24</span></span></span><span class='text'><span class='text_fix_bl'><span class='heading'><span>Статья</span></span><span class='text_descr'>Почему вероятна генеративная поэтика?</span></span></span></a></div></div>"
//    }
//];

$(document).ready(function() {

// $('.search_result').jscroll();

    $('.infinite-container').waypoint('infinite', {
        items: '.infinite-item',
        more: '.infinite-more-link',
        onBeforePageLoad: function(items){
            console.log(items)
            setTimeout(function() {
                $('.more_btn_search').css({'visibility' : 'visible'});

            }, 100);
        },
        onAfterPageLoad: function(items){
            console.log(items)
            setTimeout(function() {
                $('.more_btn_search').css({'visibility' : 'hidden'});
            }, 100);
        }
    });


});


Share = {
    vkontakte: function() {
        var url  = 'http://vkontakte.ru/share.php?';
        url += 'url='          + encodeURIComponent(window.location.href);
        window.open(url,'','toolbar=0,status=0,width=626,height=436');
        updateShareCount('.vk_btn  span');
    },
    facebook: function() {
        FB.ui({
            method: 'feed',
            link: window.location.href
        }, function(post){
            if(post){
                updateShareCount('.fb_btn  span');
            }
        });
    }
};

function updateShareCount(selector){
    console.log($(selector));
    $.ajax({
        type: "POST",
        url: Share.moduleUrl + 'share/',
        data: {id: Share.id},
        success: function(){
            $(selector).each(function(key, val) {
                console.log(val);
                var share_val = parseInt($(val).text());
                $(val).text(share_val + 1)
                return share_val + 1;

            });
        }
    });
}
// testJSON2, function(key, value) { 
// 	var tmpl = '';
// 	tmpl += testJSON2[key]['block']  