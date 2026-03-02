import { Phone, MapPin, MessageCircle, Clock } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/917355936696?text=Hello%2C%20I%27m%20interested%20in%20booking%20KGF%20Villa';

const ADDRESS = 'Medical Chauraha, inside KP Ground, George Town, Prayagraj, Uttar Pradesh 211002';

// Google Maps embed URL for the address
const MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.5!2d81.8467!3d25.4358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acb3b3b3b3b3b%3A0x0!2sKP+Ground%2C+George+Town%2C+Prayagraj%2C+Uttar+Pradesh+211002!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin';

// More accurate embed using place search
const MAPS_EMBED_SEARCH =
  'https://maps.google.com/maps?q=Medical+Chauraha+KP+Ground+George+Town+Prayagraj+Uttar+Pradesh+211002&t=&z=15&ie=UTF8&iwloc=&output=embed';

export default function Contact() {
  return (
    <div className="bg-ivory-dark py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-[0.3em] uppercase mb-3 text-gold font-semibold">
            Get In Touch
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal mb-4">
            Contact Us
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-lg">✦</span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <p className="font-sans text-base text-warm-brown max-w-xl mx-auto">
            We'd love to hear from you. Reach out to us on WhatsApp or visit us at our venue.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left: Contact Info */}
          <div className="flex flex-col gap-6">
            {/* Phone Card */}
            <div className="bg-ivory rounded-2xl p-6 border border-gold/20 shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-gold" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-sans text-xs tracking-widest uppercase text-warm-brown mb-1 font-semibold">
                  Phone
                </p>
                <a
                  href="tel:+917355936696"
                  className="font-serif text-xl font-semibold text-charcoal hover:text-gold transition-colors"
                >
                  +91 73559 36696
                </a>
                <p className="font-sans text-xs text-warm-brown mt-1">
                  Available for calls & WhatsApp
                </p>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-ivory rounded-2xl p-6 border border-gold/20 shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-gold" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-sans text-xs tracking-widest uppercase text-warm-brown mb-1 font-semibold">
                  Address
                </p>
                <p className="font-serif text-base font-medium text-charcoal leading-relaxed">
                  {ADDRESS}
                </p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-2 text-xs font-semibold text-gold hover:text-gold-dark transition-colors"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-ivory rounded-2xl p-6 border border-gold/20 shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-gold" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-sans text-xs tracking-widest uppercase text-warm-brown mb-1 font-semibold">
                  Enquiry Hours
                </p>
                <p className="font-sans text-sm text-charcoal">
                  Monday – Sunday: 9:00 AM – 9:00 PM
                </p>
                <p className="font-sans text-xs text-warm-brown mt-1">
                  We respond to WhatsApp messages promptly
                </p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-300 shadow-gold hover:shadow-gold-lg hover:scale-[1.02]"
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
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current flex-shrink-0" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>Chat on WhatsApp</span>
              <MessageCircle className="w-5 h-5 opacity-70" />
            </a>
          </div>

          {/* Right: Google Maps */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden border-2 border-gold/25 shadow-gold">
              <iframe
                title="KGF Villa Location"
                src={MAPS_EMBED_SEARCH}
                width="100%"
                height="420"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="bg-ivory rounded-xl px-5 py-4 border border-gold/20 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              <div>
                <p className="font-sans text-xs font-semibold tracking-widest uppercase text-warm-brown mb-1">
                  KGF Villa
                </p>
                <p className="font-sans text-sm text-charcoal leading-relaxed">
                  {ADDRESS}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
