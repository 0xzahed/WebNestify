import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Domain from './pages/Domain';
import Hosting from './pages/Hosting';
import Pages from './pages/Pages';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/domain" element={<Domain />} />
          <Route path="/hosting" element={<Hosting />} />
          <Route path="/pages" element={<Pages />} />
        </Routes>
        <Footer />
        <ScrollToTop />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
