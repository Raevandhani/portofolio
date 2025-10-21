const text = document.getElementById('bobbing-text');
    let start = null;

    function bob(timestamp) {
      if (!start) start = timestamp;
      const progress = (timestamp - start) / 1000; // seconds
      const y = Math.sin(progress * 2 * Math.PI) * 3; // amplitude 10px
      text.style.transform = `translateY(${y}px)`;
      requestAnimationFrame(bob);
    }

    requestAnimationFrame(bob);

    // smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });

    // image animation
    const img = document.getElementById('animatedImage');

    let startTime = null;
    const duration = 10000;

    function animate(timestamp) {
      if (!startTime) startTime = timestamp;

      const elapsed = timestamp - startTime;
      const progress = (elapsed % duration) / duration;

      const position = (Math.sin(progress * 2 * Math.PI) + 1) / 2 * 100;
    
      img.style.objectPosition = `${position}% center`;
    
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);

    // back to top
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.remove('opacity-0', 'invisible');
        backToTopButton.classList.add('opacity-100', 'visible');
      } else {
        backToTopButton.classList.add('opacity-0', 'invisible');
        backToTopButton.classList.remove('opacity-100', 'visible');
      }
    });
    
    backToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // nav color when scroll
    window.addEventListener('scroll', () => {
      let current = '';
      const sections = document.querySelectorAll('section');
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 100)) {
          current = section.getAttribute('id');
        }
      });
      
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('text-indigo-400', 'dark:text-indigo-300');
        if (link.getAttribute('href').slice(1) === current) {
          link.classList.add('text-indigo-400', 'dark:text-indigo-300');
        }
      });
    });

    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('nav');
      if (window.scrollY > 10) {
        navbar.classList.add('shadow-md');
      } else {
        navbar.classList.remove('shadow-md');
      }
    });