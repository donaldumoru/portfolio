import { useState } from 'react';
import type { ButtonProps } from '../types';
import { RoughNotation } from 'react-rough-notation';

export default function Button({ icon, label, link }: ButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={link}
      target="_blank"
      className="group w-fit items-center gap-1 capitalize underline transition-colors duration-300 hover:text-(--light-hover) dark:hover:text-(--dark-hover) [&>span]:flex [&>span]:items-center [&>span]:gap-2"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      rel="noopener noreferrer"
    >
      <RoughNotation
        type="circle"
        show={hovered}
        color="var(--accent)"
        strokeWidth={1.5}
        padding={10}
      >
        {label}
        {icon}
      </RoughNotation>
    </a>
  );
}
