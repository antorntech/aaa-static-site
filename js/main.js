/*-----------------------------------------------------------------------------------

    Theme Name: AAA Software Company Ltd
    Description: IT Solutions and Services HTML Template
    Author: Website Design Templates
    Version: 2.1
        
    ---------------------------------- */

!(function (s) {
  "use strict";
  var t = s(window);
  function a() {
    var e, a;
    (e = s(".full-screen")),
      (a = t.height()),
      e.css("min-height", a),
      (e = s("header").height()),
      (a = s(".screen-height")),
      (e = t.height() - e),
      a.css("height", e);
  }
  s("#preloader").fadeOut("normall", function () {
    s(this).remove();
  }),
    t.on("scroll", function () {
      var e = t.scrollTop(),
        a = s(".navbar-brand img"),
        o = s(".navbar-brand.logodefault img");
      e <= 50
        ? (s("header").removeClass("scrollHeader").addClass("fixedHeader"),
          a.attr("src", "img/logos/logo-inner.png"))
        : (s("header").removeClass("fixedHeader").addClass("scrollHeader"),
          a.attr("src", "img/logos/logo.png")),
        o.attr("src", "img/logos/logo.png");
    }),
    t.on("scroll", function () {
      500 < s(this).scrollTop()
        ? s(".scroll-to-top").fadeIn(400)
        : s(".scroll-to-top").fadeOut(400);
    }),
    s(".scroll-to-top").on("click", function (e) {
      e.preventDefault(), s("html, body").animate({ scrollTop: 0 }, 600);
    }),
    s(".parallax,.bg-img").each(function (e) {
      s(this).attr("data-background") &&
        s(this).css(
          "background-image",
          "url(" + s(this).data("background") + ")"
        );
    }),
    s(".story-video").magnificPopup({ delegate: ".video", type: "iframe" }),
    s(".source-modal").magnificPopup({
      type: "inline",
      mainClass: "mfp-fade",
      removalDelay: 160,
    }),
    new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: !1,
      live: !0,
    }).init(),
    t.resize(function (e) {
      setTimeout(function () {
        a();
      }, 500),
        e.preventDefault();
    }),
    0 !== s(".copy-clipboard").length &&
      (new ClipboardJS(".copy-clipboard"),
      s(".copy-clipboard").on("click", function () {
        var e = s(this);
        e.text();
        e.text("Copied"),
          setTimeout(function () {
            e.text("Copy");
          }, 2e3);
      })),
    a(),
    s(document).ready(function () {
      s(".testimonial-carousel1").owlCarousel({
        loop: !0,
        responsiveClass: !0,
        nav: !1,
        navText: [
          "<span class='fa-solid fa-arrow-left-long'></span>",
          "<span class='fa-solid fa-arrow-right-long'></span>",
        ],
        dots: !0,
        margin: 0,
        center: !1,
        autoplay: !0,
        autoplayTimeout: 5e3,
        smartSpeed: 1500,
        items: 1,
        responsive: { 992: { dots: !1, nav: !0 } },
      }),
        s(".testimonial-carousel-one").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          nav: !1,
          navText: [
            "<span class='fa-solid fa-arrow-left-long'></span>",
            "<span class='fa-solid fa-arrow-right-long'></span>",
          ],
          dots: !1,
          margin: 0,
          center: !1,
          autoplay: !0,
          autoplayTimeout: 5e3,
          smartSpeed: 1500,
          items: 1,
          responsive: { 992: { dots: !1, nav: !1 } },
        }),
        s(".testimonial-carousel-two").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          nav: !1,
          navText: [
            "<span class='fa-solid fa-arrow-left-long'></span>",
            "<span class='fa-solid fa-arrow-right-long'></span>",
          ],
          dots: !1,
          margin: 0,
          center: !1,
          autoplay: !0,
          autoplayTimeout: 5e3,
          smartSpeed: 1500,
          items: 1,
          responsive: { 992: { dots: !1, nav: !0 } },
        }),
        s(".testimonial-carousel-three").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          nav: !1,
          navText: [
            "<span class='fa-solid fa-arrow-left-long'></span>",
            "<span class='fa-solid fa-arrow-right-long'></span>",
          ],
          dots: !1,
          margin: 0,
          center: !1,
          autoplay: !0,
          autoplayTimeout: 5e3,
          smartSpeed: 1500,
          items: 1,
          responsive: { 992: { dots: !1, nav: !0 } },
        }),
        s(".portfolio-carousel").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          autoplayTimeout: 5e3,
          smartSpeed: 1500,
          nav: !1,
          dots: !1,
          center: !1,
          margin: 0,
          responsive: {
            0: { items: 1 },
            576: { items: 2 },
            768: { items: 3 },
            992: { items: 3 },
            1200: { items: 4 },
          },
        }),
        s(".portfolio-carousel-one").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          autoplayTimeout: 5e3,
          smartSpeed: 1500,
          nav: !1,
          dots: !1,
          margin: 25,
          responsive: {
            0: { items: 1 },
            576: { items: 2 },
            768: { items: 3 },
            992: { items: 3 },
            1200: { items: 4 },
          },
        }),
        s(".history-carousel").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          autoplayTimeout: 5e3,
          smartSpeed: 1500,
          nav: !1,
          dots: !1,
          center: !1,
          margin: 0,
          responsive: {
            0: { items: 1 },
            576: { items: 1 },
            768: { items: 2 },
            992: { items: 3 },
          },
        }),
        s(".testimonial-carousel2").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          nav: !0,
          navText: [
            "<span class='fa-solid fa-arrow-left-long'></span>",
            "<span class='fa-solid fa-arrow-right-long'></span>",
          ],
          dots: !1,
          margin: 50,
          center: !1,
          autoplay: !0,
          autoplayTimeout: 5e3,
          smartSpeed: 1500,
          items: 1,
        }),
        s(".service-carousel").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          autoplayTimeout: 5e3,
          smartSpeed: 1500,
          nav: !1,
          dots: !0,
          center: !1,
          margin: 30,
          responsive: {
            0: { items: 1 },
            768: { items: 2 },
            1200: { items: 3 },
          },
        }),
        s(".service-carousel-one").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          autoplayTimeout: 5e3,
          smartSpeed: 1500,
          nav: !1,
          dots: !1,
          center: !0,
          margin: 60,
          responsive: {
            0: { items: 1 },
            768: { items: 2, margin: 20 },
            1200: { items: 2, margin: 40 },
            1400: { items: 2 },
          },
        }),
        s(".clients-carousel").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          autoplayTimeout: 5e3,
          smartSpeed: 1500,
          nav: !1,
          dots: !1,
          center: !1,
          margin: 30,
          responsive: {
            0: { items: 1 },
            576: { items: 2 },
            768: { items: 3 },
            992: { items: 3 },
            1200: { items: 3 },
          },
        }),
        s(".clients02-carousel").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          autoplayTimeout: 5e3,
          smartSpeed: 1500,
          nav: !1,
          dots: !1,
          center: !1,
          margin: 30,
          responsive: {
            0: { items: 2 },
            576: { items: 3 },
            768: { items: 3 },
            992: { items: 4 },
            1200: { items: 5 },
          },
        }),
        s(".clients04-carousel").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          autoplayTimeout: 5e3,
          smartSpeed: 1500,
          nav: !1,
          dots: !1,
          center: !1,
          margin: 30,
          responsive: {
            0: { items: 1 },
            576: { items: 2 },
            768: { items: 2 },
            992: { items: 3 },
            1200: { items: 4 },
          },
        }),
        s(".slider-fade1").owlCarousel({
          items: 1,
          loop: !0,
          dots: !0,
          margin: 0,
          nav: !1,
          navText: [
            "<span class='fas fa-chevron-left'></span>",
            "<span class='fas fa-chevron-right'></span>",
          ],
          autoplay: !0,
          smartSpeed: 1500,
          mouseDrag: !1,
          animateIn: "fadeIn",
          animateOut: "fadeOut",
        }),
        s(".slider-fade3").owlCarousel({
          items: 1,
          loop: !0,
          dots: !0,
          margin: 0,
          nav: !1,
          navText: [
            "<i class='ti-arrow-left'></i>",
            "<i class='ti-arrow-right'></i>",
          ],
          autoplay: !0,
          autoplayTimeout: 7e3,
          smartSpeed: 1500,
          animateIn: "fadeIn",
          animateOut: "fadeOut",
          responsive: { 992: { nav: !0, dots: !1 } },
        }),
        s(".owl-carousel").owlCarousel({
          items: 1,
          loop: !0,
          dots: !1,
          margin: 0,
          autoplay: !0,
          smartSpeed: 500,
        }),
        s(".slider-fade1").on("changed.owl.carousel", function (e) {
          e = e.item.index - 2;
          s("span").removeClass("animated fadeInUp"),
            s("h1").removeClass("animated fadeInUp"),
            s("p").removeClass("animated fadeInUp"),
            s("a").removeClass("animated fadeInUp"),
            s(".owl-item")
              .not(".cloned")
              .eq(e)
              .find("span")
              .addClass("animated fadeInUp"),
            s(".owl-item")
              .not(".cloned")
              .eq(e)
              .find("h1")
              .addClass("animated fadeInUp"),
            s(".owl-item")
              .not(".cloned")
              .eq(e)
              .find("p")
              .addClass("animated fadeInUp"),
            s(".owl-item")
              .not(".cloned")
              .eq(e)
              .find("a")
              .addClass("animated fadeInUp");
        }),
        s(".slider-fade3").on("changed.owl.carousel", function (e) {
          e = e.item.index - 2;
          s(".small-title").removeClass("animated fadeInUp"),
            s("h1").removeClass("animated fadeInUp"),
            s("p").removeClass("animated fadeInUp"),
            s("a").removeClass("animated fadeInUp"),
            s(".banner-button").removeClass("animated fadeInUp"),
            s(".owl-item")
              .not(".cloned")
              .eq(e)
              .find(".small-title")
              .addClass("animated fadeInUp"),
            s(".owl-item")
              .not(".cloned")
              .eq(e)
              .find("h1")
              .addClass("animated fadeInUp"),
            s(".owl-item")
              .not(".cloned")
              .eq(e)
              .find("p")
              .addClass("animated fadeInUp"),
            s(".owl-item")
              .not(".cloned")
              .eq(e)
              .find("a")
              .addClass("animated fadeInUp"),
            s(".owl-item")
              .not(".cloned")
              .eq(e)
              .find(".banner-button")
              .addClass("animated fadeInUp");
        }),
        0 !== s(".horizontaltab").length &&
          s(".horizontaltab").easyResponsiveTabs({
            type: "default",
            width: "auto",
            fit: !0,
            tabidentify: "hor_1",
            activate: function (e) {
              var a = s(this),
                o = s("#nested-tabInfo");
              s("span", o).text(a.text()), o.show();
            },
          }),
        s(".countup").counterUp({ delay: 25, time: 2e3 }),
        s(".countdown").countdown({
          date: "01 Jan 2027 00:01:00",
          format: "on",
        }),
        s(".current-year").text(new Date().getFullYear());
    }),
    t.on("load", function () {
      s(".portfolio-gallery").lightGallery(),
        s(".portfolio-link").on("click", (e) => {
          e.stopPropagation();
        });
    });
})(jQuery);