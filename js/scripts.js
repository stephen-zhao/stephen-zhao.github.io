var b_homeNavToggleUp_isShow = false;

var homeNavToggleUp_A_onClick = function(e) {
  e.preventDefault();
  if (b_homeNavToggleUp_isShow) {
    $(".TopNav_Div").slideUp(1000, "easeOutExpo", function() {
      b_homeNavToggleUp_isShow = false;
    });
  }
  else {
    $(".TopNav_Div").slideDown(1000, "easeOutExpo", function() {
      b_homeNavToggleUp_isShow = true;
    }); 
  }
}

var homeNavToggleDown_A_onClick = function(e) {
  e.preventDefault();
  if (b_homeNavToggleUp_isShow) {
    $(".TopNav_Div").slideUp(2000, "easeOutExpo", function() {
      b_homeNavToggleUp_isShow = false;
    });
  }
  $(".Home_DivContainer").animate({position: "relative", marginTop: "-260%"}, 2000, "easeOutExpo", function() {
    // idk yet
  });
}

$(function() {
  $(".Home_DivContainer").children().css("opacity", "0");
  $(".Home_DivContainer").children().animate({opacity: 1}, 2000, function() {
    // idk yet
  });
});