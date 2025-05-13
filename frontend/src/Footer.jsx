function Footer() {
  return (
    <footer className="bg-primary text-white py-8 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">© 2025 Loja de E-Bikes. Todos os direitos reservados.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="text-secondary hover:text-yellow-300 transition">
            Facebook
          </a>
          <a href="#" className="text-secondary hover:text-yellow-300 transition">
            Instagram
          </a>
          <a href="#" className="text-secondary hover:text-yellow-300 transition">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;