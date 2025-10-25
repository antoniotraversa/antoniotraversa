import { motion } from "framer-motion";

/**
 * Varianti cinematiche avanzate per le transizioni di pagina
 * Combina opacità, scale, blur, glow e traslazione diagonale
 */
const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.96,
    y: 40,
    x: -20,
    filter: "blur(6px) drop-shadow(0 0 10px rgba(31,55,110,0.5))",
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    x: 0,
    filter: "blur(0px) drop-shadow(0 0 20px rgba(31,55,110,0.8))",
    transition: {
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.94,
    y: -40,
    x: 20,
    filter: "blur(6px) drop-shadow(0 0 10px rgba(31,55,110,0.5))",
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

/**
 * PageTransitionWrapper cinematico
 * Avvolge il contenuto della pagina con un effetto premium
 */
const PageTransitionWrapper = ({ children }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        willChange: "transform, opacity, filter",
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransitionWrapper;
