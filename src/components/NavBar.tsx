
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-tech font-bold tracking-tight text-robot-blue-dark">
              AI<span className="text-robot-blue-light">Kontor</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium hover:text-robot-blue transition-colors">
              Features
            </a>
            <a href="#access" className="text-sm font-medium hover:text-robot-blue transition-colors">
              Access Levels
            </a>
            <a href="#meetings" className="text-sm font-medium hover:text-robot-blue transition-colors">
              Meetings
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-robot-blue transition-colors">
              Contact
            </a>
            <Button className="btn-gradient">
              Book Demo
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="block md:hidden text-robot-blue-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="pt-4 pb-2 md:hidden">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#features" 
                className="text-sm font-medium hover:text-robot-blue transition-colors px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#access" 
                className="text-sm font-medium hover:text-robot-blue transition-colors px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Access Levels
              </a>
              <a 
                href="#meetings" 
                className="text-sm font-medium hover:text-robot-blue transition-colors px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Meetings
              </a>
              <a 
                href="#contact" 
                className="text-sm font-medium hover:text-robot-blue transition-colors px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button className="btn-gradient w-full">
                Book Demo
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
