import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Home, CheckCircle2, Leaf, Star, Palette, Gift, Truck, Settings
} from "lucide-react"

const reasons = [
  { icon: Home, title: "Homemade", desc: "Dibuat di dapur rumah dengan penuh cinta dan ketelatenan" },
  { icon: CheckCircle2, title: "100% Halal", desc: "Semua bahan terjamin halal dan aman untuk dikonsumsi keluarga" },
  { icon: Leaf, title: "Fresh Order", desc: "Dibuat fresh saat dipesan, jaminan kesegaran produk" },
  { icon: Star, title: "Bahan Premium", desc: "Menggunakan bahan pilihan berkualitas tinggi" },
  { icon: Palette, title: "Tampilan Cantik", desc: "Presentasi yang elegan dan instagramable" },
  { icon: Gift, title: "Cocok Hampers", desc: "Ideal untuk parsel, souvenir, dan kado istimewa" },
  { icon: Truck, title: "Pengiriman Cepat", desc: "Layanan pengiriman via Grab, Maxim, dan kurir lokal" },
  { icon: Settings, title: "Bisa Custom", desc: "Desain dan isi bisa disesuaikan dengan kebutuhan Anda" },
]

export default function WhyUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="font-poppins text-gold text-sm font-semibold tracking-widest uppercase mb-2">
            Keunggulan Kami
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#2C2C2C]">
            Kenapa Memilih Kami?
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gold" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group flex flex-col items-center text-center p-6 rounded-2xl bg-cream border border-[#E8D5B7] hover:border-gold hover:-translate-y-2 hover:shadow-elegant transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl gradient-gold flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                <r.icon size={22} className="text-white" />
              </div>
              <h3 className="font-playfair font-bold text-[#2C2C2C] text-base mb-2">
                {r.title}
              </h3>
              <p className="font-poppins text-xs text-[#8D6E63] leading-relaxed">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
