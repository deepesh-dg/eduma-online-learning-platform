wow = new WOW({
    boxClass: "wow", // default
    animateClass: "animated", // default
    offset: 0, // default
    mobile: true, // default
    live: true, // default
});
wow.init();

if ($(window).width() > 991) {
    $(document).ready(function () {
        $(".carousel-image").css("height", $(window).height());
    });
}
if ($(window).width() > 1199) {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 10) {
            $("#main-header").addClass("header-bg-white");
            $("#logo").attr("src", "images/logo-sticky.webp");
            $(".nav-item").attr("style", "padding:16px 7px;");
        } else {
            $("#main-header").removeClass("header-bg-white");
            $("#logo").attr("src", "images/logo.webp");
            $(".nav-item").attr("style", "padding:24px 7px;");
        }
    });
} else {
    $("#main-header").addClass("header-bg-white");
    $("#logo").attr("src", "images/logo-sticky.webp");
}

// var cursor = document.createElement("div");
// cursor.style.width = "10px";
// cursor.style.height = "10px";
// cursor.style.border = "1px solid #fff";
// cursor.style.background = "#fff";
// cursor.style.borderRadius = "50%";
// cursor.style.position = "absolute";
// body = document.getElementsByTagName("body")[0];
// body.appendChild(cursor);

// var cursorFllw = document.createElement("div");
// cursorFllw.style.width = "50px";
// cursorFllw.style.height = "50px";
// cursorFllw.style.border = "1px solid #fff";
// cursorFllw.style.borderRadius = "50%";
// cursorFllw.style.position = "absolute";
// cursorFllw.style.transition = "all 0ms cubic-bezier(0,.02,1,.99)";
// body = document.getElementsByTagName("body")[0];
// body.appendChild(cursorFllw);

// document.addEventListener("mousemove", (e) => {

// 	cursor.style.top = (e.clientY - 5) + "px";
// 	cursor.style.left = (e.clientX - 5) + "px";

// 	cursorFllw.style.top = (e.clientY - 25) + "px";
// 	cursorFllw.style.left = (e.clientX - 25) + "px";

// });
$("#teachers .owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    loop: true,
    center: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    mouseDrag: true,
    touchDrag: true,
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        768: {
            items: 2,
        },
        992: {
            items: 3,
        },
        1200: {
            items: 3,
        },
    },
});

$("#people .owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    mouseDrag: true,
    touchDrag: true,
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 1,
        },
        768: {
            items: 1,
        },
        992: {
            items: 1,
        },
        1200: {
            items: 1,
        },
    },
});

// $("input").focus(function(){
//     if ($('.form-group label').attr('for') == this.attr('id')) {
//         $('.form-group label').attr('style','top:-14px;')
//     }
// });
