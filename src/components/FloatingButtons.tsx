import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, ChevronUp } from "lucide-react"

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <>
      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/6282266860003?text=Halo%20Mamiren%20Kitchen%2C%20saya%20ingin%20memesan"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", bounce: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl"
        aria-label="Order via WhatsApp"
      >
        <MessageCircle size={26} className="text-white" />
        {/* Ping animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      </motion.a>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 z-50 w-11 h-11 rounded-full bg-gold shadow-md flex items-center justify-center hover:bg-gold-dark transition-colors duration-200"
            aria-label="Back to top"
          >
            <ChevronUp size={20} className="text-white" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
