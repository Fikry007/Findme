// Vanilla JS Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// SCROLL TO TOP
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Versi Vanilla JS
mybutton.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
})

// Typed JS
var typed = new Typed('#typed', {
  strings: ['Fikry Hasan', 'UI/UX Designer', 'Web Designer'],
  typeSpeed: 80,
  delaySpeed: 90,
  loop: true
});
