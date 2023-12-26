let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active1", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active1";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
// button
window.onscroll = function () {
  showBackToTopButton();
};

function showBackToTopButton() {
  var button = document.getElementById("backToTopBtn");
  var header = document.querySelector(".top-page");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.classList.add("show");
  } else {
    button.classList.remove("show");
  }
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var searchIcon = document.querySelector(".open-search");
var searchInput = document.querySelector(".search-open");

var isOpen = false; // Flag to track the open/close state

searchIcon.addEventListener("click", () => {
  if (isOpen) {
    // Close the search input
    searchInput.style.width = "0";
    searchInput.style.display = "none";
    searchIcon.style.color = "#fff";
  } else {
    // Open the search input
    searchInput.style.width = "210px";
    searchInput.style.display = "flex";
    searchIcon.style.color = "#000";
  }

  isOpen = !isOpen; // Toggle the open/close state
});
// btn closs
document.addEventListener('DOMContentLoaded', function() {
  const navButton = document.getElementById('navButton');
  const stopButton = document.getElementById('stopButton');
  const navMenu = document.getElementById('navMenu');
  const menu_responsive = document.getElementById('menu_responsive');
  
  // Open navigation menu
  navButton.addEventListener('click', function() {
    navMenu.style.left = '0';
    menu_responsive.style.display = 'block';
    menu_responsive.style.left = '0';
    navMenu.classList.remove('closed');
    stopButton.style.display = 'block';
    navButton.style.display = 'none';
  });

  // Close navigation menu
  stopButton.addEventListener('click', function() {
    navMenu.style.left = '-100%';
    menu_responsive.style.display = 'none';
    navMenu.classList.add('closed');
    stopButton.style.display = 'none';
    navButton.style.display = 'block';
  });
  // Close navigation menu
  menu_responsive.addEventListener('click', function() {
    navMenu.style.left = '-100%';
    menu_responsive.style.display = 'none';
    navMenu.classList.add('closed');
    stopButton.style.display = 'none';
    navButton.style.display = 'block';
  });
  
})
 /* script menu responsive */
 toggleMenuResponsive();
 function toggleMenuResponsive() {
     $('body').on('click', '.menu-bar', function() {
         $('.menu-responsive').toggleClass('menu-active');
         $('.menu-responsive-cover').toggleClass('menu-active');
         $("body").css("overflow", "hidden");
     });
     $('body').on('click', '#btnClose', function() {
         $('.menu-responsive').toggleClass('menu-active');
         $('.menu-responsive-cover').toggleClass('menu-active');
         $("body").css("overflow", "auto");
     });
     $('body').on('click', '.menu-responsive-cover', function() {
         $('.menu-responsive').toggleClass('menu-active');
         $('.menu-responsive-cover').toggleClass('menu-active');
         $("body").css("overflow", "auto");
     });
    }
