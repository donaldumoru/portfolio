export interface Profile {
  name: string;
  location: string;
}

export interface Links {
  github: string;
  linkedin: string;
}

export interface Content {
  profile: Profile;
  links: Links;
}

export interface ButtonProps {
  icon?: React.ReactNode;
  label: string;
  link: string;
}
