var b_homeNavToggleUp_isShow = false;
var C_TOPNAV = 1;

var homeNavToggleUp_A_onClick = function(e) {
  e.preventDefault();
  if (b_homeNavToggleUp_isShow) {
    $(".TopNav_Div").slideUp(1000, function() {
      b_homeNavToggleUp_isShow = false;
    });
  }
  else {
    $(".TopNav_Div").slideDown(1000, function() {
      b_homeNavToggleUp_isShow = true;
    }); 
  }
}

var homeNavToggleDown_A_onClick = function(e) {
  e.preventDefault();
}
