 var ct = gsap.timeline();
 ct.from("header ,.logo, .item1 a", {
    y: -100,
    duration: .5,
    delay: .2,
    opacity: 0,
    stagger: 0.2,
  });


  var main = gsap.timeline();
  main .from("#head,.content-img img, .overview h2, p, #btn,footer, footer h3 ,.foot-main h5 a ", {
    y: 80,
    opacity: 0,
    duration: .6,
    stagger: 0.3,
  });