const projectsContainer = document.querySelector('.projects');
const introText = document.querySelector('.intro-text');
const darkModeImg = document.querySelector('.dark-mode-img');

const colors = ['#0a0a0a', '#e4e2dd'];

const options = {
  root: null,
  threshold: 0.2,
};

const obsCallBack = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    if (!entry.isIntersecting) return;

    projectsContainer.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest',
    });
    // liArrow.classList.remove("hide");
  } else {
    // liArrow.classList.add("hide");
  }
};

const observer = new IntersectionObserver(obsCallBack, options);
observer.observe(projectsContainer);

const vara = new Vara(
  '.test-vara',
  'https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json',
  [
    {
      text: "hey there, I'm Donald.",
      color: '#e4e2dd',
      textAlign: 'center',
      duration: 4000,
      strokeWidth: 1,
    },
  ],
  {
    fontSize: 60,
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

    darkModeImg.src = 'assets/images/icons/dark.svg';

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

    darkModeImg.src = 'assets/images/icons/light.svg';

    const root = document.documentElement;
    root.style.setProperty('--vara-stroke', colors[1]);

    isDark = true;
  }
});
