var b_homeNavToggleUp_isShow = false;
var b_mythingsNavToggle_isShow = false;

var homeNavToggleUp_A_onClick = function(e) {
  e.preventDefault();
  if (b_homeNavToggleUp_isShow) {
    $(".TopNav_Div_Home").stop(true, true).slideUp(1000, "easeOutExpo", function() {
      b_homeNavToggleUp_isShow = false;
    });
    // $(".Page_DivBackground").css({filter: "none", "-webkit-filter": "none"}, 1000, function() {
    // });
  }
  else {
    $(".TopNav_Div_Home").stop(true, true).slideDown(1000, "easeOutExpo", function() {
      b_homeNavToggleUp_isShow = true;
    });
    // $(".Page_DivBackground").css({filter: "blur(2px)", "-webkit-filter": "blur(2px)"}, 1000, function() {
    // });
  }
}

var homeNavToggleDown_A_onClick = function(e) {
  e.preventDefault();
  var href = e.currentTarget.href;
  $(".TopNav_Div").stop(true, true);
  if (b_homeNavToggleUp_isShow) {
    $(".TopNav_Div").slideUp(800, "easeOutExpo", function() {
      b_homeNavToggleUp_isShow = false;
    });
  }
  $(".HomeContent").stop(true, true).animate({position: "relative", marginTop: "-260%"}, 600, "easeOutExpo", function() {
    window.location.href = href;
  });
}

var mythingsNavToggle_A_onClick = function(e) {
  e.preventDefault();
  if (b_mythingsNavToggle_isShow) {
    $(".TopNav_Div_MyThings").stop(true, true).slideUp(1000, "easeOutExpo", function() {
      b_mythingsNavToggle_isShow = false;
    });
    $(".MyThingsNavToggle_DivA").html("&or;");
    // $(".Page_DivBackground").css({filter: "none", "-webkit-filter": "none"}, 1000, function() {
    // });
  }
  else {
    $(".TopNav_Div_MyThings").stop(true, true).slideDown(1000, "easeOutExpo", function() {
      b_mythingsNavToggle_isShow = true;
    });
    $(".MyThingsNavToggle_DivA").html("&and;");
    // $(".Page_DivBackground").css({filter: "blur(2px)", "-webkit-filter": "blur(2px)"}, 1000, function() {
    // });
  }
}

$(function() {
  $(".HomeContent").children().css("opacity", "0");
  $(".HomeContent").children().animate({opacity: 1}, 1500, function() {
    // idk yet
  });
});