import { motion } from 'framer-motion';

const Domain = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-900 flex items-center justify-center pt-20"
    >
      <div className="text-center text-white">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl font-bold mb-4"
        >
          Domain Services
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl"
        >
          Find and register your perfect domain name
        </motion.p>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8"
        >
          <input 
            type="text" 
            placeholder="Search for your domain..." 
            className="px-6 py-3 rounded-full w-96 text-gray-800"
          />
          <button className="ml-4 px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition font-medium">
            Search
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Domain;
