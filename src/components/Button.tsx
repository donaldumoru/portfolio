import { useState } from 'react';
import type { ButtonProps } from '../types';
import { RoughNotation } from 'react-rough-notation';

export default function Button({ icon, label, link }: ButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <RoughNotation
      type="circle"
      show={hovered}
      color="var(--accent)"
      strokeWidth={1.5}
      padding={10}
    >
      <a
        href={link}
        target="_blank"
        className="flex w-fit items-center gap-1 capitalize transition-colors duration-300 hover:text-(--light-hover) dark:hover:text-(--dark-hover)"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {label}
        {icon}
      </a>
    </RoughNotation>
  );
}
