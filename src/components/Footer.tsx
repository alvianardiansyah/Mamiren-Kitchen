import { MapPin, Phone, Camera, Heart } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Tentang Kami", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Galeri", href: "#gallery" },
  { label: "Testimoni", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#contact" },
]

const handleNav = (href: string) => {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: "smooth" })
}

export default function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center shadow-md">
                <span className="text-white font-playfair font-bold text-xl leading-none">
                  <img
                    src="/logo.png"
                    alt="logo"
                    className="w-full h-full object-cover rounded-full"
                  />
                </span>
              </div>
              <div>
                <p className="font-playfair font-bold text-lg text-white leading-tight">
                  Mamiren
                </p>
                <p className="font-poppins text-[10px] tracking-[0.18em] uppercase text-gold">
                  Kitchen
                </p>
              </div>
            </div>
            <p className="font-poppins text-sm text-white/60 leading-relaxed">
              Homemade Dessert &amp; Hampers Premium untuk Momen Istimewa.
              Dibuat dengan cinta, bahan terbaik, dan sentuhan premium.
            </p>
            <div className="flex gap-3 mt-2">
              <a
                href="https://wa.me/6282266860003"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <Phone size={15} />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <Camera size={15} />
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-colors duration-200"
                aria-label="Maps"
              >
                <MapPin size={15} />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="font-poppins font-semibold text-sm text-gold uppercase tracking-widest mb-5">
              Navigasi
            </p>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="font-poppins text-sm text-white/60 hover:text-gold transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-poppins font-semibold text-sm text-gold uppercase tracking-widest mb-5">
              Kontak
            </p>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-gold mt-0.5 shrink-0" />
                <span className="font-poppins text-sm text-white/60 leading-relaxed">
                  BTN Bukit Marwah Land Blok D16, Kendari, Sulawesi Tenggara
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-gold shrink-0" />
                <a
                  href="https://wa.me/6282266860003"
                  className="font-poppins text-sm text-white/60 hover:text-gold transition-colors"
                >
                  082266860003
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Camera size={15} className="text-gold shrink-0" />
                <a
                  href="https://instagram.com/"
                  className="font-poppins text-sm text-white/60 hover:text-gold transition-colors"
                >
                  @mamiren.kitchen
                </a>
              </li>
            </ul>

            <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="font-poppins text-xs text-gold font-semibold mb-1">
                Pre Order
              </p>
              <p className="font-poppins text-xs text-white/60">
                Minimal H-2 sebelum pengiriman
              </p>
              <p className="font-poppins text-xs text-white/60 mt-1">
                Via Grab · Maxim · Kurir Lokal
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-poppins text-xs text-white/40">
            © {new Date().getFullYear()} Mamiren Kitchen. All rights reserved.
          </p>
          <p className="font-poppins text-xs text-white/40 flex items-center gap-1">
            Made with <Heart size={11} className="text-gold fill-gold" /> in
            Kendari, Sulawesi Tenggara
          </p>
        </div>
      </div>
    </footer>
  );
}
