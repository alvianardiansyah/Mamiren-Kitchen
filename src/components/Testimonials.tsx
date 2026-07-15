import { useRef, useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Rina Susanti",
    location: "Kendari",
    avatar: "R",
    rating: 5,
    text: "Dessert boxnya luar biasa! Tampilannya cantik banget, rasanya juga enak. Cocok banget buat kado ulang tahun. Udah pesan berkali-kali dan selalu puas!",
  },
  {
    name: "Fitri Ramadhani",
    location: "Kendari Selatan",
    avatar: "F",
    rating: 5,
    text: "Pudding dari Mamiren Kitchen itu top banget! Warnanya cantik, rasanya enak, dan harganya worth it. Selalu jadi pilihan untuk arisan dan gathering.",
  },
  {
    name: "Dewi Sartika",
    location: "Kendari Barat",
    avatar: "D",
    rating: 5,
    text: "Hampers lebaran kemarin dari Mamiren Kitchen keren abis! Packagingnya mewah, isinya premium. Semua yang terima pada kagum. Highly recommended!",
  },
  {
    name: "Nur Aisyah",
    location: "Poasia",
    avatar: "N",
    rating: 5,
    text: "Kue ulang tahun anak saya dari Mamiren Kitchen amazing banget! Custom sesuai request, hasilnya jauh melebihi ekspektasi. Terima kasih!",
  },
  {
    name: "Siti Halimah",
    location: "Kambu",
    avatar: "S",
    rating: 5,
    text: "Pelayanannya ramah dan responsif. Produknya selalu fresh dan enak. Saya sudah berlangganan sejak lama dan tidak akan pindah ke yang lain!",
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent(c => (c + 1) % testimonials.length)

  return (
    <section id="testimonials" className="section-padding bg-cream">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-poppins text-gold text-sm font-semibold tracking-widest uppercase mb-2">
            Testimoni
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#2C2C2C]">
            Apa Kata Pelanggan Kami?
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gold" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Large quote */}
          <div className="absolute -top-6 left-8 text-gold/20 font-playfair text-9xl leading-none select-none pointer-events-none">
            "
          </div>

          <div className="relative bg-white rounded-3xl shadow-elegant border border-[#E8D5B7] p-8 md:p-12 min-h-[260px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-5"
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-gold text-gold" />
                  ))}
                </div>

                {/* Text */}
                <p className="font-poppins text-[#2C2C2C]/80 text-base md:text-lg leading-relaxed italic">
                  "{testimonials[current].text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 mt-2">
                  <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center text-white font-playfair font-bold text-lg shadow-md">
                    {testimonials[current].avatar}
                  </div>
                  <div>
                    <p className="font-poppins font-semibold text-[#2C2C2C] text-sm">
                      {testimonials[current].name}
                    </p>
                    <p className="font-poppins text-xs text-[#8D6E63]">
                      {testimonials[current].location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[#E8D5B7] bg-white hover:border-gold hover:bg-gold hover:text-white text-[#8D6E63] flex items-center justify-center transition-all duration-200"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-6 bg-gold" : "w-2 bg-[#E8D5B7]"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[#E8D5B7] bg-white hover:border-gold hover:bg-gold hover:text-white text-[#8D6E63] flex items-center justify-center transition-all duration-200"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
