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
    $(".TopNav_Div").slideUp(1000, "easeOutExpo", function() {
      b_homeNavToggleUp_isShow = false;
    });
  }
  $(".Home_DivContainer").animate({position: "relative", marginTop: "-240%"}, 1000, "easeOutExpo", function() {
    // idk yet
  });
}
