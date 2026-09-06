import { useContext } from 'react';

import { BsMoonStarsFill } from 'react-icons/bs';
import { BsSun } from 'react-icons/bs';
import ThemeContext from '../ThemeContext';

export default function Header({ onSetTheme }: { onSetTheme: () => void }) {
  const currentTheme = useContext(ThemeContext);

  return (
    <header className="mb-2 md:mt-12 md:mb-6">
      <div className="flex justify-end" onClick={onSetTheme}>
        {currentTheme === 'light' ? (
          <BsMoonStarsFill className="cursor-pointer" size={25} />
        ) : (
          <BsSun className="cursor-pointer" size={25} />
        )}
      </div>
    </header>
  );
}
