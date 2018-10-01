(function($){
    $(document).ready(function(){
        var one = $(".one");
        var two = $(".two");
        var three = $(".three");
        var bord =$(".blackbord");
        var w = $(window);
        
        w.scroll(function(){
          var h = w.scrollTop();
            if(h < 4000){
            one.css({transform:'rotate(' + (h / 10) + 'deg)'});
            two.css({transform:'rotate(' + (-h / 13) + 'deg)'});
            three.css({transform:'rotate(' + (h / 15) + 'deg)'});
            }else if(h > 4000){
                bord.css("bottom",h / 5 + "px");
            }
        });
    });
})(jQuery);