import type { ContainerProps } from '../types';

export default function Container({
  Tag,
  children,
  className,
}: ContainerProps) {
  return <Tag className={className}>{children}</Tag>;
}
