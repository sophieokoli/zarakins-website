import { motion } from "framer-motion";

function GalleryCard({ image }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{
        scale: 1.03,
        y: -8,
      }}
      className="group overflow-hidden rounded-2xl shadow-lg bg-white"
    >
      <img
        src={image}
        alt="Project"
        className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
      />
    </motion.div>
  );
}

export default GalleryCard;