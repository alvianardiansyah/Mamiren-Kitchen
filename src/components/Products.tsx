import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MessageCircle } from "lucide-react"

const products = [
  {
    img: "/dessert-box-1.webp",
    name: "Dessert Box Premium",
    desc: "Kotak dessert mewah berisi aneka macaron, truffle cokelat, dan cream puff pilihan",
    badge: "Best Seller",
    badgeColor: "bg-gold text-white",
    price: "Mulai Rp 85.000",
  },
  {
    img: "/pudding-1.webp",
    name: "Pudding Cantik",
    desc: "Pudding lapis warna-warni yang cantik dan lezat, cocok untuk berbagai acara",
    badge: "Favorite",
    badgeColor: "bg-[#8D6E63] text-white",
    price: "Mulai Rp 35.000",
  },
  {
    img: "/hampers-1.webp",
    name: "Hampers Eksklusif",
    desc: "Paket hampers premium dalam kemasan elegan, cocok untuk hadiah dan parsel",
    badge: "New",
    badgeColor: "bg-[#2C2C2C] text-white",
    price: "Mulai Rp 150.000",
  },
  {
    img: "/birthday-cake-1.webp",
    name: "Birthday Cake Custom",
    desc: "Kue ulang tahun custom dengan desain elegan sesuai request dan tema acara",
    badge: "Best Seller",
    badgeColor: "bg-gold text-white",
    price: "Mulai Rp 200.000",
  },
  {
    img: "/cookies-1.webp",
    name: "Cookies Artisan",
    desc: "Aneka cookies homemade premium dengan rasa autentik dan kemasan cantik",
    badge: "Favorite",
    badgeColor: "bg-[#8D6E63] text-white",
    price: "Mulai Rp 45.000",
  },
  {
    img: "/cup-dessert.webp",
    name: "Cup Dessert",
    desc: "Dessert porsi personal dalam cup cantik, ideal untuk tamu undangan dan parcel",
    badge: "New",
    badgeColor: "bg-[#2C2C2C] text-white",
    price: "Mulai Rp 25.000",
  },
]

export default function Products() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-poppins text-gold text-sm font-semibold tracking-widest uppercase mb-2">
            Produk Kami
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#2C2C2C]">
            Produk Unggulan
          </h2>
          <p className="mt-3 font-poppins text-[#8D6E63] max-w-md mx-auto text-sm">
            Dibuat dengan bahan pilihan dan penuh cinta untuk setiap momen istimewa Anda
          </p>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gold" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-card border border-[#E8D5B7] hover:shadow-elegant hover:-translate-y-2 transition-all duration-400"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className={`absolute top-4 left-4 text-xs font-poppins font-bold px-3 py-1.5 rounded-full ${p.badgeColor}`}>
                  {p.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-3">
                <h3 className="font-playfair font-bold text-lg text-[#2C2C2C]">
                  {p.name}
                </h3>
                <p className="font-poppins text-sm text-[#8D6E63] leading-relaxed">
                  {p.desc}
                </p>
                <div className="flex items-center justify-between mt-1">
                  <span className="font-playfair font-bold text-gold text-base">
                    {p.price}
                  </span>
                  <a
                    href={`https://wa.me/6282266860003?text=Halo%20Mamiren%20Kitchen%2C%20saya%20ingin%20memesan%20${encodeURIComponent(p.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gold hover:bg-gold-dark text-white text-xs font-poppins font-semibold transition-all duration-200 hover:shadow-md"
                  >
                    <MessageCircle size={13} />
                    Pesan
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
