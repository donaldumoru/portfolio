import type { Profile } from '../types';
import { BsMoonStarsFill } from 'react-icons/bs';

export default function Header({ profile }: { profile: Profile }) {
  const { name, location } = profile;
  return (
    <header className="mb-2 md:mt-12 md:mb-6">
      <div className="flex justify-end">
        <BsMoonStarsFill className="cursor-pointer" size={20} />
      </div>

      <ul className="mt-4 font-(family-name:--text-titles)">
        <li>
          <h1 className="text-2xl font-bold">{name}</h1>
        </li>
        <li className="text-lg font-medium">{location}</li>
      </ul>
    </header>
  );
}
