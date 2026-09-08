import { RoughNotation } from 'react-rough-notation';

export default function Title({ title }: { title: string }) {
  return (
    <h2 className="mb-4 inline-block font-(family-name:--text-titles) text-xl font-semibold text-(--light-bg)">
      <RoughNotation type="highlight" show={true} color="var(--accent)">
        {title}
      </RoughNotation>
    </h2>
  );
}
