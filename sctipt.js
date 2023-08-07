function init(){
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
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
init();


// Cursor here 

var cursor = document.querySelector(".cursor")
document.onpointermove = (event) => {
  const { clientX, clientY } = event;
  cursor.animate(
    {
      left: `${clientX - 10}px`,
      top: `${clientY - 10}px`,
    },
    { duration: 1500, fill: "forwards" }
  );
};

// var logo = document.querySelector(".logo")
// logo.addEventListener("mouseenter",function(){
//   cursor.style.scale = 2
//   cursor.style.transition = "all ease 0.2s"
// })
// logo.addEventListener("mouseleave",function(){
//   cursor.style.scale = 1
//   cursor.style.transition = "all ease 0.2s"
// })

var big_cursor = document.querySelectorAll(".big-cursor")
big_cursor.forEach(function(elements){
  elements.addEventListener("mouseenter",function(){
    cursor.style.scale = 2
    cursor.style.transition = "ease-in 0.2s"
  })
  
  elements.addEventListener("mouseleave",function(){
    cursor.style.scale = 1
    cursor.innerHTML = ""
    // cursor.style.transition = "all ease 0.2s"
  })
}) 



var link_cursor = document.querySelectorAll(".link-cursor")
link_cursor.forEach(function(elements){
  elements.addEventListener("mouseenter",function(){
    cursor.style.scale = 3.5
    cursor.style.paddingTop = "2px"
    cursor.style.transition = "ease-in 0.2s"
    cursor.innerHTML = `<i class="ri-arrow-right-up-line"></i>`
  })
  
  elements.addEventListener("mouseleave",function(){
    cursor.style.scale = 1
    cursor.style.paddingTop = ""
    cursor.innerHTML = ""
    // cursor.style.transition = "all ease 0.2s"
  })
}) 




var sound_cursor = document.querySelectorAll(".sound-cursor")
sound_cursor.forEach(function(elements){
  elements.addEventListener("mouseenter",function(){
    cursor.style.width = "100px"
    cursor.style.paddingTop = "12px"
    cursor.style.height = "40px"
    cursor.style.borderRadius = "10px"
    cursor.innerHTML = "Sound Off"
    cursor.style.transition = "ease-in 0.2s"
  })
  
  elements.addEventListener("mouseleave",function(){
    cursor.style.scale = 1
    cursor.style.width = "22px"
    cursor.style.padding = "0px"
    cursor.style.height = "22px"
    cursor.style.borderRadius = "50%"
    cursor.innerHTML = ""
    // cursor.style.transition = "all ease 0.2s"
  })
}) 

function toggleMute() {
  var video=document.getElementById("myVideo");

  if (!video.muted) {
    cursor.innerHTML = "Sound Off"
  } else {
    cursor.innerHTML = "Sound On"
  }
  video.muted = !video.muted;

}


// <-- NAV STYLING -->
var nav = document.querySelectorAll("nav a")
var purple = document.querySelector("#purple")
nav.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    console.log(elem)
    purple.style.display = "block"
    purple.style.opacity = 1
    console.log(elem.innerHTML)
    let marque = elem.innerHTML;
    document.querySelector("."+marque).style.display = "block"
    document.querySelector("."+marque ).style.opacity = 1
    // purple.style.
  })
  elem.addEventListener("mouseleave",function(){
    console.log(elem)
    purple.style.display = "none"
    purple.style.opacity = 0
    let marque = elem.innerHTML;
    document.querySelector("."+marque).style.display = "none"
    document.querySelector("."+marque ).style.opacity = 0
    // purple.style.
  })
})







gsap.from(".hero .txt-1, .txt-2",{
  y: 10,
  // rotate: 5,
  transform: 'rotate(7deg)',
  transformOrigin:' 0% 0%',
  opacity: 0,
  delay: .3,
  duration: 0.7
})

var tl = gsap.timeline({
  scrollTrigger:{
    trigger:".hero",
    scroller:"#main",
    // markers:true,
    start:"130% 65%",
    end:"130% 30%",
    scrub:1.4
  }
})

tl.to(".hero .txt-1",{
  x: -200,
  opacity:0
},'a')

tl.to(".hero .txt-2",{
  x:200,
  opacity:0
},'a')

tl.to(".page1 video",{
  scale:1.5
},'a')
.to("#main",{
  backgroundColor:"#fff",
  color:"#000"
})



gsap.from(".page3 h1",{
  y: 30,
  // rotate: 5,
  transform: 'rotate(7deg)',
  transformOrigin:' 0% 0%',
  opacity: 0,
  delay: .3,
  duration: 1,
  scrollTrigger:{
    trigger:".page3",
    scroller:"#main",
    // markers:true,
    start:"-10% 50%",
    end:"0% 50%",
    scrub:1
  }
})

var tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:".page3-part1",
    scroller:"#main",
    // markers:true,
    start:"10% 75%",
    end:"50% 65%",
    scrub:1
  }
})
tl2.from(".page3-part1 video",{
  y:100
},'b')
tl2.from(".page3-part1 img",{
  y:200
},'b')

var tl3 = gsap.timeline({
  scrollTrigger:{
    trigger:".page3-part2",
    scroller:"#main",
    // markers:true,
    start:"10% 75%",
    end:"50% 65%",
    scrub:1
  }
})
tl3.from(".page3-part2 video",{
  y:300
},'b')
tl3.from(".page3-part2 img",{
  y:100
},'b')




var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
      var att = elem.getAttribute("data-image")
      cursor.style.width = "470px"
      cursor.style.height = "370px"
      cursor.style.borderRadius = "0"
      cursor.style.backgroundImage = `url(${att})`
  })
  elem.addEventListener("mouseleave",function(){
      elem.style.backgroundColor = "transparent"
      cursor.style.width = "20px"
      cursor.style.height = "20px"
      cursor.style.borderRadius = "50%"
      cursor.style.backgroundImage = `none`
  })
})

// var h4 = document.querySelectorAll("#nav h4")
// var purple = document.querySelector("#purple")
// h4.forEach(function(elem){
//     elem.addEventListener("mouseenter",function(){
//         purple.style.display = "block"   
//         purple.style.opacity = "1"
//     })
//     elem.addEventListener("mouseleave",function(){
//         purple.style.display = "none"   
//         purple.style.opacity = "0"
//     })
// })


// Footer here 
gsap.from("footer",{
  y:300,
  scrollTrigger:{
    trigger:"footer",
    scroller:"#main",
    start:"-30% 50%",
    end:"0% 50%",
    scrub:2,
    // markers:true
  }
})
gsap.from(".footer-in div",{
  y:-100,
  opacity:0,
  duration:0.3,
  // stagger:1,
  scrollTrigger:{
    trigger:"footer",
    scroller:"#main",
    start:"-30% 50%",
    end:"-10% 50%",
    scrub:4,
    // markers:true
  }
})


