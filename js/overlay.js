jQuery(document).ready(function($) {
    //overlay bar function
    $('#overLayBar').on("click touchend", function() {
        $('#overLay').toggleClass('slideHelper');
        if($('#overLay').hasClass('slideHelper')){
            $('#overLay').animate({left: '-43px'}, 1500, 'easeOutQuint');
        }
        else {
            $('#overLay').animate({left: '-100%'}, 1500, 'easeOutQuint');
        }
    });

    //navigation display on overlay page

    var linkTitles = $('.reception, .essay, .interview');
    var contentAreas = $('#reception, #essay, #interview');

    linkTitles.on("click touchend", function(){
        var link = $(this).attr('data-title');

        if($(this).hasClass('active')){
            linkTitles.removeClass('active');
            contentAreas.hide();
            $('#show-title').show();
        } else {
            linkTitles.removeClass('active');
            $(this).addClass('active');
            contentAreas.hide();
            $('#' + link).show();
            $('#show-title').hide();
        }

        if($(this).attr('data-bg') == 'black' && $(this).hasClass('active')){
            $('#overLay').removeClass('gradient');
            $('#overLay').removeClass('white');
            $('#overLay').addClass('black');
        }
        else if($(this).attr('data-bg') == 'white' && $(this).hasClass('active')){
            $('#overLay').removeClass('gradient');
            $('#overLay').removeClass('black');
            $('#overLay').addClass('white');
        }
        else {
            $('#overLay').addClass('gradient');
            $('#overLay').removeClass('black');
            $('#overLay').removeClass('white');
        }

    });
});

