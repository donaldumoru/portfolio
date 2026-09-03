import type { ButtonProps } from '../types';

export default function Button({ icon, label, link }: ButtonProps) {
  return (
    <a
      href={link}
      target="_blank"
      className="flex w-fit items-center gap-1 capitalize underline"
    >
      {label}
      {icon}
    </a>
  );
}
