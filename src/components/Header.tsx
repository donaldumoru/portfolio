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
    <header className="mb-2 md:mt-12 md:mb-6">
      <div className="flex justify-end" onClick={onSetTheme}>
        {theme === 'light' ? (
          <BsMoonStarsFill
            className="cursor-pointer fill-(--dark-bg)"
            size={25}
          />
        ) : (
          <BsSun className="cursor-pointer" size={25} />
        )}
      </div>
    </header>
  );
}
