document.addEventListener("DOMContentLoaded", function () {
  // Sticky navbar and scroll-up button
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const scrollUpBtn = document.querySelector(".scroll-up-btn");

    if (window.scrollY > 20) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }

    if (window.scrollY > 500) {
      scrollUpBtn.classList.add("show");
    } else {
      scrollUpBtn.classList.remove("show");
    }
  });

  // Scroll to top on scroll-up button click
  document.querySelector(".scroll-up-btn").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Smooth scroll on navbar item click
  document.querySelectorAll(".navbar .menu li a").forEach(link => {
    link.addEventListener("click", function () {
      document.documentElement.style.scrollBehavior = "smooth";
    });
  });

  // Toggle menu (mobile navbar)
  document.querySelector(".menu-btn").addEventListener("click", function () {
    document.querySelector(".navbar .menu").classList.toggle("active");
    document.querySelector(".menu-btn i").classList.toggle("active");
  });
});


var typed = new Typed(".typing", {
    strings: ["learning","writing career in brackets", "building the future", "making ideas click", "goal oriented"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
  
  var typed = new Typed(".typing-2", {
    strings: ["Full Stack Developer", "Tech Enthusiast", "Thinker", "Explorer", "Poet",],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
  