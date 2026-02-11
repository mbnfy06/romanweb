import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PasswordGate from '@/components/auth/PasswordGate';

function App() {
  return (
    <Router>
      <PasswordGate>
        <div className="min-h-screen flex flex-col bg-roman-dark">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Services />} />
          </Routes>
          <Footer />
        </div>
      </PasswordGate>
    </Router>
  );
}

export default App;
