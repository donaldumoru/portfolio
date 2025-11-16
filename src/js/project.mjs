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

let CircularBar = document.querySelector('.circular-bar');
let PercentValue = document.querySelector('.score');

let InitialValue = 0;
let finaleValue = 20.83;
let speed = 50;

let timer = setInterval(() => {
  InitialValue += 1;

  const progressColor = decideColor(susColors, InitialValue);

  CircularBar.style.background = `conic-gradient(${progressColor} ${
    (InitialValue / 100) * 360
  }deg, var(--text-color-grey-title) 0deg)`;

  PercentValue.textContent =
    InitialValue < finaleValue ? InitialValue : finaleValue;

  if (InitialValue >= finaleValue) {
    clearInterval(timer);
  }
}, speed);

///// IMAGE SLIDER
const allNextEl = document.querySelectorAll('.next');
const allPrevEl = document.querySelectorAll('.prev');
const allImageContainers = document.querySelectorAll('.image-container');
allImageContainers.forEach(
  container => (container.style.transform = 'translateX(0%)')
);

function updateImg(container, images, current) {
  if (current > images.length) {
    current = 1;
  } else if (current < 1) {
    current = images.length;
  }

  container.style.transform = `translateX(-${(current - 1) * 100}%)`;
}

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
// export default getProjectPath();
