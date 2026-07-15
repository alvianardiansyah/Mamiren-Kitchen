import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const stats = [
  { value: "337+", label: "Postingan Produk", suffix: "" },
  { value: "761+", label: "Pelanggan", suffix: "" },
  { value: "100%", label: "Halal", suffix: "" },
  { value: "100%", label: "Homemade", suffix: "" },
]

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-cream border border-[#E8D5B7] hover-lift shadow-card"
            >
              <span className="font-playfair font-bold text-3xl md:text-4xl text-gold">
                {s.value}
              </span>
              <span className="font-poppins text-sm text-[#8D6E63] mt-1 font-medium">
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
