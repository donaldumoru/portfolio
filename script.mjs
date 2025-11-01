const INIT_INTERACTIONS = function () {
  const elementsToBlur = document.querySelectorAll('[data-blur-on-scroll]');

  const options = {
    root: null,
    threshold: 0.4,
    rootMargin: '-8% 0px -2% 0px',
  };

  const intersectionCallback = entries => {
    entries.forEach(entry => {
      const el = entry.target;
      if (entry.isIntersecting) {
        el.classList.remove('blurred');
      } else {
        el.classList.add('blurred');
      }
    });
  };

  const observer = new IntersectionObserver(intersectionCallback, options);

  elementsToBlur.forEach(el => {
    el.classList.add('transition');
    observer.observe(el);
  });

  const bar = document.querySelector('.progress-bar-container');
  const projectContainer = document.querySelector('.project-container');

  const containerHeight = projectContainer.getBoundingClientRect().height;

  console.log(projectContainer.getBoundingClientRect());
  console.log(projectContainer.offsetHeight);

  window.addEventListener('scroll', () => console.log(window.scrollY));

  const makeProgressBar = function () {
    window.addEventListener('scroll', function () {
      const currentScrollHeight = window.scrollY;

      const widthPercentage = (currentScrollHeight / containerHeight) * 100;

      bar.style.width = `${widthPercentage}%`;
    });
  };

  makeProgressBar();
};

export { INIT_INTERACTIONS };
