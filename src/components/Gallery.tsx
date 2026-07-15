import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

const allImages = [
  { src: "/gallery-1.webp", category: "dessert", label: "Dessert Box Premium" },
  { src: "/gallery-2.webp", category: "pudding", label: "Pudding Cantik" },
  { src: "/gallery-3.webp", category: "hampers", label: "Hampers Eksklusif" },
  { src: "/dessert-box-1.webp", category: "dessert", label: "Dessert Box Spesial" },
  { src: "/gallery-4.webp", category: "birthday", label: "Birthday Cake" },
  { src: "/pudding-1.webp", category: "pudding", label: "Pudding Lapis" },
  { src: "/hampers-1.webp", category: "hampers", label: "Hampers Premium" },
  { src: "/cup-dessert.webp", category: "dessert", label: "Cup Dessert" },
]

const filters = [
  { key: "all", label: "Semua" },
  { key: "dessert", label: "Dessert" },
  { key: "hampers", label: "Hampers" },
  { key: "pudding", label: "Pudding" },
  { key: "birthday", label: "Birthday" },
]

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [active, setActive] = useState("all")
  const [lightbox, setLightbox] = useState<string | null>(null)

  const filtered = active === "all" ? allImages : allImages.filter(i => i.category === active)

  return (
    <section id="gallery" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="font-poppins text-gold text-sm font-semibold tracking-widest uppercase mb-2">
            Galeri
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#2C2C2C]">
            Karya Terbaik Kami
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gold" />
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {filters.map(f => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`px-5 py-2 rounded-full font-poppins text-sm font-medium transition-all duration-200 ${
                active === f.key
                  ? "bg-gold text-white shadow-md"
                  : "bg-white text-[#8D6E63] border border-[#E8D5B7] hover:border-gold hover:text-gold"
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          <AnimatePresence>
            {filtered.map((img, i) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative break-inside-avoid overflow-hidden rounded-2xl cursor-pointer shadow-card"
                onClick={() => setLightbox(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-all duration-300 flex items-end">
                  <p className="translate-y-full group-hover:translate-y-0 transition-transform duration-300 px-4 pb-4 text-white font-poppins text-sm font-medium w-full">
                    {img.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={lightbox}
              alt="Lightbox"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              onClick={e => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
