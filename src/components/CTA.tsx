import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export default function CTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-gold opacity-95" />
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />
      {/* Decorative circles */}
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-white/10" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-6"
        >
          <p className="font-poppins text-white/80 text-sm font-medium tracking-widest uppercase">
            Siap Memesan?
          </p>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white leading-tight">
            Buat Momen Anda Lebih Manis Bersama{" "}
            <span className="text-white/90 italic">Mamiren Kitchen</span>
          </h2>
          <p className="font-poppins text-white/80 text-base max-w-lg leading-relaxed">
            Pesan sekarang dan biarkan kami menghadirkan dessert premium terbaik untuk
            setiap momen berharga Anda
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <a
              href="https://wa.me/6282266860003?text=Halo%20Mamiren%20Kitchen%2C%20saya%20ingin%20memesan%20dessert"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-white text-gold font-poppins font-bold text-sm hover:bg-[#FFF8F0] transition-all duration-200 shadow-lg hover:-translate-y-1 hover:shadow-xl"
            >
              <MessageCircle size={18} />
              Pesan Sekarang
            </a>
            <button
              onClick={() => {
                const el = document.querySelector("#gallery")
                if (el) el.scrollIntoView({ behavior: "smooth" })
              }}
              className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/60 text-white font-poppins font-semibold text-sm hover:bg-white/15 transition-all duration-200 hover:-translate-y-1"
            >
              Lihat Galeri
            </button>
          </div>

          {/* Info badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {["Pre Order H-2", "Grab & Maxim", "Custom Design", "100% Halal"].map(t => (
              <span key={t} className="px-4 py-2 rounded-full bg-white/15 text-white font-poppins text-xs font-medium border border-white/25">
                ✓ {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
