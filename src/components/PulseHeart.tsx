import { AiFillHeart } from "react-icons/ai";
import { motion } from "framer-motion";

const PulseHeart = () => {
  return (
    <motion.div
      className="text-red-500 hover:text-green-500"
      animate={{ scale: 1.8 }}
      transition={{ ease: "easeInOut", duration: 2.0, repeat: Infinity }}
    >
      <AiFillHeart size={20} />
    </motion.div>
  );
};

export default PulseHeart;
