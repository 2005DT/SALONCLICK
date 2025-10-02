document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const radios = document.querySelectorAll('input[name="radio-btn"]');
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let counter = 0;
  let autoSlide;

  // Mostrar slide según índice
  function showSlide(index) {
    // marcar el radio correspondiente
    radios[index].checked = true;

    // mostrar solo la slide activa
    slides.forEach((slide, i) => {
      slide.style.opacity = i === index ? "1" : "0";
      slide.style.zIndex = i === index ? "2" : "1";
    });

    counter = index;
  }

  // Automático
  function startAutoSlide() {
    stopAutoSlide();
    autoSlide = setInterval(() => {
      counter = (counter + 1) % slides.length;
      showSlide(counter);
    }, 3000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlide);
  }

  // Radios manuales
  radios.forEach((radio, index) => {
    radio.addEventListener("change", () => {
      showSlide(index);
      stopAutoSlide();
      setTimeout(startAutoSlide, 5000); // reinicia después de 5s
    });
  });

  // Botones prev/next
  prevBtn.addEventListener("click", () => {
    counter = (counter - 1 + slides.length) % slides.length;
    showSlide(counter);
    stopAutoSlide();
    setTimeout(startAutoSlide, 5000);
  });

  nextBtn.addEventListener("click", () => {
    counter = (counter + 1) % slides.length;
    showSlide(counter);
    stopAutoSlide();
    setTimeout(startAutoSlide, 5000);
  });

  // Mostrar la primera slide y arrancar automático
  showSlide(counter);
  startAutoSlide();
});
