export default function Footer({ className }: { className: string }) {
  const year = new Date().getFullYear();

  return (
    <footer
      className={`mt-10 mb-2 flex items-end justify-between md:mt-12 ${className}`}
    >
      <p>&copy; {year}</p>
    </footer>
  );
}
