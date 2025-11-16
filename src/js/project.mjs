import paths from '/src/js/paths.mjs';
import { fetchData } from '/src/js/fetch.mjs';
import { fadeIn, scrollSectionsIntoView } from '/src/js/utils.mjs';
// import projectPath from '/src/js/project.mjs';
import { MAKE_RELEVANT_PROJECT_PAGE } from '/src/js/ui/displayProject.mjs';
import { MAKE_NAV_AND_FOOTER } from '/src/js//ui/landingPage.mjs';
import { INIT_INTERACTIONS } from '/src/js/script.mjs';

const getProjectPath = function () {
  let url = new URL(window.location);
  let params = new URLSearchParams(url.search).get('name');

  const projectId = params;
  const projectPath = paths.projects[projectId];

  return projectPath;
};

const projectPath = getProjectPath();

await MAKE_RELEVANT_PROJECT_PAGE(fetchData, projectPath);
await MAKE_NAV_AND_FOOTER(fetchData, paths.general.home);

const projectSection = document.querySelector('.project-container');

fadeIn(projectSection);

INIT_INTERACTIONS();

scrollSectionsIntoView();

///////// PROGRESS CIRCLE
const susColors = [
  { max: 50, color: 'var(--color-red-highlight)' },
  { max: 70, color: 'var(--color-yellow-highlight)' },
  { max: 100, color: 'var(--color-titles-dark)' },
];

const decideColor = function (arr, num) {
  return susColors.find(item => num <= item.max).color;
};

let circularBars = document.querySelectorAll('.circular-bar');

// let PercentValue = document.querySelector('.score');

let InitialValue = 0;
let finaleValue = 20.83;
let speed = 50;

const susOptions = {
  root: null,
  threshold: 1,
};

const susObserverCallback = entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    }

    const circularBar = entry.target;
    let percentValue = circularBar.firstElementChild;

    let susScore = +circularBar.dataset.susScore;

    let timer = setInterval(() => {
      InitialValue += 1;

      const progressColor = decideColor(susColors, InitialValue);

      circularBar.style.background = `conic-gradient(${progressColor} ${
        (InitialValue / 100) * 360
      }deg, var(--text-color-grey-title) 0deg)`;

      percentValue.textContent =
        InitialValue < susScore ? InitialValue : susScore;

      if (InitialValue >= susScore) {
        clearInterval(timer);
      }
    }, speed);

    susObserver.unobserve(circularBar);
  });
};

const susObserver = new IntersectionObserver(susObserverCallback, susOptions);
circularBars.forEach(bar => susObserver.observe(bar));

///// IMAGE SLIDER
const allNextEl = document.querySelectorAll('.next');
const allPrevEl = document.querySelectorAll('.prev');
const allImageContainers = document.querySelectorAll('.image-container');

allImageContainers.forEach(
  container => (container.style.transform = 'translateX(0%)')
);

const updateImg = function (container, images, current) {
  if (current > images.length) {
    current = 1;
  } else if (current < 1) {
    current = images.length;
  }

  container.style.transform = `translateX(-${(current - 1) * 100}%)`;
};

const slideImage = function (e, btn) {
  const imageContainerEl =
    e.target.parentElement.querySelector('.image-container');
  const imgsEl = imageContainerEl.querySelectorAll('img');

  let currentIndex =
    Math.abs(
      +imageContainerEl.style.transform.match(/\(([^)]+)\)/)[1].split('%')[0]
    ) /
      100 +
    1;

  return function () {
    if (btn === 'previous') {
      currentIndex--;
    } else {
      currentIndex++;
    }
    updateImg(imageContainerEl, imgsEl, currentIndex);
  };
};

allNextEl.forEach(nextEl =>
  nextEl.addEventListener('click', e => {
    const slider = slideImage(e, 'next');
    slider();
  })
);

allPrevEl.forEach(prevEl =>
  prevEl.addEventListener('click', e => {
    const slider = slideImage(e, 'previous');
    slider();
  })
);

const sectionsToObserve = document.querySelectorAll('.project-section');
const header = document.querySelector('header');
const headerHeight = header.getBoundingClientRect().height;

console.log(headerHeight);

const options = {
  root: null,
  threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 1],
};

// console.log(sectionsToObserve);

const observerCallback = entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      // console.log(entry);
      return;
    }

    if (
      entry.isIntersecting &&
      entry.target.id === 'overview' &&
      entry.intersectionRatio > 0.5
    ) {
      const allTimelineNavLinks =
        document.querySelectorAll('.timeline-nav-link');

      const arrayOfLinks = [...allTimelineNavLinks];
      arrayOfLinks.forEach(link => link.classList.remove('current-link'));
      allTimelineNavLinks[0].classList.add('current-link');
    }

    if (entry.boundingClientRect.top < 0 && entry.intersectionRatio < 0.4) {
      if (entry.target.id === 'improvements') {
        observer.unobserve(entry.target);
        return;
      }

      const sections = [...sectionsToObserve];

      const indexOfCurrentSection = sections.findIndex(
        section => entry.target.id === section.id
      );

      const indexOfNextSection = indexOfCurrentSection + 1;

      const sectionToUpdate = sections[indexOfNextSection];

      const allTimelineNavLinks =
        document.querySelectorAll('.timeline-nav-link');

      const arrayOfLinks = [...allTimelineNavLinks];

      const linkToUpdate = arrayOfLinks.find(
        link => link.textContent === sectionToUpdate.id
      );

      arrayOfLinks.forEach(link => link.classList.remove('current-link'));

      linkToUpdate.classList.add('current-link');
    }
  });
};

const observer = new IntersectionObserver(observerCallback, options);

sectionsToObserve.forEach(section => observer.observe(section));
