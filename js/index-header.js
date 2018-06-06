$(() => {
  $("header").load("./index-header.html", function() {
    $(() => {
      var i = 0;
      $("#search-main").on("focus", function() {
        $(this)
          .animate({ left: "-300px" }, 500)
          .next()
          .animate({ width: "140px", left: "-5px" }, 500)
          .show()
          .next()
          .animate({ width: "140px", left: "140px" }, 500)
          .show();
        i = 1;
      });
      $(window).scroll(function() {
        var scrollTop =
          document.body.scrollTop || document.documentElement.scrollTop;
        var input = $("#search-main");
        if (scrollTop > 1) {
          if (i === 0) {
            return;
          } else {
            input
              .animate({ left: "0px" }, 500)
              .next()
              .animate({ width: "0px", left: "150px" }, 500, function() {
                $(this).hide();
              })
              .next()
              .animate({ width: "0px", left: "150px" }, 500, function() {
                $(this).hide();
              });
            i = 0;
          }
        }
      });
    });

    $(() => {
      function banner() {
        var now = $(".banner>.banner-show");
        if (now.next().length < 1) {
          $(".banner>img:nth-child(1)")
            .addClass("banner-show")
            .siblings()
            .removeClass("banner-show");
        } else
          now
            .next()
            .addClass("banner-show")
            .siblings()
            .removeClass("banner-show");
        $(".banner>img").each((index, el) => {
          var i = index + 1;
          if ($(el).css("z-index") == 10) {
            $(".banner-button>a:nth-child(" + i + ")")
              .addClass("button-selected")
              .siblings()
              .removeClass("button-selected");
          }
        });
      }
      var timer = setInterval(banner, 4000);
      $(".banner").hover(
        function() {
          clearInterval(timer);
          timer = null;
        },
        function() {
          timer = setInterval(banner, 4000);
        }
      );
    });

    $(() => {
      $(".banner-button").on("click", "a:not(.button-selected)", function(e) {
        e.preventDefault();
        var i = $(this).index() + 1;
        $(".banner>img:nth-child(" + i + ")")
          .addClass("banner-show")
          .siblings()
          .removeClass("banner-show");
        $(".banner-button>a:nth-child(" + i + ")")
          .addClass("button-selected")
          .siblings()
          .removeClass("button-selected");
      });
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
