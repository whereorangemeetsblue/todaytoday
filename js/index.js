const $ = (selector) => document.querySelector(selector);

var x = window.matchMedia("(min-width: 501px)");
var y = window.matchMedia("(max-width: 500px)");

window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  console.log(scrollTop);

  
  if (x.matches) { // If media query matches
    if (scrollTop > 870) {
      $('.odeto').classList.add('on');
    }
  }

  if (y.matches) { // If media query matches
    if (scrollTop > 5000) {
      $('.profile').classList.add('on');
    }
    if (scrollTop > 6000) {
      $('.img07').classList.add('on');
    }
  }


});

if (x.matches) { // If media query matches
gsap.to('.fix01', {
            
  scrollTrigger: {
    trigger: ".trigger01",
    start: "top top",
    end: 'bottom bottom',
    pin: true,
    pinSpacing: false,
    scrub: true,
  }
});

let mtTwo = $('.maintitle01').querySelectorAll('.two');

gsap.to(mtTwo[0], {
    
  width: 229,
    scrollTrigger: {
    trigger: "#section01",
    start: "top top",
    end: '+=1000',
    scrub: true,
    }
});

gsap.to(mtTwo[1], {
    
  width: 332,
    scrollTrigger: {
    trigger: "#section01",
    start: "top top",
    end: '+=1000',
    scrub: true,
    }
});

gsap.to(mtTwo[2], {
    
  width: 221,
    scrollTrigger: {
    trigger: "#section01",
    start: "top top",
    end: '+=1000',
    scrub: true,
    }
});

gsap.to(mtTwo[3], {
    
  width: 163,
    scrollTrigger: {
    trigger: "#section01",
    start: "top top",
    end: '+=1000',
    scrub: true,
    }
});

gsap.to(mtTwo[0], {
    
  opacity: 1,
    scrollTrigger: {
    trigger: "#section01",
    start: "1000 top",
    end: '+=1000',
    scrub: true,
    }
});

gsap.to(mtTwo[1], {
    
  opacity: 1,
    scrollTrigger: {
    trigger: "#section01",
    start: "1000 top",
    end: '+=1000',
    scrub: true,
    }
});

gsap.to(mtTwo[2], {
    
  opacity: 1,
    scrollTrigger: {
    trigger: "#section01",
    start: "1000 top",
    end: '+=1000',
    scrub: true,
    }
});

gsap.to(mtTwo[3], {
    
  opacity: 1,
    scrollTrigger: {
    trigger: "#section01",
    start: "1000 top",
    end: '+=1000',
    scrub: true,
    }
});

gsap.to('.boat', {
    
    rotation: 0,
      scrollTrigger: {
      trigger: "#section01",
      start: "2000 top",
      end: '+=2000',
      scrub: true,
      }
});

gsap.to('.boat', {
    
  y: -600,
    scrollTrigger: {
    trigger: "#section01",
    start: "10000 top",
    end: '+=2000',
    scrub: true,
    }
});

gsap.to('.boatmobile', {
  
  y: 2000,    
    scrollTrigger: {
    trigger: "#section03",
    start: "top top",
    end: '+=3000',
    scrub: true,
    }
});

gsap.to('.boatmovement', {
  
  y: 3760,    
    scrollTrigger: {
    trigger: "#section01",
    start: "top top",
    end: '+=1500',
    scrub: true,
    }
});

}

// mobile

if (y.matches) { // If media query matches
  gsap.to('.fix04', {
              
    scrollTrigger: {
      trigger: ".trigger04",
      start: "top top",
      end: 'bottom bottom',
      pin: true,
      pinSpacing: false,
      scrub: true,
    }
  });

  let mbTwo = $('.title04').querySelectorAll('.two');

  gsap.to(mbTwo[0], {
    
    opacity: 0,
      scrollTrigger: {
      trigger: "#section04",
      start: "top top",
      end: '+=1000',
      scrub: true,
      }
  });
  gsap.to(mbTwo[1], {
    
    opacity: 0,
      scrollTrigger: {
      trigger: "#section04",
      start: "top top",
      end: '+=1000',
      scrub: true,
      }
  });
  gsap.to(mbTwo[2], {
    
    opacity: 0,
      scrollTrigger: {
      trigger: "#section04",
      start: "top top",
      end: '+=1000',
      scrub: true,
      }
  });
  gsap.to(mbTwo[3], {
    
    opacity: 0,
      scrollTrigger: {
      trigger: "#section04",
      start: "top top",
      end: '+=1000',
      scrub: true,
      }
  });

  gsap.to('.where', {
    
    y: -170,
      scrollTrigger: {
      trigger: "#section04",
      start: "1000 top",
      end: '+=1000',
      scrub: true,
      }
  });
  gsap.to('.orange', {
    
    y: -280,
    x: 80,
      scrollTrigger: {
      trigger: "#section04",
      start: "1000 top",
      end: '+=1000',
      scrub: true,
      }
  });
  gsap.to('.meets', {
    
    y: -390,
    x: 140,
      scrollTrigger: {
      trigger: "#section04",
      start: "1000 top",
      end: '+=1000',
      scrub: true,
      }
  });
  gsap.to('.blue', {
    
    y: -500,
    x: 230,
      scrollTrigger: {
      trigger: "#section04",
      start: "1000 top",
      end: '+=1000',
      scrub: true,
      }
  });

  gsap.to('.poster01', {

    x: -100,
    y: -200,
    rotation: 380,
      scrollTrigger: {
      trigger: "#section04",
      start: "2000 top",
      end: '+=1000',
      scrub: true,
      }
  });

  gsap.to('.poster02', {

    x: 100,
    y: 200,
    rotation: 180,
      scrollTrigger: {
      trigger: "#section04",
      start: "2000 top",
      end: '+=1000',
      scrub: true,
      }
  });

  gsap.to('.poster03', {

    x: -200,
    y: 300,
    rotation: 280,
      scrollTrigger: {
      trigger: "#section04",
      start: "2000 top",
      end: '+=1000',
      scrub: true,
      }
  });

  gsap.to('.poster04', {

    x: -200,
    y: -200,
    rotation: 100,
      scrollTrigger: {
      trigger: "#section04",
      start: "2000 top",
      end: '+=1000',
      scrub: true,
      }
  });

  gsap.to('.poster05', {

    x: 100,
    y: 100,
    rotation: 380,
      scrollTrigger: {
      trigger: "#section04",
      start: "2000 top",
      end: '+=1000',
      scrub: true,
      }
  });

  gsap.to('.poster06', {

    x: -100,
    y: 150,
    rotation: 500,
      scrollTrigger: {
      trigger: "#section04",
      start: "2000 top",
      end: '+=1000',
      scrub: true,
      }
  });

  gsap.to('.round', {
      
    rotation: 180,
      scrollTrigger: {
      trigger: "#section06",
      start: "top center",
      end: '+=1000',
      scrub: true,
      }
  });

  gsap.to('.star', {
      
    rotation: -500,
      scrollTrigger: {
      trigger: "#section08",
      start: "top center",
      end: '+=1000',
      scrub: true,
      }
  });

  gsap.to('.fix09', {
              
    scrollTrigger: {
      trigger: ".trigger09",
      start: "top top",
      end: 'bottom bottom',
      pin: true,
      pinSpacing: false,
      scrub: true,
    }
  });

  gsap.to('.video09', {
      
    width: 500,
      scrollTrigger: {
      trigger: "#section09",
      start: "top top",
      end: '+=1000',
      scrub: true,
      }
  });

  let contactImg = $('.contact').querySelectorAll('img');
  gsap.to(contactImg[0], {
      
    x: -41,
      scrollTrigger: {
      trigger: "#section09",
      start: "1000 top",
      end: 'bottom bottom',
      scrub: true,
      }
  });
  gsap.to(contactImg[1], {
      
    x: -41,
      scrollTrigger: {
      trigger: "#section09",
      start: "1000 top",
      end: 'bottom bottom',
      scrub: true,
      }
  });
  gsap.to(contactImg[2], {
      
    x: -51,
      scrollTrigger: {
      trigger: "#section09",
      start: "1000 top",
      end: 'bottom bottom',
      scrub: true,
      }
  });
  gsap.to(contactImg[3], {
      
    x: -36,
      scrollTrigger: {
      trigger: "#section09",
      start: "1000 top",
      end: 'bottom bottom',
      scrub: true,
      }
  });

  gsap.to(contactImg[4], {
      
    x: -49,
      scrollTrigger: {
      trigger: "#section09",
      start: "1000 top",
      end: 'bottom bottom',
      scrub: true,
      }
  });

  gsap.to(contactImg[5], {
      
    x: -41,
      scrollTrigger: {
      trigger: "#section09",
      start: "1000 top",
      end: 'bottom bottom',
      scrub: true,
      }
  });

  gsap.to(contactImg[6], {
      
    x: -36,
      scrollTrigger: {
      trigger: "#section09",
      start: "1000 top",
      end: 'bottom bottom',
      scrub: true,
      }
  });






  
}
