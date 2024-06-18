document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.image-container img');
    let index = 0;
  
    setInterval(() => {
      images.forEach(img => img.classList.remove('active'));
      images[index].classList.add('active');
      index = (index + 1) % images.length;
    }, 3000); // Adjust timing as needed (in milliseconds)
  });
  