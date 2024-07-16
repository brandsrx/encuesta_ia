// components/ScrollSpy.js
"use client"
// components/ScrollSpy.js
import React from 'react';
import { Scrollspy } from 'react-scrollspy';

const ScrollSpy = () => {
  return (
    <Scrollspy items={['framework', 'seccion1', 'seccion2', 'tablas', 'resultado']} currentClassName="text-blue-600">
      <li><a href="#framework" className="text-lg font-medium hover:text-blue-600 transition duration-300">Análisis de Encuesta</a></li>
      <li><a href="#seccion1" className="text-lg font-medium hover:text-blue-600 transition duration-300">Sección 1</a></li>
      <li><a href="#seccion2" className="text-lg font-medium hover:text-blue-600 transition duration-300">Sección 2</a></li>
      <li><a href="#tablas" className="text-lg font-medium hover:text-blue-600 transition duration-300">Tablas bivariantes</a></li>
      <li><a href="#resultado" className="text-lg font-medium hover:text-blue-600 transition duration-300">Resultado total de la encuesta</a></li>
    </Scrollspy>
  );
};

export default ScrollSpy;

