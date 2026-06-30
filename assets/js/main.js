/**
* Template Name: MyPortfolio
* Updated: Jul 27 2023 with Bootstrap v5.3.1
* Template URL: https://bootstrapmade.com/myportfolio-bootstrap-portfolio-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function () {
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
  if (burgerMenu) {
    on('click', '.burger', function (e) {
      burgerMenu.classList.toggle('active');
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    document.addEventListener('scroll', toggleBacktotop)
  }

  /**
   * Typewriter animation for Hero section
   */
  const typewriterText = document.getElementById('typewriter-text');
  if (typewriterText) {
    const words = ["Web Applications", "Backend APIs", "Database Schemas", "Laravel Systems", "Scalable Architectures"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delay = 150;

    function type() {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        typewriterText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        delay = 60;
      } else {
        typewriterText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        delay = 120;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        delay = 2200; // Pause at end of word
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 400; // Pause before typing next word
      }

      setTimeout(type, delay);
    }

    setTimeout(type, 1000);
  }

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

      on('click', '#filters a', function (e) {
        e.preventDefault();
        portfolioFilters.forEach(function (el) {
          el.classList.remove('active');
        });
        this.classList.add('active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function () {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Testimonials slider
   */
  let testimonialsSlider = select('.testimonials-slider');
  if (testimonialsSlider) {
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
  }

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

function show_project(name) {
  const all_projects = {
    earabiclearning_new: {
      name: "E-arabic learning",
      description: "Developing frontend for <a href='https://earabiclearning.com' target='_blank'>earabiclearning.com</a> a platform for Arabic online live cources for non-Arabic speakers, Next.js project",
      skills: ["software design", "Next.js", "React.js", "Tailwind CSS", "Responsive Web Design"],
      images: ["assets/img/earabiclearning_new.png", "assets/img/earabiclearning-next1.png", "assets/img/earabiclearning-next.png", "assets/img/earabiclearning-next2.png"]
    },
    elaraby_erp: {
      name: "Elaraby ERP system",
      description: "Developing Laravel components and packages at <a href='https://elaraby-erp.net' target='_blank'>elaraby-erp.net</a> adding new features and integrating it with zatca.gov.sa ",
      skills: ["software design", "laravel", "sql", "Apis", "zatca.gov.sa integration"],
      images: ["assets/img/elaraby-erp3.png", "assets/img/elaraby-erp2.png", "assets/img/elaraby-erp1.png",]
    },
    massbazzar: {
      name: "Mass bazzar",
      description: "Developing Laravel fullstack project for <a href='https://massbazzar.com' target='_blank'>massbazzar.com</a> one of the biggest B2B marketplaces in Germany",
      skills: ["software design", "laravel", "sql", "Apis", "payment gateways integration"],
      images: ["assets/img/massbazzar1.png", "assets/img/massbazzar2.png", "assets/img/massbazzar3.png"]
    },
    oscar: {
      name: "Oscar travels",
      description: "Oscar for travels, Laravel project",
      skills: ["software design", "php", "laravel", "sql", "Apis", "payment gateways integration"],
      images: ["assets/img/oscar2.png", "assets/img/oscar3.png", "assets/img/oscar.jpg"]
    },
    earabiclearning: {
      name: "E-arabic learning",
      description: "E-arabic learning for Arabic online live cources for non-Arabic speakers, Laravel project",
      skills: ["software design", "php", "laravel", "sql", "Apis", "payment gateways integration"],
      images: ["assets/img/earabiclearning2.png", "assets/img/earabiclearning3.png", "assets/img/earabiclearning4.png", "assets/img/earabiclearning5.png"]
    },
    rased: {
      name: "Rased for Education notifications",
      description: "A site for managing schools notifications and communications with parents. Innovative solutions have been found to communicate through various sms and WhatsApp service providers<br>The project was implemented on the Laravel framework.",
      skills: ["software design", "php", "laravel", "sql", "Apis", "gateways integration"],
      images: ["assets/img/rased4.png", "assets/img/rased2.png", "assets/img/rased3.png"]
    },
    ethra: {
      name: "Ethra for courses",
      description: "Participate in implementing and developing the project.<br>Added Tamara payment method to the website.",
      skills: ["php", "laravel", "sql", "Apis"],
      images: ["assets/img/ethraa2.jpg"]
    },
    DarbPrint: {
      name: "Darb Print",
      description: "building the backend of this store using Laravel Framework. And Designing the database.",
      skills: ["php", "Laravel", "database architecture"],
      images: ["assets/img/darb-print2.png", "assets/img/darb-print1.jpg"]
    },
    visuecstock: {
      name: "VisuecStock",
      description: "Developing VisuecStock site as a mediator between photographers or art makers and content makers, managing the process of buying and selling photos and videos between buyer and seller.<br>The project was developed using Laravel platform, Vue.js.",
      skills: ["MySQL", "Web Development", "PHP", "API Integration", "Laravel", "Vue.js", "Database Architecture", "Apache", "HTTP", "Server"],
      images: ["assets/img/visuecstock2.jpg", "assets/img/visuecstock3.jpg", "assets/img/visuecstock4.jpg", "assets/img/visuecstock5.png"]
    },
    elasreya: {
      name: "El-Asreya",
      description: "Company introduction website.",
      skills: ["Web Development", "PHP"],
      images: ["assets/img/elasreya2.png"]
    },
    moasasa: {
      name: "El Moasasa",
      description: "Educational platform.",
      skills: ["MySQL", "Web Development", "PHP", "API Integration", "Laravel", "Vue.js", "Database Architecture", "Apache", "HTTP", "Server"],
      images: ["assets/img/moasasa2.png"]
    },
    m7lat: {
      name: "Mahelat",
      description: "classified ads website.",
      skills: ["MySQL", "Web Development", "Codeigniter", "PHP", "OOP", "Database Architecture"],
      images: ["assets/img/m7lat2.jpeg", "assets/img/m7lat3.jpeg"]
    },
    aqarnet: {
      name: "Aqar.Net for real estate",
      description: "real estate ads website. build using native PHP",
      skills: ["MySQL", "Web Development", "PHP", "OOP", "Database Architecture"],
      images: ["assets/img/aqarnet2.png", "assets/img/aqarnet3.png", "assets/img/aqarnet4.png"]
    },
    oalalife: {
      name: "OalaLife",
      description: "Developing e-store over magento platform",
      skills: ["MySQL", "Web Development", "PHP", "Magento", "Magento themes", "Degital Marketing"],
      images: ["assets/img/oalalife2.png"]
    },
    farmkem: {
      name: "FarmKem",
      description: "farmkem is an online store puild in OOP php architect that I helped in development by increasing the features of the system. Creating the module of Admin control over his products and giving financial reports to him plus installing a responsive template to the front end of the site.",
      skills: ["MySQL", "Web Development", "PHP", "API Integration", "Laravel", "Vue.js", "Database Architecture", "Apache", "HTTP", "Server"],
      images: ["assets/img/farmkem2.png", "assets/img/farmkem3.png"]
    },
    el7l: {
      name: "el-7l Dating site",
      description: "Developing and designing a dating solution website using Laravel Framework<br>I designed the site from the ground up, with a control panel with multiple options to control all fields and options, from the interface to the terms of members’ subscription to controlling subscribers’ packages and managing accounts.<br>Also it is easy to use.",
      skills: ["MySQL", "Web Development", "PHP", "API Integration", "Laravel", "Vue.js", "Database Architecture", "Apache", "HTTP", "Server"],
      images: ["assets/img/el7l3.png", "assets/img/el7l4.png", "assets/img/el7l6.png", "assets/img/el7l2.png"]
    },
    basmetamal: {
      name: "Basmet Amal Blog site",
      description: "Developing and designing a blog website using Laravel Framework<br>I designed the site from the ground up, including a control panel with multiple options to control all fields and options, from the interface to control members, subscribers, and posts.<br>Also it is easy to use.",
      skills: ["MySQL", "Web Development", "PHP", "API Integration", "Laravel", "Vue.js", "Database Architecture", "Apache", "HTTP", "Server"],
      images: ["assets/img/basmetamal2.png"]
    },
    elsaleh: {
      name: "El-Saleh",
      description: "Company introduction website.",
      skills: ["Web Development", "PHP"],
      images: ["assets/img/elsaleh2.png"]
    },
  };
  if (all_projects.hasOwnProperty(name)) {
    console.log(all_projects[name]['description'])
    // set name
    $('#project_name').html(all_projects[name]['name'])

    // set description
    $('#project_description').html(all_projects[name]['description'])

    // set skills
    $('#project_skills').html("");
    all_projects[name]['skills'].forEach(element => {
      $('#project_skills').append('<h2 class="badge rounded-pill text-bg-info m-1">' + element + '</h2>');
    });

    //set images
    $('#carousel-items').html("");
    all_projects[name]['images'].forEach(element => {
      $('#carousel-items').append('<div class="carousel-item"><img src="' + element + '" class="d-block w-100" alt="' + all_projects[name]['name'] + '"></div>')
    });
    $('#carousel-items').find('.carousel-item').first().addClass("active");

    const myCarouselElement = document.querySelector('#carouselExample')

    const carousel = new bootstrap.Carousel(myCarouselElement, {
      interval: 2500,
      touch: true
    })

    var myModal = new bootstrap.Modal(document.getElementById("exampleModalFullscreen"), {});
    myModal.show();
  }
}

// --- Image Zoom Overlay Implementation ---
$(function () {
  let zoomLevel = 1;
  const minZoom = 0.5;
  const maxZoom = 5;
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let translateX = 0;
  let translateY = 0;

  // Touch zoom state variables
  let touchStartDist = 0;
  let initialZoom = 1;

  const $zoomOverlay = $('#zoomOverlay');
  const $zoomedImage = $('#zoomedImage');

  // Event delegation to capture click on carousel images
  $(document).on('click', '#carousel-items img', function () {
    const src = $(this).attr('src');
    openZoomOverlay(src);
  });

  function openZoomOverlay(src) {
    $zoomedImage.attr('src', src);
    resetZoom();
    $zoomOverlay.fadeIn(200);

    // Pause the main Bootstrap carousel if active
    const carouselEl = document.querySelector('#carouselExample');
    if (carouselEl) {
      const carouselInstance = bootstrap.Carousel.getInstance(carouselEl);
      if (carouselInstance) {
        carouselInstance.pause();
      }
    }
  }

  function closeZoomOverlay() {
    $zoomOverlay.fadeOut(200, function () {
      $zoomedImage.attr('src', '');
    });
  }

  function resetZoom() {
    zoomLevel = 1;
    translateX = 0;
    translateY = 0;
    updateImageTransform();
  }

  function updateImageTransform() {
    $zoomedImage.css('transform', `translate(${translateX}px, ${translateY}px) scale(${zoomLevel})`);
    if (zoomLevel > 1) {
      $zoomedImage.addClass('zoomed');
    } else {
      $zoomedImage.removeClass('zoomed');
    }
  }

  function adjustZoom(amount, isRelative = true) {
    if (isRelative) {
      zoomLevel *= amount;
    } else {
      zoomLevel = amount;
    }
    // Constrain zoom level
    zoomLevel = Math.max(minZoom, Math.min(maxZoom, zoomLevel));

    // Reset translation if zoom is reset back to normal size
    if (zoomLevel <= 1) {
      translateX = 0;
      translateY = 0;
    }
    updateImageTransform();
  }

  // Zoom control buttons
  $('#zoomInBtn').on('click', function (e) {
    e.stopPropagation();
    adjustZoom(1.3);
  });

  $('#zoomOutBtn').on('click', function (e) {
    e.stopPropagation();
    adjustZoom(1 / 1.3);
  });

  $('#zoomResetBtn').on('click', function (e) {
    e.stopPropagation();
    resetZoom();
  });

  // Close when clicking close button, or background overlay (excluding toolbar and image)
  $('#zoomCloseBtn, #zoomOverlay').on('click', function (e) {
    if ($(e.target).closest('.zoom-controls-toolbar, #zoomedImage').length === 0) {
      closeZoomOverlay();
    }
  });

  // Double click toggles zoom
  $zoomedImage.on('dblclick', function (e) {
    e.stopPropagation();
    if (zoomLevel > 1) {
      resetZoom();
    } else {
      adjustZoom(2.5, false);
    }
  });

  // Scroll wheel to zoom
  $zoomedImage.on('wheel', function (e) {
    e.preventDefault();
    const delta = e.originalEvent.deltaY;
    if (delta < 0) {
      adjustZoom(1.15);
    } else {
      adjustZoom(1 / 1.15);
    }
  });

  // Mouse drag to pan
  $zoomedImage.on('mousedown', function (e) {
    if (zoomLevel <= 1) return;
    e.preventDefault();
    isDragging = true;
    startX = e.clientX - translateX;
    startY = e.clientY - translateY;
  });

  $(window).on('mousemove', function (e) {
    if (!isDragging) return;
    translateX = e.clientX - startX;
    translateY = e.clientY - startY;
    updateImageTransform();
  });

  $(window).on('mouseup', function () {
    isDragging = false;
  });

  // Touch controls for mobile (pan and pinch-to-zoom)
  $zoomedImage.on('touchstart', function (e) {
    const touches = e.touches || e.originalEvent.touches;
    if (touches.length === 1) {
      if (zoomLevel <= 1) return;
      isDragging = true;
      startX = touches[0].clientX - translateX;
      startY = touches[0].clientY - translateY;
    } else if (touches.length === 2) {
      isDragging = false;
      initialZoom = zoomLevel;
      touchStartDist = getTouchDist(touches);
    }
  });

  $zoomedImage.on('touchmove', function (e) {
    const touches = e.touches || e.originalEvent.touches;
    if (isDragging && touches.length === 1) {
      e.preventDefault();
      translateX = touches[0].clientX - startX;
      translateY = touches[0].clientY - startY;
      updateImageTransform();
    } else if (touches.length === 2) {
      e.preventDefault();
      const dist = getTouchDist(touches);
      if (dist > 0 && touchStartDist > 0) {
        const factor = dist / touchStartDist;
        zoomLevel = Math.max(minZoom, Math.min(maxZoom, initialZoom * factor));
        updateImageTransform();
      }
    }
  });

  $zoomedImage.on('touchend touchcancel', function () {
    isDragging = false;
    touchStartDist = 0;
  });

  function getTouchDist(touches) {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }

  // Keyboard Escape key handler to close the zoom view
  $(document).on('keydown', function (e) {
    if (e.key === 'Escape' || e.keyCode === 27) {
      if ($zoomOverlay.is(':visible')) {
        closeZoomOverlay();
      }
    }
  });
});