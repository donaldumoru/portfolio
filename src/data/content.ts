// import type { Content } from '../types.ts';
import type { IconType } from 'react-icons';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

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

const data: UserData = {
  profile: {
    name: 'Donald Umoru',
    location: 'Eindhoven, The Netherlands',
  },

  links: {
    github: {
      link: 'https://github.com/donaldumoru',
      icon: FaGithub,
    },
    linkedin: {
      link: 'https://www.linkedin.com/in/donald-umoru/',
      icon: FaLinkedin,
    },
  },
};

export default data;
