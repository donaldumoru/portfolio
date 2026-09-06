import type { IconType } from 'react-icons';
import type { ElementType, ReactNode } from 'react';

interface Profile {
  name: string;
  location: string;
}

interface Link {
  link: string;
  icon: IconType;
}

interface UserData {
  profile: Profile;
  links: {
    github: Link;
    linkedin: Link;
  };
}

interface ButtonProps {
  icon?: React.ReactNode;
  label: string;
  link: string;
}

interface ContainerProps {
  Tag: ElementType;
  children: ReactNode;
  className?: string;
}

type ThemeContextType = 'light' | 'dark';

export type {
  Profile,
  UserData,
  ButtonProps,
  ContainerProps,
  ThemeContextType,
};
