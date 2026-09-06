import type { IconType } from 'react-icons';

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

export type { Profile, UserData, ButtonProps };
