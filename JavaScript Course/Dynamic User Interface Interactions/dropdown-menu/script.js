
    function setupDropdowns() {
      const dropdowns = document.querySelectorAll('.dropdown');

      dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('button');
        const menu = dropdown.querySelector('.dropdown-menu');

        button.addEventListener('click', () => {
          menu.classList.toggle('visible');
        });

        // Close if click outside
        document.addEventListener('click', (e) => {
          if (!dropdown.contains(e.target)) {
            menu.classList.remove('visible');
          }
        });
      });
    }

    setupDropdowns();
