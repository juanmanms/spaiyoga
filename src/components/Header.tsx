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

  const links = [
    { href: "/", label: "Inicio" },
    { href: "#about", label: "Sobre Nosotros" },
    { href: "#classes", label: "Clases" },
    { href: "#contact", label: "Contacto" },
  ];

  return (
    <header className="fixed w-full top-0 z-1000 bg-white bg-opacity-95 backdrop-blur-sm shadow-md scroll-margin-top-20">
      <nav className="max-w-6xl mx-auto p-4 flex justify-between items-center">
        <div className="logo">
          <a href="/" className="text-xl font-bold">Espai Yoga Carlet</a>
        </div>
        <ul className="hidden md:flex gap-8 list-none">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-current no-underline font-medium transition-colors duration-300 hover:text-primary">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2 text-gray-600 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
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