import type { Profile } from '../types';

export default function Signature({ profile }: { profile: Profile }) {
  const { name, location } = profile;

  return (
    <div className="mt-8 font-(family-name:--text-titles)">
      <p className="text-xl font-bold">{name}</p>
      <address className="text-lg font-medium">{location}</address>
    </div>
  );
}
