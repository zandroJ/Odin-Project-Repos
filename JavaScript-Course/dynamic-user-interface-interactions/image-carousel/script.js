    function setupCarousel() {
      const carousel = document.querySelector('.carousel');
      const track = carousel.querySelector('.carousel-track');
      const slides = Array.from(track.children);
      const nextBtn = carousel.querySelector('.next');
      const prevBtn = carousel.querySelector('.prev');
      const dotsContainer = carousel.querySelector('.carousel-dots');
      let currentIndex = 0;
      let intervalId;

      // Create dots
      slides.forEach((_, i) => {
        const dot = document.createElement('button');
        if (i === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);
        dot.addEventListener('click', () => goToSlide(i));
      });

      const dots = dotsContainer.querySelectorAll('button');

      function updateSlide() {
        track.style.transform = `translateX(-${currentIndex * 600}px)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
      }

      function goToSlide(index) {
        currentIndex = index;
        updateSlide();
        resetAutoPlay();
      }

      function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlide();
      }

      function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlide();
      }

      function startAutoPlay() {
        intervalId = setInterval(nextSlide, 5000);
      }

      function resetAutoPlay() {
        clearInterval(intervalId);
        startAutoPlay();
      }

      nextBtn.addEventListener('click', () => { nextSlide(); resetAutoPlay(); });
      prevBtn.addEventListener('click', () => { prevSlide(); resetAutoPlay(); });

      updateSlide();
      startAutoPlay();
    }

    setupCarousel();
