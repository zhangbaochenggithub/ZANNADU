$(() => {
  $("header").load("./header.html", function() {
    $(".nav>.nav-main")
      .on("mouseover", "#rotate1", function() {
        $(".down-menu1").css("height", "530px");
      })
      .on("mouseout", "#rotate1", function() {
        $(".down-menu1").css("height", "0");
      });
    $(".down-menu1")
      .on("mouseover", function() {
        $(this).css("height", "530px");
      })
      .on("mouseout", function() {
        $(this).css("height", "0");
      });
    $(".nav>.nav-main")
      .on("mouseover", "#rotate2", function() {
        $(".down-menu2").css("height", "420px");
      })
      .on("mouseout", "#rotate2", function() {
        $(".down-menu2").css("height", "0");
      });
    $(".down-menu2")
      .on("mouseover", function() {
        $(this).css("height", "420px");
      })
      .on("mouseout", function() {
        $(this).css("height", "0");
      });

    $(() => {
      var $body = $("body");
      if ($body.data("a") !== "index") {
        var $nav = $("nav");
        var $logo = $("#nav-logo");
        var $a = $(".nav-main");
        $(window).scroll(() => {
          var scrollTop =
            document.body.scrollTop || document.documentElement.scrollTop;
          if (scrollTop >= 120) {
            $nav.removeClass("nav").addClass("nav-fixed");
            $logo.css({
              display: "block",
              width: "54px",
              height: "54px"
            });
            $a.children(["a"]).css("lineHeight", "70px");
            $a
              .children()
              .first()
              .css("marginTop", "8px");
          } else {
            $nav.removeClass("nav-fixed").addClass("nav");
            $logo.css("display", "none");
            $a.children(["a"]).css("lineHeight", "54px");
          }
        });
      }
    });

    $(() => {
      $("#rotate1").hover(
        function() {
          this.innerHTML = "目的地";
          $(this).append(
            "<style data-del='true'>#rotate1::after{transform:rotate(135deg)}</style>"
          );
        },
        function() {
          this.innerHTML = "目的地";
          $(this).append(
            "<style data-del='true'>#rotate1::after{transform:rotate(-45deg)}</style>"
          );
        }
      );
      $("#rotate2").hover(
        function() {
          this.innerHTML = "预订行程";
          $(this).append(
            "<style data-del='true'>#rotate2::after{transform:rotate(135deg)}</style>"
          );
        },
        function() {
          this.innerHTML = "预订行程";
          $(this).append(
            "<style data-del='true'>#rotate2::after{transform:rotate(-45deg)}</style>"
          );
        }
      );
    });
  });
});
