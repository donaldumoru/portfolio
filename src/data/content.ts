// import type { Content } from '../types.ts';
import type { UserData } from '../types';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';

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
    email: {
      link: 'mailto:donaldumoru@gmail.com',
      icon: IoMail,
    },
  },
};

export default data;
