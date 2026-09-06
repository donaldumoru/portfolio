import type { Theme } from './types';

const getTheme = function (): Theme {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

const setSingleClass = function (
  element: HTMLElement,
  className: string,
  classesToRemove: string[],
): void {
  element.classList.remove(...classesToRemove);
  element.classList.add(className);
};

export { getTheme, setSingleClass };
