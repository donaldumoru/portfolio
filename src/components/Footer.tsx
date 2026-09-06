export default function Footer() {
  const year: number = new Date().getFullYear();

  return (
    <footer className="mt-10 mb-2 flex items-end justify-between md:mt-12">
      <p className="">&copy; {year}</p>
    </footer>
  );
}
