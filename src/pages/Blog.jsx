import { motion } from 'framer-motion';

const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-900 flex items-center justify-center pt-20"
    >
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center text-white"
      >
        <h1 className="text-5xl font-bold mb-4">Blog</h1>
        <p className="text-xl">Latest news and updates from Durel</p>
      </motion.div>
    </motion.div>
  );
};

export default Blog;
