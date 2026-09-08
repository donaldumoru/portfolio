import { BsMoonStarsFill } from 'react-icons/bs';
import type { Theme } from '../types';
import { BsSun } from 'react-icons/bs';

export default function Header({
  onSetTheme,
  theme,
}: {
  onSetTheme: () => void;
  theme: Theme;
}) {
  return (
    <header className="mb-2 flex justify-end sm:mt-12 sm:mb-6">
      <button
        onClick={onSetTheme}
        type="button"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      >
        {theme === 'light' ? (
          <BsMoonStarsFill
            className="cursor-pointer fill-(--dark-bg)"
            size={25}
          />
        ) : (
          <BsSun className="cursor-pointer" size={25} />
        )}
      </button>
    </header>
  );
}
