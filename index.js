function trigger() {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}
trigger();

function pag1AllContent() {
    let page1 = document.querySelector("#page1-content");
    let cursor = document.querySelector("#cursor");

    page1.addEventListener("mousemove", function (det) {
        gsap.to(cursor, {
            x: det.x,
            y: det.y
        })
    });

    page1.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            scale: 1,
        })
    })
    page1.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            scale: 0,
        })
    })
}
pag1AllContent();

function page2Animation() {
    gsap.to(".elem h1", {
        y: 120,
        stagger: 0.2,
        duration: 2,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 17%",
            end: "top 6%",
            // markers : true,
            scrub: 2,
        }
    });
}
page2Animation();

function page4Animation() {
    gsap.to(".elem1 h1", {
        y: 90,
        stagger: 5,
        duration: 2,
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main",
            start: "top 37%",
            end: "top 36%",
            scrub: 1,
        }
    });
}
page4Animation();
 
let page5 = document.querySelector("#page5");
let crsr = document.querySelector("#crsr");

    page5.addEventListener("mousemove", function (det) {
        gsap.to(crsr, {
            x: det.x,
            y: det.y
        })
});

function swiperJS(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}
swiperJS();

let tl = gsap.timeline()

tl.from("#loader h3" , {
    x : 40,
    opacity  : 0,
    duration : 1,
    stagger  :0.2,
})
tl.to("#loader h3", {
    opacity : 0,
    x: -10,
    duration : 1,
    stagger : 0.1,
})
tl.to("#loader",{
    opacity : 0,
    duration : 3,
})
tl.from("#page1-content h1 span",{
    y : 100,
    opacity  : 0,
    stagger : 0.1,
    duration : 0.2,
    delay : -0.5,
})
tl.to("#loader",{
    display : "none",
})

