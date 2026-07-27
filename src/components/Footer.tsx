export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-8 px-8 text-center">
      <p className="text-neutral-500 text-sm">© {currentYear} emmA. All rights reserved.</p>
      <p className="text-neutral-600 text-xs mt-2">
        Built with Next.js, TypeScript &amp; Tailwind CSS
      </p>
    </footer>
  );
}
