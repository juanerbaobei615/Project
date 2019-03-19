$(document).ready(function($) {	
	$('.ico-menu').click(function(e){            
        $('.m-nav').stop().slideToggle(400);
        e.stopPropagation();
    });
});


$(document).ready(function($) {
    $(".TAB li").click(function(){
      var tab=$(this).parent(".TAB");
      var con=tab.attr("id");
      var on=tab.find("li").index(this);
      $(this).addClass('on').siblings(tab.find("li")).removeClass('on');
      $(con).eq(on).show().siblings(con).hide();
    });
});



