import type { Greeting } from '../types';

export default function Greeting() {
  const time = new Date().getHours();
  const greeting: Greeting =
    time < 12 ? 'Good morning' : time < 18 ? 'Good afternoon' : 'Good evening';

  return <p>{greeting},</p>;
}
