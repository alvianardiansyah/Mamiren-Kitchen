import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Search, MessageCircle, ClipboardCheck, ChefHat, Truck } from "lucide-react"

const steps = [
  { icon: Search, num: "01", title: "Pilih Produk", desc: "Pilih produk yang Anda inginkan dari menu kami" },
  { icon: MessageCircle, num: "02", title: "Hubungi WhatsApp", desc: "Chat kami di WhatsApp 082266860003" },
  { icon: ClipboardCheck, num: "03", title: "Konfirmasi Pesanan", desc: "Konfirmasi detail pesanan & pembayaran DP" },
  { icon: ChefHat, num: "04", title: "Produksi", desc: "Pesanan Anda dibuat fresh dengan bahan terbaik" },
  { icon: Truck, num: "05", title: "Pengiriman", desc: "Dikirim via Grab, Maxim, atau kurir lokal" },
]

export default function OrderSteps() {
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
            Cara Pemesanan
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#2C2C2C]">
            Mudah & Cepat
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gold" />
        </motion.div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-[2.25rem] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#E8D5B7] via-gold to-[#E8D5B7]" />

          <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col items-center text-center gap-4"
              >
                {/* Circle */}
                <div className="relative z-10 w-[4.5rem] h-[4.5rem] rounded-full gradient-gold flex items-center justify-center shadow-elegant">
                  <s.icon size={24} className="text-white" />
                </div>
                {/* Step number */}
                <span className="font-poppins text-xs font-bold text-gold tracking-widest">
                  STEP {s.num}
                </span>
                <h3 className="font-playfair font-bold text-[#2C2C2C] text-base">
                  {s.title}
                </h3>
                <p className="font-poppins text-xs text-[#8D6E63] leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/6282266860003?text=Halo%20Mamiren%20Kitchen%2C%20saya%20ingin%20memesan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold hover:bg-gold-dark text-white font-poppins font-semibold text-sm transition-all duration-200 shadow-elegant hover:-translate-y-1 hover:shadow-xl"
          >
            <MessageCircle size={18} />
            Mulai Pesan Sekarang
          </a>
        </motion.div>
      </div>
    </section>
  )
}
