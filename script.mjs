const mainContainer = document.querySelector('main');
const introText = document.querySelector('.intro-text');
const darkModeImg = document.querySelector('.dark-mode-img');
const landingPage = document.querySelector('.landing-page');
const projectsLink = document.querySelector('.projects-link');
const projectsContainer = document.querySelector('.projects');
const aboutLink = document.querySelector('.about-link');
const aboutContainer = document.querySelector('.about');

const colors = ['#0a0a0a', '#e4e2dd'];

let fontSize = 64;

const w = window.innerWidth;
if (w < 600) fontSize = 28;
else if (w < 900) fontSize = 32;
else if (w < 1200) fontSize = 40;
else if (w < 2000) fontSize = 48;

const obsOptions = {
  root: null,
  threshold: 0.1,
};

// projectsLink.firstElementChild.classList.remove('animate-icon');

/**************************** MERGE BOTH OBSERVERS INTO ONE************************************************ */
const obsCallBack = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    if (!entry.isIntersecting) return;

    if (w < 600) {
      projectsContainer.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }

    // console.log('project', entry);

    projectsLink.firstElementChild.classList.add('animate-icon');
  } else {
    projectsLink.firstElementChild.classList.remove('animate-icon');
  }
};

const observer = new IntersectionObserver(obsCallBack, obsOptions);
observer.observe(mainContainer);

/**************************************************************************** */

const vara = new Vara(
  '.test-vara',
  'https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json',
  [
    {
      text: "hi there, I'm Donald.",
      color: '#e4e2dd',
      textAlign: 'center',
      duration: 4000,
      strokeWidth: 1,
    },
  ],
  {
    fontSize: fontSize,
  }
);

vara.ready(function () {
  vara.animationEnd(function (i, o) {
    introText.style.opacity = 1;
  });
});

let isDark = true;

darkModeImg.addEventListener('click', function () {
  if (isDark) {
    document
      .querySelector(':root')
      .style.setProperty(`--text-color`, colors[0]);
    document
      .querySelector(':root')
      .style.setProperty(`--background-color`, colors[1]);

    darkModeImg.src = 'assets/icons/dark.svg';

    const root = document.documentElement;
    root.style.setProperty('--vara-stroke', colors[0]);

    isDark = false;
  } else {
    document
      .querySelector(':root')
      .style.setProperty(`--text-color`, colors[1]);
    document
      .querySelector(':root')
      .style.setProperty(`--background-color`, colors[0]);

    darkModeImg.src = 'assets/icons/light.svg';

    const root = document.documentElement;
    root.style.setProperty('--vara-stroke', colors[1]);

    isDark = true;
  }
});

/*******************MERGE BOTH LISTENERS AS ONE********************************/
projectsLink.addEventListener('click', function (e) {
  e.preventDefault();
  projectsContainer.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'nearest',
  });
});

aboutLink.addEventListener('click', function (e) {
  e.preventDefault();
  aboutContainer.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'nearest',
  });
});

/// ABOUT ME VARA
const aboutVara = new Vara(
  '.about-img-wrapper',
  'https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json',
  [
    {
      text: 'dah dah dah dah dah dah dah dah dah dah',
      color: '#0a0a0a',
      textAlign: 'left',
      duration: 4000,
      strokeWidth: 1,
    },
  ],
  {
    fontSize: 60,
  }
);

aboutVara.ready(function () {
  aboutVara.animationEnd(function (i, o) {
    introText.style.opacity = 1;
  });
});
