$(".verticaltabs_clg").length>0&&$(function(){$(".verticaltabs_clg .tab-links li a").click(function(a){a.preventDefault();var t=$(this);$(".verticaltabs_clg .tab-links a.active, .verticaltabs_clg .verticaltabs__cont.active").removeClass("active"),t.addClass("active"),$(t.attr("href")).addClass("active")})}),$(".verticaltabs_res").length>0&&$(function(){$(".verticaltabs_res .tab-links li a").click(function(a){a.preventDefault();var t=$(this);$(".verticaltabs_res .tab-links a.active, .verticaltabs_res .verticaltabs__cont.active").removeClass("active"),t.addClass("active"),$(t.attr("href")).addClass("active")})}),$(".verticaltabs_cen").length>0&&$(function(){$(".verticaltabs_cen .tab-links li a").click(function(a){a.preventDefault();var t=$(this);$(".verticaltabs_cen .tab-links a.active, .verticaltabs_cen .verticaltabs__cont.active").removeClass("active"),t.addClass("active"),$(t.attr("href")).addClass("active")})});