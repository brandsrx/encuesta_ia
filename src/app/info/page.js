"use client"
import React, { useRef, useState } from "react";
import Image from "next/image";
import "./style.css"; // Importa tus estilos CSS aquí

function Acerca() {
  return (
    <div className="flex flex-col items-center bg-gray-100">
      <header className="w-full bg-neutral-800 text-white py-20 flex justify-center items-center">
        <h4 className="text-4xl font-bold text-center mx-4 animate-fadeIn">
          Nuestra misión es ayudar a las personas a ver los datos de nuevas maneras, descubrir ideas, desbloquear posibilidades sin fin.
        </h4>
      </header>
      <main className="w-full max-w-6xl px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Acerca de Nosotros</h2>
          <p className="text-lg leading-relaxed">
            Somos un grupo de estudiantes de informatica de la Universidad Mayor de San Andres (UMSA) 
          </p>
          <Image src="/pajaro.webp" alt="About Us" width={600} height={400} className="mt-6 rounded-lg shadow-md" />
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Quiénes Somos</h2>
          <p className="text-lg leading-relaxed">
            Un equipo de estudiantes que llevan a cabo un proyecto de encuestas de la materia de Estadistica I de la carrera de Informatica UMSA
          </p>
          <p className="text-lg">Enlace del repositorio de la web: <a target="_blank" style={{color:"blue"}} href="https://github.com/brandsrx/encuesta_ia">https://github.com/brandsrx/encuesta_ia</a> </p>

        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Misión</h2>
          <p className="text-lg leading-relaxed">
           Mostrar los datos obtenidos atravez de una encuesta realizada sobre que es la inteligencia artificial
           mostrar de forma grafica y en una tabla de frecuencias
          </p>
        </section>
        <section>
          <h2 className="text-3xl font-bold mb-4">Integrantes del Proyecto</h2>
          <ul className="list-disc list-inside text-lg leading-relaxed">
            <li>Univ. Ramiro Brandon Mamani Quisbert</li>
            <li>Univ. Mamani Chamizo Melany Abril</li>
            <li>Univ. Mamani Perez Alexander Mauricio</li>
            <li>Univ. Mamani Laguna Josue Hugo</li>
            <li>Univ. Mamani Trujillo Deivid Enrique</li>
            <li>Univ. Macias Trujillo Milton Camilo </li>
            <li>Univ. Tola Julian Alex David</li>
            <li>Univ. Ayala Quispe Franco Mario</li>
            <li>Univ. Macias Quispe Sergio Alejandro</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Acerca;
