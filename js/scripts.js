var b_homeNavToggleUp_isShow = false;

var homeNavToggleUp_A_onClick = function(e) {
  e.preventDefault();
  if (b_homeNavToggleUp_isShow) {
    $(".TopNav_Div").slideUp(1000, "easeOutExpo", function() {
      b_homeNavToggleUp_isShow = false;
    });
    // $(".Page_DivBackground").css({filter: "none", "-webkit-filter": "none"}, 1000, function() {
    // });
  }
  else {
    $(".TopNav_Div").slideDown(1000, "easeOutExpo", function() {
      b_homeNavToggleUp_isShow = true;
    });
    // $(".Page_DivBackground").css({filter: "blur(2px)", "-webkit-filter": "blur(2px)"}, 1000, function() {
    // });
  }
}

var homeNavToggleDown_A_onClick = function(e) {
  e.preventDefault();
  var href = e.currentTarget.href;
  if (b_homeNavToggleUp_isShow) {
    $(".TopNav_Div").slideUp(1000, "easeOutExpo", function() {
      b_homeNavToggleUp_isShow = false;
    });
  }
  $(".Home_DivContainer").animate({position: "relative", marginTop: "-260%"}, 1000, "easeOutExpo", function() {
    window.location.href = href;
  });
}

$(function() {
  $(".Page_TRContent").children().css("opacity", "0");
  $(".Page_TRContent").children().animate({opacity: 1}, 1500, function() {
    // idk yet
  });
});