$(window).scroll(function() {
    var hT1 = $('#heading1').offset().top,
        hH1 = $('#heading1').outerHeight(),
        hT2 = $('#heading2').offset().top,
        hH2 = $('#heading2').outerHeight(),
        hT3 = $('#heading3').offset().top,
        hH3 = $('#heading3').outerHeight(),
        hT4 = $('#heading4').offset().top,
        hH4 = $('#heading4').outerHeight(),
        hT5 = $('#heading5').offset().top,
        hH5 = $('#heading5').outerHeight(),
        /*hT6 = $('#heading6').offset().top,
        hH6 = $('#heading6').outerHeight(),*/
        wH = $(window).height(),
        wS = $(this).scrollTop();
        nav = $('.nav_content').outerHeight();
        var $nav1 = $("#sidebaritem1");
        $nav1.toggleClass('scrolled', (wS > (hT1+hH1-3*nav))&&(wS < (hT2+hH2-3*nav)));
        var $nav2 = $("#sidebaritem2");
        $nav2.toggleClass('scrolled', (wS > (hT2+hH2-3*nav))&&(wS < (hT3+hH3-3*nav)));
        var $nav3 = $("#sidebaritem3");
        $nav3.toggleClass('scrolled', (wS > (hT3+hH3-3*nav))&&(wS < (hT4+hH4-3*nav)));
        var $nav4 = $("#sidebaritem4");
        $nav4.toggleClass('scrolled', (wS > (hT4+hH4-3*nav))&&(wS < (hT5+hH5-3*nav)));
        var $nav5 = $("#sidebaritem5");
        $nav5.toggleClass('scrolled', (wS > (hT5+hH5-3*nav)));
        /*var $nav6 = $("#sidebaritem6");
        $nav6.toggleClass('scrolled', (wS > (hT6+hH6-3*nav)));*/
    });




var coll = window.getElementsByClassName("toggle-button");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    console.log(this)
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

    