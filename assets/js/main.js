/**
* Template Name: MyPortfolio
* Updated: Jul 27 2023 with Bootstrap v5.3.1
* Template URL: https://bootstrapmade.com/myportfolio-bootstrap-portfolio-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * burgerMenu
   */
  const burgerMenu = select('.burger')
  on('click', '.burger', function(e) {
    burgerMenu.classList.toggle('active');
  })

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('#portfolio-grid');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.item',
      });

      let portfolioFilters = select('#filters a', true);

      on('click', '#filters a', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('active');
        });
        this.classList.add('active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()

function show_project(name){
  all_projects ={  
    oscar: {
      name: "Oscar travels",
      description:"Oscar for travels, Laravel project",
      skills:["software design","php","laravel","sql","Apis","payment gateways integration"],
      images:["assets/img/oscar2.png","assets/img/oscar3.png","assets/img/oscar.jpg"]
    },
    earabiclearning: {
      name: "E-arabic learning",
      description:"E-arabic learning for Arabic online live cources for non-Arabic speakers, Laravel project",
      skills:["software design","php","laravel","sql","Apis","payment gateways integration"],
      images:["assets/img/earabiclearning2.png","assets/img/earabiclearning3.png","assets/img/earabiclearning4.png","assets/img/earabiclearning5.png"]
    },
    rased:{
      name:"Rased for Education notifications",
      description:"A site for managing schools notifications and communications with parents. Innovative solutions have been found to communicate through various sms and WhatsApp service providers\
      <br>The project was implemented on the Laravel framework.",
      skills:["software design","php","laravel","sql","Apis","gateways integration"],
      images:["assets/img/rased4.png","assets/img/rased2.png","assets/img/rased3.png"]
    },
    ethra: {
      name: "Ethra for courses",
      description:"Participate in implementing and developing the project.\
      Add ingTamara payment method to the website.",
      skills:["php","laravel","sql","Apis"],
      images:["assets/img/ethraa2.jpg"]
    },
    DarbPrint: {
      name: "Darb Print",
      description:"building the backend of this store using Laravel Framework. And Designing the database.",
      skills:["php","Laravel","database architecture"],
      images:["assets/img/darb-print2.png","assets/img/darb-print1.jpg"]
    },
    visuecstock: {
      name: "VisuecStock",
      description:"Developing VisuecStock site as a mediator between photographers or art makers and content makers, managing the process of buying and selling photos and videos between buyer and seller.\
      The project was developed using Laravel platform, Vue.js.",
      skills:["MySQL", "Web Development", "PHP","API Integration", "Laravel","Vue.js", "Database Architecture","Apache", "HTTP", "Server"],
      images:["assets/img/visuecstock2.jpg","assets/img/visuecstock3.jpg","assets/img/visuecstock4.jpg","assets/img/visuecstock5.png"]
    },
    elasreya: {
      name: "El-Asreya",
      description:"Company introduction website.",
      skills:[ "Web Development", "PHP"],
      images:["assets/img/elasreya2.png"]
    },
    moasasa: {
      name: "El Moasasa",
      description:"Educational platform.",
      skills:["MySQL", "Web Development", "PHP","API Integration", "Laravel","Vue.js", "Database Architecture","Apache", "HTTP", "Server"],
      images:["assets/img/moasasa2.png"]
    },
    m7lat: {
      name: "Mahelat",
      description:"classified ads website.",
      skills:["MySQL", "Web Development", "Codeigniter","PHP","OOP", "Database Architecture"],
      images:["assets/img/m7lat2.jpeg","assets/img/m7lat3.jpeg"]
    },
    aqarnet: {
      name: "Aqar.Net for real estate",
      description:"real estate ads website. build using native PHP",
      skills:["MySQL", "Web Development","PHP","OOP", "Database Architecture"],
      images:["assets/img/aqarnet2.png","assets/img/aqarnet3.png","assets/img/aqarnet4.png"]
    },
    oalalife: {
      name: "OalaLife",
      description:"Developing e-store over magento platform",
      skills:["MySQL", "Web Development", "PHP", "Magento", "Magento themes","Degital Marketing"],
      images:["assets/img/oalalife2.png"]
    },
    farmkem: {
      name: "FarmKem",
      description:"farmkem is an online store puild in OOP php architect that I helped in development by increasing the features of the system. Creating the module of Admin control over his products and giving financial reports to him plus installing a responsive template to the front end of the site.",
      skills:["MySQL", "Web Development", "PHP","API Integration", "Laravel","Vue.js", "Database Architecture","Apache", "HTTP", "Server"],
      images:["assets/img/farmkem2.png","assets/img/farmkem3.png"]
    },
    el7l: {
      name: "el-7l Dating site",
      description:"Developing and designing a dating solution website using Laravel Framework\
      I designed the site from the ground up, with a control panel with multiple options to control all fields and options, from the interface to the terms of members’ subscription to controlling subscribers’ packages and managing accounts.\
      Also it is easy to use.",
      skills:["MySQL", "Web Development", "PHP","API Integration", "Laravel","Vue.js", "Database Architecture","Apache", "HTTP", "Server"],
      images:["assets/img/el7l3.png","assets/img/el7l4.png","assets/img/el7l6.png","assets/img/el7l2.png"]
    },
    basmetamal: {
      name: "Basmet Amal Blog site",
      description:"Developing and designing a dating solution website using Laravel Framework\
      I designed the site from the ground up, including a control panel with multiple options to control all fields and options, from the interface to the terms of members’ subscription to controlling subscribers’ packages and managing accounts.\
      Also it is easy to use.",
      skills:["MySQL", "Web Development", "PHP","API Integration", "Laravel","Vue.js", "Database Architecture","Apache", "HTTP", "Server"],
      images:["assets/img/basmetamal2.png"]
    },
    elsaleh: {
      name: "El-Saleh",
      description:"Company introduction website.",
      skills:[ "Web Development", "PHP"],
      images:["assets/img/elsaleh2.png"]
    },
  };
  if(all_projects.hasOwnProperty(name)){
    console.log(all_projects[name]['description'])
    // set name
    $('#project_name').html(all_projects[name]['name'])

    // set description
    $('#project_description').html(all_projects[name]['description'])

    // set skills

    $('#project_skills').html("");
    all_projects[name]['skills'].forEach(element => {
     
      $('#project_skills').append('<h2 class="badge rounded-pill text-bg-info m-1">'+element+'</h2>');
    });
    //set images
    
    $('#carousel-items').html("");
    all_projects[name]['images'].forEach(element => {
      
      $('#carousel-items').append('<div class="carousel-item"><img src="'+ element +'" class="d-block w-100" ></div>') 
    });
    $('#carousel-items').find('.carousel-item').first().addClass("active");

    const myCarouselElement = document.querySelector('#carouselExample')

    const carousel = new bootstrap.Carousel(myCarouselElement, {
      interval: 2000,
      touch: false
    })

    var myModal = new bootstrap.Modal(document.getElementById("exampleModalFullscreen"), {});
    myModal.show();
  }
  
}
