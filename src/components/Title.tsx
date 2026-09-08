import { RoughNotation } from 'react-rough-notation';

export default function Title({ title }: { title: string }) {
  return (
    <RoughNotation
      type="underline"
      show={true}
      color="var(--accent)"
      strokeWidth={1.5}
    >
      <h2 className="mb-4 inline-block font-(family-name:--text-titles) text-xl font-semibold text-(--dark-bg) dark:text-(--light-bg)">
        {title}
      </h2>
    </RoughNotation>
  );
}
