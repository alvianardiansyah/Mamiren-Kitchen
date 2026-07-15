import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const points = [
  "Homemade dengan cinta & ketelatenan",
  "Fresh — dibuat saat dipesan",
  "100% Halal, bahan higienis",
  "Bahan berkualitas tinggi",
  "Harga terjangkau untuk semua kalangan",
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="about" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="font-poppins text-gold text-sm font-semibold tracking-widest uppercase mb-2">
            Tentang Kami
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#2C2C2C]">
            Dari Dapur Rumah,{" "}
            <span className="text-gradient-gold">Rasa Bintang Lima</span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gold" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-elegant aspect-[4/3]">
              <img
                src="/about-kitchen.webp"
                alt="Mamiren Kitchen — Proses Memasak"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-elegant p-4 flex items-center gap-3 border border-[#E8D5B7]">
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                <span className="text-white font-poppins font-bold text-xs">✓</span>
              </div>
              <div>
                <p className="font-poppins text-xs text-[#8D6E63]">Dipercaya oleh</p>
                <p className="font-playfair font-bold text-[#2C2C2C]">761+ Pelanggan</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            <p className="font-poppins text-[#2C2C2C]/80 leading-relaxed text-base md:text-lg">
              <strong className="text-[#2C2C2C] font-semibold">Mamiren Kitchen</strong> adalah usaha kuliner
              rumahan di Kota Kendari yang menghadirkan berbagai dessert premium
              dengan cita rasa terbaik. Semua produk dibuat secara{" "}
              <em className="text-gold font-medium">homemade</em> menggunakan
              bahan berkualitas dan diproses secara higienis sehingga menghasilkan
              makanan yang lezat, cantik, dan cocok untuk berbagai acara spesial.
            </p>
            <p className="font-poppins text-[#2C2C2C]/70 leading-relaxed">
              Berlokasi di BTN Bukit Marwah Land Blok D16, Kendari, Sulawesi
              Tenggara. Kami hadir untuk membuat setiap momen Anda menjadi lebih
              manis dan berkesan.
            </p>

            <ul className="flex flex-col gap-3 mt-2">
              {points.map((pt, i) => (
                <motion.li
                  key={pt}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={18} className="text-gold mt-0.5 shrink-0" />
                  <span className="font-poppins text-sm text-[#2C2C2C]/80">{pt}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 mt-4">
              <a
                href="https://wa.me/6282266860003"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-gold hover:bg-gold-dark text-white font-poppins font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-elegant hover:-translate-y-0.5"
              >
                Hubungi Kami
              </a>
              <button
                onClick={() => {
                  const el = document.querySelector("#menu")
                  if (el) el.scrollIntoView({ behavior: "smooth" })
                }}
                className="px-6 py-3 rounded-full border border-gold text-gold hover:bg-gold hover:text-white font-poppins font-semibold text-sm transition-all duration-200"
              >
                Lihat Menu
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
