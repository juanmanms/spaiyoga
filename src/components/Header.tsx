import { useState, useEffect } from 'react';
import { Menu, X, Laptop } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log('Header mounted');
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full top-0 z-1000 bg-white bg-opacity-95 backdrop-blur-sm shadow-md scroll-margin-top-20">
      <nav className="max-w-6xl mx-auto p-4 flex justify-between items-center">
        <div className="logo">
          <a href="/" className="text-xl font-bold">Espai Yoga Carlet</a>
        </div>
        <ul className="hidden md:flex gap-8 list-none">
          <li><a href="#about" className="text-current no-underline font-medium transition-colors duration-300 hover:text-primary">Sobre Nosotros</a></li>
          <li><a href="#classes" className="text-current no-underline font-medium transition-colors duration-300 hover:text-primary">Clases</a></li>
          <li><a href="#contact" className="text-current no-underline font-medium transition-colors duration-300 hover:text-primary">Contacto</a></li>
        </ul>
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden">
          <a href="/" className="block py-2 text-gray-600 hover:text-blue-600" onClick={() => setIsOpen(false)}>Inicio</a>
          <a href="#about" className="block py-2 text-gray-600 hover:text-blue-600" onClick={() => setIsOpen(false)}>Sobre Nosotros</a>
          <a href="#classes" className="block py-2 text-gray-600 hover:text-blue-600" onClick={() => setIsOpen(false)}>Clases</a>
          <a href="#contact" className="block py-2 text-gray-600 hover:text-blue-600" onClick={() => setIsOpen(false)}>Contacto</a>
        </nav>
      )}
    </header>

    //     {/* Mobile Menu */}
    //     {isOpen && (
    //       <nav className="md:hidden py-4">
    //         <a href="/" className="block py-2 text-gray-600 hover:text-blue-600">Inicio</a>
    //         <a href="#about" className="block py-2 text-gray-600 hover:text-blue-600">Sobre Nosotros</a>
    //         <a href="#classes" className="block py-2 text-gray-600 hover:text-blue-600">Clases</a>
    //         <a href="#contact" className="block py-2 text-gray-600 hover:text-blue-600">Contacto</a>
    //       </nav>
    //     )}
    //   </div>
    // </header>
  );
};

export default Header;