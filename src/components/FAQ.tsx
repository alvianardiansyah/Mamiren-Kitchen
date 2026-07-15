import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "Apakah semua produk halal?",
    a: "Ya, 100% semua produk Mamiren Kitchen menggunakan bahan-bahan yang halal dan telah terjamin kebersihannya. Kami berkomitmen menghadirkan produk yang aman dan halal untuk seluruh keluarga.",
  },
  {
    q: "Apakah bisa custom desain?",
    a: "Tentu! Kami menerima pesanan custom sesuai dengan tema dan keinginan Anda. Silakan hubungi kami via WhatsApp untuk berdiskusi mengenai desain yang diinginkan.",
  },
  {
    q: "Berapa lama pre order?",
    a: "Untuk sebagian besar produk, pre order dilakukan minimal H-2 (2 hari sebelum tanggal pengiriman). Untuk pesanan dalam jumlah besar atau custom cake, disarankan minimal H-3 sampai H-5.",
  },
  {
    q: "Apakah bisa dikirim via Grab?",
    a: "Ya, kami melayani pengiriman via Grab, Maxim, dan kurir lokal di area Kendari dan sekitarnya. Biaya pengiriman ditanggung oleh pembeli.",
  },
  {
    q: "Apakah menerima pesanan dalam jumlah banyak?",
    a: "Ya, kami melayani pesanan dalam jumlah besar untuk acara pernikahan, ulang tahun, arisan, meeting, atau keperluan korporat. Silakan hubungi kami untuk mendapatkan penawaran harga spesial.",
  },
  {
    q: "Bagaimana cara pembayaran?",
    a: "Pembayaran dapat dilakukan melalui transfer bank (BRI, BCA, Mandiri), OVO, GoPay, Dana, dan QRIS. Pembayaran DP minimal 50% untuk konfirmasi pesanan.",
  },
  {
    q: "Apakah ada minimum order?",
    a: "Tidak ada minimum order untuk sebagian besar produk. Namun untuk beberapa produk tertentu seperti cookies dan snack box, ada minimum order yang akan diinformasikan saat pemesanan.",
  },
]

function FAQItem({ faq, i }: { faq: typeof faqs[0]; i: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: i * 0.05 }}
      className="border border-[#E8D5B7] rounded-2xl overflow-hidden bg-white shadow-card"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-[#FFF8F0] transition-colors duration-200"
      >
        <span className="font-poppins font-semibold text-[#2C2C2C] text-sm md:text-base">
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <ChevronDown size={18} className={open ? "text-gold" : "text-[#8D6E63]"} />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 font-poppins text-sm text-[#8D6E63] leading-relaxed">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="faq" className="section-padding bg-cream">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-poppins text-gold text-sm font-semibold tracking-widest uppercase mb-2">
            FAQ
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#2C2C2C]">
            Pertanyaan yang Sering Ditanyakan
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gold" />
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} i={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <p className="font-poppins text-sm text-[#8D6E63] mb-4">
            Masih ada pertanyaan lain?
          </p>
          <a
            href="https://wa.me/6282266860003"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold hover:bg-gold-dark text-white font-poppins font-semibold text-sm transition-all duration-200 shadow-md hover:-translate-y-0.5"
          >
            Tanya via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
