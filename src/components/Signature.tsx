import type { Profile } from '../types';

export default function Signature({ profile }: { profile: Profile }) {
  const { name, location } = profile;

  return (
    <ul className="mt-8 font-(family-name:--text-titles)">
      <li>
        <h1 className="text-xl font-bold">{name}</h1>
      </li>
      <li className="text-lg font-medium">{location}</li>
    </ul>
  );
}
