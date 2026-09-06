// import type { Content } from '../types.ts';
import type { UserData } from '../types';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

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
