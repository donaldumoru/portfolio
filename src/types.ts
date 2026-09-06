import type { IconType } from 'react-icons';
import type { ElementType, ReactNode } from 'react';

type Greeting = 'Good morning' | 'Good afternoon' | 'Good evening';

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
    email: Link;
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

type Theme = 'light' | 'dark';

export type { Greeting, Profile, UserData, ButtonProps, ContainerProps, Theme };
