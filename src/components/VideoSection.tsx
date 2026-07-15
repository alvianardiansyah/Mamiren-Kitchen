import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";

export default function VideoSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-white">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="font-poppins text-gold text-sm font-semibold tracking-widest uppercase mb-2">
            Behind The Scene
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#2C2C2C]">
            Lihat Proses Pembuatan Dessert Kami
          </h2>
          <p className="mt-3 font-poppins text-[#8D6E63] max-w-md mx-auto text-sm">
            Setiap produk dibuat dengan penuh perhatian dan dedikasi untuk
            menghadirkan yang terbaik
          </p>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gold" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden shadow-elegant border border-[#E8D5B7] aspect-video bg-cream"
        >
          {/* Placeholder for video — shows an attractive preview */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#FFF8F0] to-[#FFF0DC]">
            <img
              src="/dessert-box-1.webp"
              alt="Video thumbnail"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="relative z-10 flex flex-col items-center gap-4">
              <a
                href="https://www.instagram.com/mamiren_kitchen"
                target="_blank"
                rel="noopener noreferrer"
                className="w-20 h-20 rounded-full gradient-gold flex items-center justify-center shadow-elegant hover:scale-110 transition-transform duration-300"
              >
                <Play size={28} className="text-white ml-1" />
              </a>
              <div className="text-center">
                <p className="font-playfair font-bold text-xl text-[#2C2C2C]">
                  Tonton di Instagram kami
                </p>
                <p className="font-poppins text-sm text-[#8D6E63] mt-1">
                  @mamiren_kitchen
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 🔥 Hanya Instagram - TikTok dihapus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex justify-center gap-4 flex-wrap"
        >
          <a
            href="https://www.instagram.com/mamiren_kitchen"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#E8D5B7]/50 hover:bg-gold hover:text-white text-[#8D6E63] font-poppins font-semibold text-sm transition-all duration-200 border border-[#E8D5B7]"
          >
            📸 Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
