import Hero from '../components/Hero';
import HostingSolutions from '../components/HostingSolutions';
import PricingPlan from '../components/PricingPlan';
import FindDomain from '../components/FindDomain';
import WhyChooseUs from '../components/WhyChooseUs';
import ClientReview from '../components/ClientReview';
import FAQ from '../components/FAQ';
import BlogSection from '../components/BlogSection';

const Home = () => {
  return (
    <div>
      <Hero />
      <HostingSolutions />
      <PricingPlan />
      <FindDomain />
      <WhyChooseUs />
      <ClientReview />
      <FAQ />
      <BlogSection />
    </div>
  );
};

export default Home;
