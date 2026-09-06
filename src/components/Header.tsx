import { BsMoonStarsFill } from 'react-icons/bs';

export default function Header() {
  return (
    <header className="mb-2 md:mt-12 md:mb-6">
      <div className="flex justify-end">
        <BsMoonStarsFill className="cursor-pointer" size={20} />
      </div>
    </header>
  );
}
