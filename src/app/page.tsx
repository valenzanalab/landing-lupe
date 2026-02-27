export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ═══ NAVIGATION ═══ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-extrabold tracking-tight text-gray-900">
            Lupé
          </span>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">Nosotros</a>
            <a href="#services" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">Servicios</a>
            <a href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">Opiniones</a>
            <a href="#contact" className="px-5 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition shadow-lg shadow-gray-900/20">
              Contáctanos
            </a>
          </div>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-600 opacity-5" />
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-semibold" style={{ color: '#0A0A0A' }}>
                Lupé
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-gray-900 leading-[1.1] mb-6">
              Sabores únicos en Las Palmas
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed mb-10 max-w-2xl">
              Restaurante Lupé: Cocina tradicional con toque moderno y ambiente acogedor
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5" style={{ background: '#0A0A0A' }}>
                Contáctanos
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a href="#services" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 bg-gray-100 rounded-2xl hover:bg-gray-200 transition">
                Ver Servicios
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
                Descubre Lupé, tu nuevo restaurante favorito
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                En Lupé combinamos ingredientes frescos y recetas auténticas para ofrecerte una experiencia gastronómica inolvidable. Ven y disfruta de nuestro ambiente cálido y un servicio excepcional que te hará sentir como en casa.
              </p>
              <ul className="space-y-4 text-gray-700">

              <li className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-sm flex-shrink-0">✓</span>
                <span>Cocina tradicional con innovación</span>
              </li>

              <li className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-sm flex-shrink-0">✓</span>
                <span>Ambiente acogedor y familiar</span>
              </li>

              <li className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-sm flex-shrink-0">✓</span>
                <span>Excelente atención personalizada</span>
              </li>

              <li className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-sm flex-shrink-0">✓</span>
                <span>Ubicación céntrica en Las Palmas</span>
              </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-gray-800 to-gray-600 opacity-10" />
              <div className="absolute inset-8 rounded-2xl bg-white shadow-2xl flex items-center justify-center">
                <span className="text-8xl">🏢</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section id="services" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Soluciones profesionales adaptadas a tus necesidades
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div key={0} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Menú a la carta</h3>
            <p className="text-gray-600 leading-relaxed">Variedad de platos elaborados con ingredientes frescos y de calidad.</p>
          </div>

          <div key={1} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Reservas telefónicas</h3>
            <p className="text-gray-600 leading-relaxed">Atención rápida para reservar tu mesa y garantizar tu espacio.</p>
          </div>

          <div key={2} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Eventos privados</h3>
            <p className="text-gray-600 leading-relaxed">Espacios adaptados para celebraciones y reuniones especiales.</p>
          </div>

          <div key={3} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Servicio de catering</h3>
            <p className="text-gray-600 leading-relaxed">Lleva el sabor de Lupé a tus eventos con nuestro servicio profesional.</p>
          </div>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section id="testimonials" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="text-lg text-gray-500">Opiniones reales de personas reales</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">

          <div key={0} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex gap-1 mb-4">
              <span className="text-yellow-400 text-lg">★</span>
              <span className="text-yellow-400 text-lg">★</span>
              <span className="text-yellow-400 text-lg">★</span>
              <span className="text-yellow-400 text-lg">★</span>
              <span className="text-yellow-400 text-lg">★</span>
              
            </div>
            <p className="text-gray-700 italic mb-4 leading-relaxed">&ldquo;Una experiencia gastronómica excepcional, platos deliciosos y un servicio inmejorable. ¡Volveré seguro!&rdquo;</p>
            <p className="font-semibold text-gray-900">Ana Martínez</p>
          </div>

          <div key={1} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex gap-1 mb-4">
              <span className="text-yellow-400 text-lg">★</span>
              <span className="text-yellow-400 text-lg">★</span>
              <span className="text-yellow-400 text-lg">★</span>
              <span className="text-yellow-400 text-lg">★</span>
              <span className="text-yellow-400 text-lg">★</span>
              
            </div>
            <p className="text-gray-700 italic mb-4 leading-relaxed">&ldquo;Ambiente acogedor y comida de calidad. Lupé es mi restaurante favorito en Las Palmas.&rdquo;</p>
            <p className="font-semibold text-gray-900">Carlos Gómez</p>
          </div>

          <div key={2} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex gap-1 mb-4">
              <span className="text-yellow-400 text-lg">★</span>
              <span className="text-yellow-400 text-lg">★</span>
              <span className="text-yellow-400 text-lg">★</span>
              <span className="text-yellow-400 text-lg">★</span>
              <span className="text-gray-200 text-lg">★</span>
            </div>
            <p className="text-gray-700 italic mb-4 leading-relaxed">&ldquo;La atención fue excelente y el menú muy variado. Recomendado para cenas en pareja o familia.&rdquo;</p>
            <p className="font-semibold text-gray-900">Lucía Fernández</p>
          </div>
          </div>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section id="contact" className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gray-900 rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              ¿Listo para empezar?
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
              Reserva tu mesa y vive la mejor experiencia culinaria en Lupé
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <div className="text-3xl mb-3">📞</div>
                <p className="text-white font-semibold">928 22 96 03</p>
                <p className="text-gray-400 text-sm mt-1">Llámanos</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <div className="text-3xl mb-3">📍</div>
                <p className="text-white font-semibold text-sm">Calle Dr. Miguel Rosas, 8, 35007 Las Palmas de Gran Canaria, Las Palmas, España</p>
                <p className="text-gray-400 text-sm mt-1">Visítanos</p>
              </div>
            </div>
            <a href="tel:928 22 96 03" className="inline-flex items-center px-10 py-4 text-lg font-bold rounded-2xl text-gray-900 transition-all duration-300 hover:scale-105 shadow-xl" style={{ background: '#0A0A0A' }}>
              Contáctanos
            </a>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="py-12 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xl font-bold text-gray-900 mb-2">Lupé</p>
          <p className="text-gray-500 text-sm mb-6">Lupé: Sabor que enamora</p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="#about" className="text-sm text-gray-400 hover:text-gray-600 transition">Nosotros</a>
            <a href="#services" className="text-sm text-gray-400 hover:text-gray-600 transition">Servicios</a>
            <a href="#contact" className="text-sm text-gray-400 hover:text-gray-600 transition">Contacto</a>
          </div>
          <p className="text-xs text-gray-300">
            © {new Date().getFullYear()} Lupé. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-300 mt-2">
            Diseñado por <a href="https://valenzana.com" className="underline hover:text-gray-500 transition" target="_blank" rel="noopener">Valenzana</a>
          </p>
        </div>
      </footer>
    </main>
  );
}
