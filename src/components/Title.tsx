import { RoughNotation } from 'react-rough-notation';

export default function Title({ title }: { title: string }) {
  return (
    <RoughNotation type="highlight" show={true} color="var(--accent)">
      <h2 className="mb-2 inline-block font-(family-name:--text-titles) text-xl font-semibold text-(--light-bg)">
        {title}
      </h2>
    </RoughNotation>
  );
}
