import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const categories = [
  { emoji: "🍰", label: "Dessert Box", desc: "Box cantik berisi aneka dessert premium" },
  { emoji: "🍮", label: "Pudding", desc: "Pudding lembut berbagai rasa & tampilan" },
  { emoji: "🎁", label: "Hampers", desc: "Paket hampers eksklusif untuk hadiah" },
  { emoji: "🎂", label: "Birthday Cake", desc: "Kue ulang tahun custom & elegan" },
  { emoji: "🍫", label: "Snack Box", desc: "Kotak snack untuk acara & gathering" },
  { emoji: "🍪", label: "Cookies", desc: "Aneka cookies homemade renyah & lezat" },
  { emoji: "🧁", label: "Cup Dessert", desc: "Dessert porsi personal dalam cup cantik" },
  { emoji: "🥧", label: "Custom Dessert", desc: "Pesan sesuai keinginan & acara Anda" },
]

export default function Categories() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="menu" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-poppins text-gold text-sm font-semibold tracking-widest uppercase mb-2">
            Kategori Produk
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#2C2C2C]">
            Apa yang Kami Sajikan
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gold" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group flex flex-col items-center text-center p-6 rounded-2xl bg-cream border border-[#E8D5B7] cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-elegant hover:border-gold"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-card flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {cat.emoji}
              </div>
              <h3 className="font-playfair font-bold text-[#2C2C2C] text-base mb-1">
                {cat.label}
              </h3>
              <p className="font-poppins text-xs text-[#8D6E63] leading-relaxed">
                {cat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
