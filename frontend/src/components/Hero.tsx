export default function Hero() {
  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/917355936696?text=Hello%2C%20I%27m%20interested%20in%20booking%20KGF%20Villa',
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleExplore = () => {
    const el = document.querySelector('#about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/generated/hero-bg.dim_1920x1080.png')" }}
        aria-hidden="true"
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(30,20,10,0.55) 0%, rgba(20,12,5,0.72) 60%, rgba(10,6,2,0.85) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Decorative top border */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: 'linear-gradient(to right, transparent, oklch(0.72 0.14 72), transparent)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto animate-fade-in-up">
        {/* Decorative ornament */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-16 sm:w-24" style={{ background: 'oklch(0.72 0.14 72)' }} />
          <span className="text-gold text-2xl" style={{ color: 'oklch(0.72 0.14 72)' }}>✦</span>
          <div className="h-px w-16 sm:w-24" style={{ background: 'oklch(0.72 0.14 72)' }} />
        </div>

        {/* Subtitle */}
        <p
          className="font-sans text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 font-light"
          style={{ color: 'oklch(0.88 0.09 80)' }}
        >
          Welcome to
        </p>

        {/* Main Heading */}
        <h1
          className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold mb-4 leading-tight"
          style={{ color: 'oklch(0.97 0.025 82)' }}
        >
          KGF Villa
        </h1>

        {/* Gold divider */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="h-px w-8" style={{ background: 'oklch(0.72 0.14 72)' }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'oklch(0.72 0.14 72)' }} />
          <div className="h-px w-20" style={{ background: 'oklch(0.72 0.14 72)' }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'oklch(0.72 0.14 72)' }} />
          <div className="h-px w-8" style={{ background: 'oklch(0.72 0.14 72)' }} />
        </div>

        {/* Tagline */}
        <p
          className="font-serif italic text-xl sm:text-2xl md:text-3xl mb-4 font-light"
          style={{ color: 'oklch(0.92 0.04 80)' }}
        >
          Your Dream Wedding Destination
        </p>

        <p
          className="font-sans text-sm sm:text-base mb-10 max-w-xl mx-auto leading-relaxed font-light"
          style={{ color: 'oklch(0.80 0.02 75)' }}
        >
          Celebrate your most cherished moments at KGF Villa — where elegance meets tradition in the heart of Prayagraj.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleWhatsApp}
            className="group flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 shadow-gold-lg hover:shadow-gold hover:scale-105"
            style={{
              background: 'oklch(0.62 0.18 145)',
              color: 'oklch(0.98 0.01 85)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'oklch(0.52 0.18 145)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'oklch(0.62 0.18 145)';
            }}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current flex-shrink-0" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </button>

          <button
            onClick={handleExplore}
            className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base border-2 transition-all duration-300 hover:scale-105"
            style={{
              borderColor: 'oklch(0.72 0.14 72)',
              color: 'oklch(0.88 0.09 80)',
              background: 'transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'oklch(0.72 0.14 72 / 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            Explore Venue
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 opacity-60">
          <span className="font-sans text-xs tracking-widest uppercase" style={{ color: 'oklch(0.80 0.02 75)' }}>
            Scroll
          </span>
          <div
            className="w-px h-8 animate-bounce"
            style={{ background: 'oklch(0.72 0.14 72)' }}
          />
        </div>
      </div>
    </div>
  );
}
