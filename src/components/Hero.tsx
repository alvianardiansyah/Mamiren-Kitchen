import { motion } from "framer-motion"
import { MessageCircle, ChevronDown, CheckCircle2 } from "lucide-react"

const badges = [
  "Homemade",
  "100% Halal",
  "Fresh Everyday",
  "Pre Order H-2",
]

const handleNav = (href: string) => {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: "smooth" })
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/hero-dessert.webp"
          alt="Mamiren Kitchen Dessert"
          className="w-full h-full object-cover scale-105"
          style={{ filter: "blur(2px)" }}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left content */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2"
            >
              <div className="h-px w-8 bg-gold" />
              <span className="text-[#E8C547] font-poppins text-sm font-medium tracking-widest uppercase">
                Mamiren Kitchen
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Momen Manis{" "}
              <span className="text-[#E8C547]">Dimulai</span>{" "}
              dari Mamiren Kitchen
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-poppins text-white/85 text-base md:text-lg leading-relaxed max-w-lg"
            >
              Kami menghadirkan dessert homemade premium, hampers eksklusif,
              pudding cantik, serta berbagai hidangan spesial untuk ulang tahun,
              hari raya, pernikahan, dan berbagai momen berharga Anda.
            </motion.p>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap gap-2"
            >
              {badges.map((b) => (
                <div
                  key={b}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-black text-xs font-poppins font-medium"
                >
                  <CheckCircle2 size={13} className="text-[#E8C547]" />
                  {b}
                </div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-3 mt-2"
            >
              <a
                href="https://wa.me/6282266860003?text=Halo%20Mamiren%20Kitchen%2C%20saya%20ingin%20memesan%20dessert"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full font-poppins font-semibold text-sm text-white bg-gold hover:bg-gold-dark transition-all duration-300 shadow-lg hover:shadow-elegant hover:-translate-y-1"
              >
                <MessageCircle size={16} />
                Pesan via WhatsApp
              </a>
              <button
                onClick={() => handleNav("#menu")}
                className="flex items-center gap-2 px-7 py-3.5 rounded-full font-poppins font-semibold text-sm text-white border border-white/40 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
              >
                Lihat Menu
              </button>
            </motion.div>
          </div>

          {/* Right: floating product image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, type: "spring", bounce: 0.3 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20"
              >
                <img
                  src="/dessert-box-1.webp"
                  alt="Dessert Box Premium"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Floating badges */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-10 glass rounded-xl px-4 py-3 shadow-lg"
              >
                <p className="font-poppins text-xs text-black/80">Pelanggan Puas</p>
                <p className="font-playfair font-bold text-xl text-[#E8C547]">761+</p>
              </motion.div>
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-4 -right-8 glass rounded-xl px-4 py-3 shadow-lg"
              >
                <p className="font-poppins text-xs text-black/80">Produk Tersedia</p>
                <p className="font-playfair font-bold text-xl text-[#E8C547]">337+</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/60 text-xs font-poppins tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={18} className="text-white/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
