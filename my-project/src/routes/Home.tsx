import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
    <h1 className="text-4xl font-bold">Home Page</h1>
  </motion.div>
);

export default Home;