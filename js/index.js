//header
const header = document.querySelector("#header");
//banner
const banner = document.querySelector("#bannerBg");
const bannerAddition = document.querySelector("#bannerBgAddition");
//content
const h1Line = document.querySelectorAll(".line span");
const contentP = document.querySelector(".content-inner p");
const contentButton = document.querySelector(".content-inner .btn-row");
const playVideo = document.querySelector(".play-video span");
const playVideoCover = document.querySelector(".play-video .cover");
//image
const handImg = document.querySelector(".image-inner img");
const featureBanner = document.querySelector("#featureBanner");
const featureBannerGreen = document.querySelector("#featureBannerGreen");
//features
const featureContentTitle = document.querySelector(".features-content h3");
const featureContentP = document.querySelector(".features-content p");
const featureContentButton = document.querySelector(".features-content .btn-row");
const featureList = document.querySelectorAll(".features-list li");



//create timeline
const bannerTL = gsap.timeline();

//Timeline for page loading animation [targets]
bannerTL
    //start the aniamtion from a certain value
    .from([bannerAddition, banner], {
        duration: 1.2,
        width: 0,
        skewX: 4,
        opacity: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.2
        }
    })
    .from(header, {
      delay: 0,
      y: 16,
      opacity: 0,
      duration: 0.8,
      ease: "power3.inOut"
    })
    .from(h1Line, {
      delay: -0.4,
      y: 80,
      duration: 0.8,
      ease: "power3.inOut",
      stagger: {
        amount: 0.2
      }
    })
    .from([contentP, contentButton], {
      delay: -0.6,
      y: -40,
      duration: .8,
      opacity: 0,
      ease: "power3.out",
      stagger: {
        amount: 0.2,
      }
    })
    .to([playVideo, playVideoCover], {
      delay: -0.6,
      opacity: 1,
      duration: 0
    })
    .to(playVideoCover, {
      delay: -0.6,
      height: 0,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(handImg, {
      delay: 2.2,
      x: -100,
      skewX: 2,
      duration: 0.8,
      opacity: 0,
      ease: "power3.out"
    });
    gsap.from([featureBanner, featureBannerGreen], {
      delay: 2.2,
      x: -60,
      skewX: 6,
      duration: 0.8,
      opacity: 0,
      ease: "power3.out",
      stagger: {
        amount: 0.2
      }
    });
  


const featureTL = gsap.timeline();
  featureTL
  .from(
    [featureContentTitle, featureContentP, featureContentButton],
    {
        opacity: 0,
        y: 40, 
        duration: 0.6,
        ease: "power3.out",
        stagger: {
          amount: 0.2
        }
      }
  )
  .from(featureList, {
    delay: -.4,
    opacity: 0,
    y: 40,
    duration: 0.6,
    ease: "power3.out",
    stagger: {
      amount: .2
    }
  })


// const feature2TL = gsap.timeline();
//   feature2TL
//     .from(feature2, {
//       ScrollTrigger: {
//         trigger: ".features2",
//         start: "bottom center"
//       },
//       delay: -.4,
//       duration: 1.2,
//       opacity: 0,
//       width: 0,
//       skewX: 4,
//       ease: "power3.Out",
//       stagger: {
//         amount: 0.2
//       }
//     });





  const controller = new ScrollMagic.Controller();
  const scene = new ScrollMagic.Scene({
    //when the screen scroll to the green button then trigger the feature animation
    triggerElement: "#featureBannerGreen",
    triggerHook: 0.2,
    reverse: false
  })
  // .addIndicators({
  //   name: "banner fading",
  //   colorTrigger: "black",
  //   colorStart: "#75C695",
  //   colorEnd: "pink"
  // })
  .setTween(featureTL)
  .addTo(controller);


  //loop through each project element
  // $(".project").each(function() {
    
  // });



// $(document).ready(function() {
//   // const controller = new ScrollMagic.Controller();


//   // //add scroll trigger loop
  // $("#project section").each(function() {
  //   const scene = new ScrollMagic.Scene({
  //   //when the screen scroll to the green button then trigger the feature animation
  //   triggerElement: this,
  //   triggerHook: 0.2,
  //   reverse: false
  // })
  // .addIndicators({
  //   name: "banner fading",
  //   colorTrigger: "black",
  //   colorStart: "#75C695",
  //   colorEnd: "pink"
  // })
  // .setTween(featureTL)
  // .addTo(controller);

  // })

// add active class for features that are on screen
// const reveal = gsap.utils.toArray('.features');
// reveal.forEach((features, i) => {
//   ScrollTrigger.create({
//     trigger: features,
//     toggleClass: 'active',
//     start: 'top 60%',
//     end: 'bottom 40%',
//     markers: true,
//   })
  
// });
  
// })

// const reveal = gsap.utils.toArray('.features');
// reveal.forEach(features => {
//   const feature2TL = gsap.timeline({
//     ScrollTrigger: {
//       trigger: ".features2",
//       start: "top center",
//       toggleActions: "play none none reverse",
//         markers: true,
//     },
//   });
//   feature2TL
//     .from(feature2, {
      
//       delay: -.4,
//       duration: 1.2,
//       opacity: 0,
//       width: 0,
//       skewX: 4,
//       ease: "power3.Out",
//       stagger: {
//         amount: 0.2
//       }
//     });

  
  // gsap.from(features, { 
  //   x: 300,
  //   scrollTrigger: {
  //     trigger: features,
  //     markers: true,
  //     start: "bottom "
  //   }
  // })
// });


gsap.utils.toArray(".features").forEach((features) => {
  
//features2
//features
const feature2ContentTitle = document.querySelector("#features2 .features-content h3");
const feature2ContentP = document.querySelector("#features2 .features-content p");
const feature2ContentButton = document.querySelector("#features2 .features-content .btn-row");
const feature2List = document.querySelectorAll("#features2 .features-list li");
const feature2Inner = document.querySelectorAll("#features2 .features-inner");
const feature2Img = document.querySelectorAll("#features2 .features-img");



    const tl = gsap.timeline({
        scrollTrigger: {
        trigger: features,
        start: 'top 40%',
        //toggleActions: "play pause replay pause",
        toggleActions: "play none none reverse",
        markers: false,
      },
      ease: "power3.In",
    });
  
    tl    
    .to(features, {
      // opacity: 1,
      duration: 0.4,
      })
     
    .to(feature2Inner, {
        delay: 0.2,
        duration: 0.6,
        opacity : 1, 
        stagger: .2,
    })
    .to(feature2Img, {
      scale: 1,
        delay: 0,
        duration: 0.4,
        x: 0, 
        opacity : 1, 
        stagger: .2,
      });
      
  
  
});