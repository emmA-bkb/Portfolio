export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8 px-8 text-center">
      <p className="text-gray-400 text-sm">
        © {currentYear} emmA. All rights reserved.
      </p>
      <p className="text-gray-500 text-xs mt-2">
        Built with Next.js, TypeScript &amp; Tailwind CSS
      </p>
    </footer>
  );
}
