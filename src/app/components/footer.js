import React from 'react';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className="bg-gray-800 c-dark py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <a href="#" className="text-2xl font-bold">AI Encuesta</a>
        </div>
        <div className="mb-4">
        <Link href="/" className="text-gray-400 hover:text-white mx-2">Introducción</Link>
       <Link href="/MarcoAplicativo" className="text-gray-400 hover:text-white mx-2">Marco Aplicativo</Link>
        <Link href="/info" className="text-gray-400 hover:text-white mx-2">Informacion</Link>
        </div>
        <div className="mb-4">
          <p>&copy; {new Date().getFullYear()} AI Encuesta. Todos los derechos reservados .</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
