import { Phone, MapPin, Heart } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/917355936696?text=Hello%2C%20I%27m%20interested%20in%20booking%20KGF%20Villa';

const ADDRESS = 'Medical Chauraha, inside KP Ground, George Town, Prayagraj, Uttar Pradesh 211002';

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'kgf-villa'
  );

  return (
    <footer
      className="relative"
      style={{
        background: 'linear-gradient(135deg, oklch(0.18 0.025 45) 0%, oklch(0.22 0.03 50) 100%)',
      }}
    >
      {/* Gold top border */}
      <div
        className="h-1 w-full"
        style={{
          background: 'linear-gradient(to right, transparent, oklch(0.72 0.14 72), oklch(0.88 0.09 80), oklch(0.72 0.14 72), transparent)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src="/assets/generated/kgf-villa-logo.dim_400x120.png"
              alt="KGF Villa"
              className="h-12 w-auto object-contain mb-4"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                const sibling = target.nextElementSibling as HTMLElement | null;
                if (sibling) sibling.style.display = 'block';
              }}
            />
            <h2
              className="hidden font-serif text-2xl font-bold mb-4"
              style={{ color: 'oklch(0.72 0.14 72)', display: 'none' }}
            >
              KGF Villa
            </h2>
            <p className="font-sans text-sm leading-relaxed" style={{ color: 'oklch(0.70 0.02 70)' }}>
              Your premier wedding destination in Prayagraj. Creating timeless memories with elegance and grace.
            </p>
            <div className="flex items-center gap-2 mt-5">
              <div className="h-px w-8" style={{ background: 'oklch(0.72 0.14 72)' }} />
              <span style={{ color: 'oklch(0.72 0.14 72)' }}>✦</span>
              <div className="h-px w-8" style={{ background: 'oklch(0.72 0.14 72)' }} />
            </div>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3
              className="font-serif text-lg font-semibold mb-5"
              style={{ color: 'oklch(0.88 0.09 80)' }}
            >
              Contact
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+917355936696"
                className="flex items-center gap-3 group"
              >
                <Phone
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: 'oklch(0.72 0.14 72)' }}
                  strokeWidth={1.5}
                />
                <span
                  className="font-sans text-sm group-hover:text-gold transition-colors"
                  style={{ color: 'oklch(0.80 0.02 75)' }}
                >
                  +91 73559 36696
                </span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin
                  className="w-4 h-4 flex-shrink-0 mt-0.5"
                  style={{ color: 'oklch(0.72 0.14 72)' }}
                  strokeWidth={1.5}
                />
                <span
                  className="font-sans text-sm leading-relaxed text-left"
                  style={{ color: 'oklch(0.80 0.02 75)' }}
                >
                  {ADDRESS}
                </span>
              </div>
            </div>
          </div>

          {/* WhatsApp Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3
              className="font-serif text-lg font-semibold mb-5"
              style={{ color: 'oklch(0.88 0.09 80)' }}
            >
              Book Your Event
            </h3>
            <p className="font-sans text-sm mb-5" style={{ color: 'oklch(0.70 0.02 70)' }}>
              Ready to start planning? Message us on WhatsApp and our team will get back to you promptly.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105"
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
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-10 h-px w-full"
          style={{ background: 'oklch(1 0 0 / 8%)' }}
          aria-hidden="true"
        />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="font-sans text-xs" style={{ color: 'oklch(0.55 0.02 65)' }}>
            © {year} KGF Villa. All rights reserved.
          </p>
          <p className="font-sans text-xs flex items-center gap-1" style={{ color: 'oklch(0.55 0.02 65)' }}>
            Built with{' '}
            <Heart
              className="w-3 h-3 inline-block"
              style={{ color: 'oklch(0.72 0.14 72)', fill: 'oklch(0.72 0.14 72)' }}
              aria-label="love"
            />{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-colors"
              style={{ color: 'oklch(0.72 0.14 72)' }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
