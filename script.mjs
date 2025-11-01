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
};

export { INIT_INTERACTIONS };
