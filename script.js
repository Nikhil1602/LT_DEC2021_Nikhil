// --------------------------------------------------------------------------------------------------
// -> Opening and Closing of drawer in small screens
// --------------------------------------------------------------------------------------------------

const openNav = () => {
  document.getElementById("sidenav").style.width = "200px";
};

const closeNav = () => {
  document.getElementById("sidenav").style.width = "0";
};

// --------------------------------------------------------------------------------------------------
// -> Incrementing the counter when reach to the achievements section
// --------------------------------------------------------------------------------------------------

const counters = document.querySelectorAll(".counter");
const speed = 200;

const scrollEvent = () => {
  if (window.scrollY >= 1700) {
    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 1);
        } else {
          count.innerText = target;
        }
      };
      updateCount();
    });
  }
};

// --------------------------------------------------------------------------------------------------
// -> Sliding the card in testimonials section by pressing circular-buttons
// --------------------------------------------------------------------------------------------------

const wrapper = document.querySelector(".testimonial-wrapper");
const indicators = [...document.querySelectorAll(".indicators button")];

let currentTestimonial = 0;

indicators.forEach((item, i) => {
  item.addEventListener("click", () => {
    indicators[currentTestimonial].classList.remove("active-btn");
    wrapper.style.marginLeft = `-${100 * i}%`;
    item.classList.add("active-btn");
    currentTestimonial = i;
  });
});
