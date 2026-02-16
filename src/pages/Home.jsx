import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import HostingSolutions from '../components/HostingSolutions';
import PricingPlan from '../components/PricingPlan';
import WhyChooseUs from '../components/WhyChooseUs';
import ClientReview from '../components/ClientReview';
import FAQ from '../components/FAQ';
import BlogSection from '../components/BlogSection';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <PricingPlan />
      <HostingSolutions />
      <WhyChooseUs />
      <ClientReview />
      <FAQ />
      <BlogSection />
    </motion.div>
  );
};

export default Home;
