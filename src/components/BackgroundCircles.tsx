import { motion } from "framer-motion";

function BackgroundCircles() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        scale: [1, 2, 2, 3, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex items-center justify-center"
    >
      <div className="absolute border-2 w-[200px] h-[200px] border-[#333333] rounded-full mt-52 animate-ping" />
      <div className="absolute border w-[300px] h-[300px] border-[#333333] rounded-full mt-52 " />
      <div className="absolute border w-[500px] h-[500px] border-[#333333] rounded-full mt-52 " />

      <div className="absolute border w-[650px] h-[650px] border-[#F7AB0a] rounded-full mt-52 animate-pulse opacity-40" />
      <div className="absolute border w-[800px] h-[800px] border-[#333333] rounded-full mt-52 " />
    </motion.div>
  );
}

export default BackgroundCircles;
