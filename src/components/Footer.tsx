export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-4xl mx-auto px-6 py-12 text-center text-gray-600">
        <p>© {currentYear} Meu Portfólio. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
