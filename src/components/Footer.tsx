import { RoughNotation } from 'react-rough-notation';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10 mb-2 flex items-end justify-between md:mt-12">
      <p>&copy; {year}</p>
    </footer>
  );
}
