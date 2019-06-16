document.addEventListener('DOMContentLoaded', function(){
    
    // click menu_btn
    $('#menu_btn A').click(function(){
        $('NAV UL').slideToggle(500);
        $('#menu_btn').toggleClass("menu_border");
    });
    if($(window).width() <= 644){
        $(document).mouseup(function(e){
            let nav = $("NAV");
            let ul = $("NAV UL");
            if (nav.has(e.target).length === 0){
                ul.hide(500);
                $('#menu_btn').removeClass("menu_border");
            }
        });
    };
}, false);