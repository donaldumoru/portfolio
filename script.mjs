const INIT_INTERACTIONS = function () {
  const mainContainer = document.querySelector('main');
  const introText = document.querySelector('.intro-text');
  const darkModeImg = document.querySelector('.dark-mode-img');
  const landingPage = document.querySelector('.landing-page');
  const projectsLink = document.querySelector('.projects-link');
  const projectsContainer = document.querySelector('.projects');
  const aboutLink = document.querySelector('.about-link');
  const aboutContainer = document.querySelector('.about');
  const nav = document.querySelector('nav');

  const body = document.querySelector('body');
  const elementsToBlur = document.querySelectorAll('[data-blur-on-scroll]');

  // console.log(body);

  // console.log(nav.getBoundingClientRect());

  const colors = ['#0a0a0a', '#e4e2dd'];

  // const obsOptions = {
  //   root: null,
  //   threshold: 0.1,
  // };

  // projectsLink.firstElementChild.classList.remove('animate-icon');

  /**************************** MERGE BOTH OBSERVERS INTO ONE************************************************ */
  // const obsCallBack = function (entries) {
  //   const [entry] = entries;
  //   if (entry.isIntersecting) {
  //     if (!entry.isIntersecting) return;

  //     // if (w < 600) {
  //     //   projectsContainer.scrollIntoView({
  //     //     behavior: 'smooth',
  //     //     block: 'center',
  //     //   });
  //     // }

  //     // console.log('project', entry);

  //     projectsLink.firstElementChild.classList.add('animate-icon');
  //   } else {
  //     projectsLink.firstElementChild.classList.remove('animate-icon');
  //   }
  // };

  // const observer = new IntersectionObserver(obsCallBack, obsOptions);
  // observer.observe(mainContainer);

  /**************************************************************************** */

  // let isDark = true;

  // darkModeImg.addEventListener('click', function () {
  //   if (isDark) {
  //     document
  //       .querySelector(':root')
  //       .style.setProperty(`--text-color`, colors[0]);
  //     document
  //       .querySelector(':root')
  //       .style.setProperty(`--background-color`, colors[1]);

  //     darkModeImg.src = 'assets/icons/dark.svg';

  //     const root = document.documentElement;
  //     root.style.setProperty('--vara-stroke', colors[0]);

  //     isDark = false;
  //   } else {
  //     document
  //       .querySelector(':root')
  //       .style.setProperty(`--text-color`, colors[1]);
  //     document
  //       .querySelector(':root')
  //       .style.setProperty(`--background-color`, colors[0]);

  //     darkModeImg.src = 'assets/icons/light.svg';

  //     const root = document.documentElement;
  //     root.style.setProperty('--vara-stroke', colors[1]);

  //     isDark = true;
  //   }
  // });

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

  /*******************MERGE BOTH LISTENERS AS ONE********************************/
  // projectsLink.addEventListener('click', function (e) {
  //   e.preventDefault();
  //   projectsContainer.scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'start',
  //     inline: 'nearest',
  //   });
  // });

  // aboutLink.addEventListener('click', function (e) {
  //   e.preventDefault();
  //   aboutContainer.scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'start',
  //     inline: 'nearest',
  //   });
  // });
};

export { INIT_INTERACTIONS };
