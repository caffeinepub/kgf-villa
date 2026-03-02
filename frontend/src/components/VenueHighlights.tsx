import { Sparkles, Trees, UtensilsCrossed, CalendarCheck, Music, Camera } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Elegant Banquet Halls',
    description:
      'Spacious, beautifully decorated halls that can accommodate grand celebrations with a touch of royal elegance.',
  },
  {
    icon: Trees,
    title: 'Lush Garden Lawns',
    description:
      'Sprawling open-air gardens perfect for outdoor ceremonies, mehendi functions, and evening receptions under the stars.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Exquisite Catering',
    description:
      'Delight your guests with a curated menu of traditional and contemporary cuisines prepared by expert chefs.',
  },
  {
    icon: CalendarCheck,
    title: 'Complete Event Management',
    description:
      'Our dedicated team handles every detail — from décor and lighting to logistics — so you can cherish every moment.',
  },
  {
    icon: Music,
    title: 'Entertainment & Sound',
    description:
      'State-of-the-art sound systems and stage setups to make your celebrations vibrant and memorable.',
  },
  {
    icon: Camera,
    title: 'Scenic Photo Spots',
    description:
      'Beautifully crafted backdrops and scenic corners designed to make every photograph a timeless memory.',
  },
];

export default function VenueHighlights() {
  return (
    <div className="bg-ivory py-20 md:py-28">
      {/* Floral Divider Top */}
      <div className="flex justify-center mb-12">
        <img
          src="/assets/generated/floral-divider.dim_800x80.png"
          alt=""
          className="w-full max-w-lg h-auto opacity-70"
          aria-hidden="true"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-xs tracking-[0.3em] uppercase mb-3 text-gold font-semibold">
            Our Promise
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal mb-4">
            Why Choose KGF Villa?
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-lg">✦</span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <p className="font-sans text-base sm:text-lg text-warm-brown max-w-2xl mx-auto leading-relaxed">
            At KGF Villa, we believe every wedding deserves to be extraordinary. We bring together
            world-class amenities, warm hospitality, and timeless beauty to create your perfect day.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-ivory-dark rounded-2xl p-8 border border-gold/20 hover:border-gold/50 hover:shadow-gold transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm text-warm-brown leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom accent */}
                <div className="mt-5 h-0.5 w-8 bg-gold/40 group-hover:w-16 group-hover:bg-gold transition-all duration-300 rounded-full" />
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div
          className="mt-16 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, oklch(0.52 0.12 65) 0%, oklch(0.72 0.14 72) 50%, oklch(0.62 0.13 68) 100%)',
          }}
        >
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} aria-hidden="true" />
          <div className="relative z-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory mb-3">
              Ready to Plan Your Dream Wedding?
            </h3>
            <p className="font-sans text-ivory/80 text-sm sm:text-base mb-6 max-w-lg mx-auto">
              Get in touch with us today and let us help you create memories that last a lifetime.
            </p>
            <a
              href="https://wa.me/917355936696?text=Hello%2C%20I%27m%20interested%20in%20booking%20KGF%20Villa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-ivory text-gold-dark font-semibold rounded-full hover:bg-ivory-dark transition-colors duration-200 shadow-lg text-sm sm:text-base"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Book Your Date Now
            </a>
          </div>
        </div>
      </div>

      {/* Floral Divider Bottom */}
      <div className="flex justify-center mt-12">
        <img
          src="/assets/generated/floral-divider.dim_800x80.png"
          alt=""
          className="w-full max-w-lg h-auto opacity-70 scale-x-[-1]"
          aria-hidden="true"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
    </div>
  );
}
