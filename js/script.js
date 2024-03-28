document.addEventListener('DOMContentLoaded', function () {
  const toTopButton = document.querySelector('#toTopBtn');
  const menuLinks = document.querySelectorAll('.sidenav a');
  const body = document.body;
  const nav = document.querySelector('nav');
  const header = document.querySelector('header');
const toggleSwitch = document.querySelector('#toggleSwitch');

  // Function to add the 'scrolled' class when scrolling down
  function handleNavbarResize() {
    if (window.pageYOffset > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

    // Function to scroll to the top of the page
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Smooth scroll to top button
  toTopButton.addEventListener('click', function () {
    scrollToTop();
  });


  // Smooth scroll for menu links
  menuLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      const target = document.querySelector(`[href="${link.getAttribute('href')}"]`);
      const targetOffset = target.offsetTop;

      // Check if the link is for an anchor on the current page
      if (window.location.pathname === link.getAttribute('href')) {
        e.preventDefault(); // Prevent default behavior for smooth scrolling within the page
        scrollToTarget(targetOffset);
        if (window.innerWidth < 768) {
          toggleSwitch.checked = false;
          nav.classList.remove('open');
        }
      }
    });
  });

// Smooth scroll for menu links
menuLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    const hrefValue = link.getAttribute('href');

    // Check if the link is not an anchor on the current page and is not "javascript:void(0)"
    if (hrefValue && hrefValue.startsWith('#')) {
      const target = document.querySelector(hrefValue);

      // Check if the target element exists
      if (target) {
        e.preventDefault(); // Prevent default behavior for smooth scrolling within the page
        const targetOffset = target.offsetTop;
        scrollToTarget(targetOffset);

        if (window.innerWidth < 768) {
          toggleSwitch.checked = false;
          nav.classList.remove('open');
        }
      }
    }
  });
});



// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Event listener for scrolling
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 200) {
    toTopButton.style.display = 'block';
  } else {
    toTopButton.style.display = 'none';
  }
  handleNavbarResize(); // Call the function to handle navbar resizing
});

  // Function to scroll to a specific target
  function scrollToTarget(offset) {
    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
  }

  // Function to close the menu on window resize for mobile and tablet viewports
function closeMenuOnResize() {
  if (window.innerWidth < 768) {
    if (toggleSwitch) {
      toggleSwitch.checked = false;
    }
    if (nav) {
      nav.classList.remove('open');
    }
  } else {
    if (nav) {
      nav.classList.add('open');
    }
  }
}


  // Event listener for scrolling
  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 200) {
      toTopButton.style.display = 'block';
    } else {
      toTopButton.style.display = 'none';
    }
    handleNavbarResize(); // Call the function to handle navbar resizing
  });

  // Event listener for window resize
  window.addEventListener('resize', closeMenuOnResize);
  window.addEventListener('DOMContentLoaded', closeMenuOnResize);

  // Initial menu state on page load
  closeMenuOnResize();
  handleNavbarResize(); // Call the function to handle navbar resizing initially
});

//for logo
window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  var defaultLogo = document.getElementById("default-logo");
  var scrolledLogo = document.getElementById("scrolled-logo");

  if (window.scrollY > 100) {
    // If the user has scrolled down more than 100 pixels, show the scrolled logo.
    defaultLogo.classList.add("hidden");
    scrolledLogo.classList.remove("hidden");
  } else {
    // Otherwise, show the default logo.
    defaultLogo.classList.remove("hidden");
    scrolledLogo.classList.add("hidden");
  }
});

// for nav 
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";

  document.body.style.backgroundColor = "rgba(5, 5, 5, 51)"; //overlay color
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "var(--primary-color)"; //bgcolor change
}