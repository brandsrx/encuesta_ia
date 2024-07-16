"use client"
import React, { useEffect, useState } from 'react';

import {TablaFrecuencia,DiagramaBarras,DiagramaCircular} from "../components/tablas"
export default function MarcoAplicativo(){
  const [jsonData,setJsonData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/frecuencias_encuesta.json'); // Ruta relativa al archivo JSON
        if (!response.ok) {
          throw new Error('Error al cargar el archivo JSON');
        }
        const data = await response.json();
        const aux = data.seccion1["1P"];
        console.log(aux)
        setJsonData(data)
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);
    return(
        <section id="framework" className="py-8 lg:py-16">
          <nav className={`h-screen  w-1/5 fixed`}>
      {/* Contenido de tu barra de navegación */}
      <ul className="flex flex-col justify-start space-y-4 py-4 px-6">
        <li><a href="#framework" className="text-lg font-medium hover:text-blue-600 transition duration-300">Análisis de Encuesta</a></li>
        <li><a href="#seccion1" className="text-lg font-medium hover:text-blue-600 transition duration-300" data-to-scrollspy-id="first">Sección 1</a></li>
        <li><a href="#seccion2" className="text-lg font-medium hover:text-blue-600 transition duration-300">Sección 2</a></li>
        <li><a href="#tablas" className="text-lg font-medium hover:text-blue-600 transition duration-300" data-to-scrollspy-id="second">Tablas bivariantes</a></li>
        <li><a href="#resultado" className="text-lg font-medium hover:text-blue-600 transition duration-300">Resultado total de la encuesta</a></li>
      </ul>
    </nav>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Análisis de Encuesta</h2>
      
          <p className="text-lg mb-4">
            El marco aplicativo de este estudio define el contexto y los objetivos principales que guían la evaluación del conocimiento y la percepción pública sobre la inteligencia artificial (IA) en La Paz, Bolivia. Este marco proporciona una base metodológica sólida para comprender cómo los ciudadanos perciben y utilizan la IA, y cómo estas percepciones pueden influir en políticas y estrategias educativas en el futuro.
          </p>
      
          <div id='seccion1'>
            <h3 className="text-2xl font-bold mb-4">Seccion 1</h3>
            <div className='preg1'>
              <h2 className='text-xl  mb-4'>Pregunta 1</h2>
              <TablaFrecuencia pregunta={{tipo:"Sexo",cod:"1P",a:"Femenino",b:"Masculino",nroPreguntas:2}} 
             />
             <DiagramaBarras data={jsonData} cod="1P" variables={["Femenino","Masculino"]} />
             <DiagramaCircular data={jsonData} cod="1P" variables={["Femenino","Masculino"]} />
            </div>
            <div className='preg2'>
              <h2 className='text-xl  mb-4'>Pregunta 2</h2>
              <TablaFrecuencia pregunta={{tipo:"Edad",cod:"2P",a:"18-27",b:"27-40",c:"40-59",d:"59-80",nroPreguntas:4}} 
             />
                  <DiagramaBarras data={jsonData} cod="2P" variables={["18-27","27-40","40-59","59-80"]} />
                  <DiagramaCircular data={jsonData} cod="2P" variables={["18-27","27-40","40-59","59-80"]} />
            </div>
            <div className='preg3'>
              <h2 className='text-xl  mb-4'>Pregunta 3</h2>
              <TablaFrecuencia pregunta={{tipo:"Estado civil",cod:"3P",a:"Soltero",b:"Casado/a",c:"Divorciado/a",d:"Viudo/a",nroPreguntas:4}} 
             />
               <DiagramaBarras data={jsonData} cod="3P" variables={["Soltero","Casado/a","Divorciado/a","Viudo/a"]} />
               <DiagramaCircular data={jsonData} cod="3P" variables={["Soltero","Casado/a","Divorciado/a","Viudo/a"]} />
            </div>
            <div className='preg4'>
              <h2 className='text-xl  mb-4'>Pregunta 4</h2>
              <TablaFrecuencia pregunta={{tipo:"Nivel de Educacion",cod:"4P",a:"Inicial",b:"Primaria",c:"Secundaria",d:"Tecnico Medio",e:"Tecnico superior",f:"Licenciatura",g:"Maestria",h:"Doctorado",nroPreguntas:8}} 
             />
              <DiagramaBarras data={jsonData} cod="4P" variables={["Inicial","Primaria","Secundaria","Tecnico Medio","Tecnico superior","Licenciatura","Maestria","Doctorado"]} />
              <DiagramaCircular data={jsonData} cod="4P" variables={["Inicial","Primaria","Secundaria","Tecnico Medio","Tecnico superior","Licenciatura","Maestria","Doctorado"]} />
            </div>
            <div className='preg5'>
              <h2 className='text-xl  mb-4'>Pregunta 5</h2>
              <TablaFrecuencia pregunta={{tipo:"Trabaja",cod:"5P",a:"Si",b:"No",nroPreguntas:2}} 
             />
               <DiagramaBarras data={jsonData} cod="5P" variables={["Si","No"]} />
               <DiagramaCircular data={jsonData} cod="5P" variables={["Si","No"]} />
            </div>
          </div>
      
          <div id='seccion2'>
            <h3 className="text-2xl font-bold mb-4" id='seccion2'>Seccion 2</h3>
            <p className="text-lg mb-4">
                Este estudio utiliza una metodología mixta que incluye encuestas cuantitativas y entrevistas cualitativas. La encuesta se diseñó para recopilar datos sobre la familiaridad con la IA y las percepciones de los ciudadanos. Las entrevistas cualitativas se realizaron para profundizar en temas emergentes y captar opiniones detalladas sobre la regulación y el futuro de la IA en La Paz. Se utilizó un muestreo estratificado para garantizar la representatividad de la muestra.
            </p>
          </div>
          <div id='tablas'> 
          <h3 className="text-2xl font-bold mb-4">Tablas bibariantes</h3>
          <p className="text-lg mb-4">
            Se espera que este estudio arroje luz sobre las áreas donde se necesita más educación y conciencia pública sobre la IA en La Paz. Además, se espera que los resultados informen la formulación de políticas que promuevan la adopción responsable de la IA y la preparación educativa de la población para los cambios tecnológicos futuros.
          </p>
          </div>
          <div id='resultado'>
          <h3 className="text-2xl font-bold mb-4" id='resultado'>Resultado total de la encuesta</h3>
          <p className="text-lg mb-4">
            Se espera que este estudio arroje luz sobre las áreas donde se necesita más educación y conciencia pública sobre la IA en La Paz. Además, se espera que los resultados informen la formulación de políticas que promuevan la adopción responsable de la IA y la preparación educativa de la población para los cambios tecnológicos futuros.
          </p>
          </div>

        </div>

      </section>
      
    )
}