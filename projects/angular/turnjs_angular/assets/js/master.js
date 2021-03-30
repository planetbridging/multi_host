$(window).resize(function () {
  location.reload();
});

function LinkPress(href) {
  console.log(href);

  if (href == "#Aboutme") {
    $("#flipbook").turn("page", 2);
  }
}

$(document).ready(function () {});

function OnLinkClick() {
  document.addEventListener(
    "click",
    function (event) {
      // If the clicked element doesn't have the right selector, bail
      if (!event.target.matches("a")) return;

      // Don't follow the link
      event.preventDefault();

      // Log the clicked element in the console
      var el = event.target || event.srcElement;
      console.log();
      LinkPress(el.getAttribute("href"));
      //LinkPress($(this).attr("href"));
    },
    false
  );
}

var w_10_height = $(document).height() * 0.3;
var w_10_width = $(document).width() * 0.3;

var w_height = $(document).height() - w_10_height;
var w_width = $(document).width() - w_10_width;

var flip = $("#flipbook");
flip.turn({
  width: w_width,
  height: w_height,
  autoCenter: true,

  when: {
    turning: function (event, page, view) {},

    turned: function (event, page, view) {
      //disableControls(page);
      /*$("a").click(function () {
        console.log($(this).attr("href"));
      });*/
      document.addEventListener(
        "click",
        function (event) {
          // If the clicked element doesn't have the right selector, bail
          if (!event.target.matches("a")) return;

          // Don't follow the link
          event.preventDefault();

          // Log the clicked element in the console
          var el = event.target || event.srcElement;
          console.log();
          var href = el.getAttribute("href");
          if (href == "#Aboutme") {
            flip.turn("page", 2);
          }
          //LinkPress($(this).attr("href"));
        },
        false
      );
    },
  },
});
