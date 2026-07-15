import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Phone, Camera, Clock, MessageCircle } from "lucide-react"

const contacts = [
  {
    icon: MapPin,
    title: "Alamat",
    value: "BTN Bukit Marwah Land Blok D16, Kendari, Sulawesi Tenggara",
  },
  {
    icon: Phone,
    title: "WhatsApp",
    value: "082266860003",
    href: "https://wa.me/6282266860003",
  },
  {
    icon: Camera,
    title: "Instagram",
    value: "@mamiren.kitchen",
    href: "https://instagram.com/",
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    value: "Senin – Sabtu: 08.00 – 20.00 WITA\nMinggu: 09.00 – 18.00 WITA",
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-poppins text-gold text-sm font-semibold tracking-widest uppercase mb-2">
            Kontak
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#2C2C2C]">
            Hubungi Kami
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gold" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-5"
          >
            {contacts.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-cream border border-[#E8D5B7] hover:border-gold hover:shadow-elegant transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl gradient-gold flex items-center justify-center shrink-0">
                  <c.icon size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-poppins text-xs font-semibold text-[#8D6E63] uppercase tracking-wider mb-1">
                    {c.title}
                  </p>
                  {c.href ? (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-poppins text-sm text-[#2C2C2C] hover:text-gold transition-colors font-medium"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="font-poppins text-sm text-[#2C2C2C] whitespace-pre-line font-medium">
                      {c.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}

            <a
              href="https://wa.me/6282266860003?text=Halo%20Mamiren%20Kitchen%2C%20saya%20ingin%20bertanya"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gold hover:bg-gold-dark text-white font-poppins font-semibold transition-all duration-200 shadow-elegant hover:shadow-xl hover:-translate-y-0.5"
            >
              <MessageCircle size={18} />
              Chat WhatsApp Sekarang
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-3xl overflow-hidden shadow-elegant border border-[#E8D5B7] aspect-[4/3]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1990.1054792862644!2d122.4829445541058!3d-3.976951807741274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d98f371777d239f%3A0x1225743ec980ee96!2sMamIren%20Kitchen!5e0!3m2!1sid!2sid!4v1784127425128!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mamiren Kitchen Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
