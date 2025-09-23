 const toggleBtn = document.querySelector('.menu-toggle');
    const menuWrapper = document.querySelector('.navbar-list-wrapper');

    toggleBtn.addEventListener('click', () => {
      menuWrapper.classList.toggle('active');
    });
// Function to check if element is visible in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom >= 0;
}

const container = document.querySelector('.animate');

function applySwipeEffect() {
  if (!container) return;
  if (isInViewport(container)) {
    const menuItems = container.querySelectorAll('.menu-item');
    menuItems.forEach((item, index) => {
      const itemWidth = item.offsetWidth;
      const offset = itemWidth + 20;

      if ((index + 1) % 2 === 1) {
        item.style.transform = `translateX(${offset}px)`;
      } else {
        item.style.transform = `translateX(-${offset}px)`;
      }
    });
    // Remove listener after triggering once (optional)
    window.removeEventListener('scroll', applySwipeEffect);
  }
}

// Initial check and listen to scroll event
window.addEventListener('scroll', applySwipeEffect);
applySwipeEffect(); // Also call once on load


const RevealFromTop = {
  distance: "50px",
  origin: "top",
  duration: 500,
};
ScrollReveal().reveal(".gift", {
  ...RevealFromTop,
  delay:600,
});
const RevealFromBottom = {
  distance: "50px",
  origin: "bottom",
  duration: 600,
};
ScrollReveal().reveal(".barbiles-section", {
  ...RevealFromBottom,
  delay:600,
});
const RevealFromRight = {
  distance: "50px",
  origin: "right",
  duration: 500,
};
ScrollReveal().reveal(".promise", {
  ...RevealFromRight,
  delay:1000,
});
