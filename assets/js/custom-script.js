var $ = jQuery.noConflict();

$(document).ready(function() {
    
	var header = $(".header-main");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 120 && $(this).width()) {
            header.addClass("fixed-top");
        } else {
            header.removeClass('fixed-top');
        }
    });	   

/* Navbar toggler */
const toggleBtn = document.querySelector(".navbar-toggler");
const navbarNav = document.querySelector(".navbar-nav");
const navCloseBtn = document.querySelector(".btn-nav-close");

toggleBtn.addEventListener("click", () => {
	navbarNav.classList.toggle("active");
});
navCloseBtn.addEventListener("click", () => {
	navbarNav.classList.remove("active");
});

/* Add icon on .nav-item if dropdown exists */
const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((item) => {
	const hasDropdowns = item.querySelector(".dropdown") !== null;
	if (hasDropdowns) {
		item.classList.add("icon");
	}
});
$('.sort-destination').isotope({
    itemSelector: '.isotope-item',
  });
  
  // filter items on button click
  $('.list-unstyled').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $('.sort-destination').isotope({ filter: filterValue });
    $('.list-unstyled li').removeClass('active');
    $(this).addClass('active');
  });

// animation
AOS.init({
    duration: 1200,
  })
});  