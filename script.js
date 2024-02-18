document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('.randomLink');

  links.forEach(link => {
      // Random Positions for Links
      const randomTop = Math.random() * (window.innerHeight - 30); // 减去20以确保链接完全在视窗内
      const randomLeft = Math.random() * (window.innerWidth - 140); // 减去100以确保链接完全在视窗内

      link.style.top = `${randomTop}px`;
      link.style.left = `${randomLeft}px`;
  });
});


document.getElementById('invertColorsButton1').addEventListener('click', function() {
  document.body.classList.toggle('inverted');
  this.classList.toggle('invertedButton1'); // Toggle the button's style too
});

document.getElementById('invertColorsButton2').addEventListener('click', function() {
  document.body.classList.toggle('inverted2');
  this.classList.toggle('invertedButton2'); // Toggle the button's style too
});


// Reload the page every 5 seconds
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
      window.location.reload();
  }, 5000);
});

