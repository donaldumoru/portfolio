import type { Profile } from '../types';

export default function Signature({
  profile,
  className,
}: {
  profile: Profile;
  className: string;
}) {
  const { name, location } = profile;

  return (
    <div className={`mt-8 font-(family-name:--text-titles) ${className}`}>
      <p className="text-xl font-bold">{name}</p>
      <address className="text-lg font-medium">{location}</address>
    </div>
  );
}
