function isOverflowingY(el) {
  return el.offsetHeight < el.scrollHeight
}

function isScrollPositionNearTop(el) {
  return $(el).scrollTop() < 30;
}

function isScrollPositionNearBottom(el) {
  var $el = $(el);
  return $el.scrollTop() + $el.height() + 30 >= $el.find(".zone__content").height();
}

function updateZoneScrollIndicationStyle(zone__contentWindows) {
  zone__contentWindows.each(function() {
    if (isOverflowingY(this)) {
      var $scrollIndicationTop = $(this).parent().find(".zone__scroll-indication.--top");
      var $scrollIndicationBottom = $(this).parent().find(".zone__scroll-indication.--bottom");
      if (isScrollPositionNearTop(this)) {
        if ($scrollIndicationTop.css("display") !== "none") {
          $scrollIndicationTop.fadeOut(300);
        }
        if ($scrollIndicationBottom.css("display") === "none") {
          $scrollIndicationBottom.fadeIn(300);
        }
      }
      else if (isScrollPositionNearBottom(this)) {
        if ($scrollIndicationTop.css("display") === "none") {
          $scrollIndicationTop.fadeIn(300);
        }
        if ($scrollIndicationBottom.css("display") !== "none") {
          $scrollIndicationBottom.fadeOut(300);
        }
      }
      else {
        if ($scrollIndicationTop.css("display") === "none") {
          $scrollIndicationTop.fadeIn(300);
        }
        if ($scrollIndicationBottom.css("display") === "none") {
          $scrollIndicationBottom.fadeIn(300);
        }
      }
    }
  });
}

function setupInitialZoneScrollIndicationStyle() {
  updateZoneScrollIndicationStyle($(".zone__content-window"));
}

function useZoneScrollIndicationStyleHandler() {
  return function(e) {
    updateZoneScrollIndicationStyle($(e.target));
  }
}

$(function() {
  // ====== ATTACH HANDLERS ======
  $(".zone__content-window").on("scroll", useZoneScrollIndicationStyleHandler());

  // ====== SETUP INITIAL STATE ======
  setupInitialZoneScrollIndicationStyle()
});