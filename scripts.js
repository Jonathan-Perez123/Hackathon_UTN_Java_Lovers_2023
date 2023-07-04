document.getElementById('contact').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Gracias por contactarnos. Pronto nos pondremos en contacto contigo.');
  });
 
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });


