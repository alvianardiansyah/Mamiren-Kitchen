import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ShoppingBag } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Tentang Kami", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Galeri", href: "#gallery" },
  { label: "Testimoni", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-elegant border-b border-[#E8D5B7]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <button
          onClick={() => handleNav("#home")}
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center shadow-md">
            <span className="text-white font-playfair font-bold text-lg leading-none">
              <img
                src="/logo.png"
                alt="logo"
                className="w-full h-full object-cover rounded-full"
              />
            </span>
          </div>
          <div className="flex flex-col leading-tight">
            <span
              className={`font-playfair font-bold text-base leading-tight transition-colors ${
                scrolled ? "text-[#2C2C2C]" : "text-white"
              }`}
            >
              Mamiren
            </span>
            <span
              className={`font-poppins text-[10px] tracking-[0.15em] uppercase transition-colors ${
                scrolled ? "text-gold" : "text-[#E8C547]"
              }`}
            >
              Kitchen
            </span>
          </div>
        </button>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className={`px-3 py-2 text-sm font-poppins font-medium rounded-md transition-all duration-200 hover:text-gold ${
                  scrolled
                    ? "text-[#2C2C2C] hover:bg-[#FFF8F0]"
                    : "text-white/90 hover:bg-white/10"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/6282266860003"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full font-poppins font-semibold text-sm text-white bg-gold hover:bg-gold-dark transition-all duration-200 shadow-md hover:shadow-elegant hover:-translate-y-0.5"
          >
            <ShoppingBag size={15} />
            Pesan Sekarang
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden p-2 rounded-md transition-colors ${
            scrolled ? "text-[#2C2C2C]" : "text-white"
          }`}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/98 backdrop-blur-md border-t border-[#E8D5B7] overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left px-4 py-3 text-sm font-poppins font-medium text-[#2C2C2C] hover:text-gold hover:bg-[#FFF8F0] rounded-lg transition-all"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://wa.me/6282266860003"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-full font-poppins font-semibold text-sm text-white bg-gold hover:bg-gold-dark transition-all"
              >
                <ShoppingBag size={15} />
                Pesan Sekarang
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
