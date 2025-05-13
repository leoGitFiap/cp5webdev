function Home() {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl font-extrabold text-primary mb-6">Bem-vindo à Loja de E-Bikes</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Descubra a liberdade de pedalar com nossas bicicletas elétricas de alta qualidade. Escolha a sua favorita e comece sua aventura hoje!
      </p>
      <a
        href="/bicicletas"
        className="mt-8 inline-block bg-primary text-black px-6 py-3 rounded-lg hover:bg-blue-700 hover:text-white transition"
      >
        Ver Bicicletas
      </a>
    </div>
  );
}

export default Home;