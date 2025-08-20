import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/book-call" element={<BookingForm />} />
      <Route path="/main" element={
        <div className="min-h-screen bg-gray-900">
          {/* Navigation */}
          <Navbar />
          {/* Hero Section */}
          <Hero />
          {/* About Section */}
          <About />
          {/* Projects Section */}
          <Projects />
          {/* Skills Section */}
          {/*<Skills/> */}
          {/* Resume Section */}
          <Resume />
          {/* Contact Section */}
          <Contact />
          {/* Footer */}
          <Footer />
        </div>
      } />
    </Routes>
  );
}

export default App;
