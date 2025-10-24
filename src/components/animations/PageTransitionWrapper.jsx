import { motion } from "framer-motion";

// Definiamo le varianti dell'animazione
const pageVariants = {
  // Stato iniziale (pagina sta per entrare)
  initial: {
    opacity: 0,
    y: 20 // Inizia 20px più in basso
  },
  // Stato animato (pagina è visibile)
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut" // Un'attenuazione fluida
    }
  },
  // Stato di uscita (pagina sta per andarsene)
  exit: {
    opacity: 0,
    y: -20, // Esce scivolando in alto
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

/**
 * Questo componente avvolge ogni pagina per applicare un'animazione 
 * di transizione coerente (initial, animate, exit).
 */
const PageTransitionWrapper = ({ children }) => {
  return (
    <motion.div
      // Applica le varianti definite sopra
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      // Assicura che il div si comporti come un contenitore di pagina
      style={{ position: 'relative', width: '100%' }} 
    >
      {children}
    </motion.div>
  );
};

export default PageTransitionWrapper;
