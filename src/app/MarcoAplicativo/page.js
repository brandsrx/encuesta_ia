"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import AccordionMenu from '../components/acordionMenu';
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
        <AccordionMenu/>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Análisis de Encuesta</h2>
      
          <p className="text-lg mb-4">
            El marco aplicativo de este estudio define el contexto y los objetivos principales que guían la evaluación del conocimiento y la percepción pública sobre la inteligencia artificial (IA) en La Paz, Bolivia. Este marco proporciona una base metodológica sólida para comprender cómo los ciudadanos perciben y utilizan la IA, y cómo estas percepciones pueden influir en políticas y estrategias educativas en el futuro.
          </p>
      
          <div id='seccion1'>
            <h3 className="text-2xl font-bold mb-4">Seccion 1</h3>
            <div className='preg1' id='seccion1pregunta-1'>
              <h2 className='text-xl  mb-4'>Pregunta 1</h2>
              <TablaFrecuencia pregunta={{tipo:"Sexo",cod:"1P",a:"Femenino",b:"Masculino",nroPreguntas:2}} 
              seccion="1"
             />
             <DiagramaBarras data={jsonData} cod="1P" variables={["Femenino","Masculino"]} seccion="1" />
             <DiagramaCircular data={jsonData} cod="1P" variables={["Femenino","Masculino"]} seccion="1" />
            </div>
            <div className='preg2' id='seccion1pregunta-2'>
              <h2 className='text-xl  mb-4'>Pregunta 2</h2>
              <TablaFrecuencia pregunta={{tipo:"Edad",cod:"2P",a:"18-27",b:"27-40",c:"40-59",d:"59-80",nroPreguntas:4}} 
                 seccion="1"
             />
                  <DiagramaBarras data={jsonData} cod="2P" variables={["18-27","27-40","40-59","59-80"]} seccion="1" />
                  <DiagramaCircular data={jsonData} cod="2P" variables={["18-27","27-40","40-59","59-80"]}  seccion="1"/>
            </div>
            <div className='preg3' id='seccion1pregunta-3'>
              <h2 className='text-xl  mb-4'>Pregunta 3</h2>
              <TablaFrecuencia pregunta={{tipo:"Estado civil",cod:"3P",a:"Soltero",b:"Casado/a",c:"Divorciado/a",d:"Viudo/a",nroPreguntas:4}} 
              seccion="1"
          />
               <DiagramaBarras data={jsonData} cod="3P" variables={["Soltero","Casado/a","Divorciado/a","Viudo/a"]} seccion="1"/>
               <DiagramaCircular data={jsonData} cod="3P" variables={["Soltero","Casado/a","Divorciado/a","Viudo/a"]} seccion="1" />
            </div>
            <div className='preg4' id='seccion1pregunta-4'>
              <h2 className='text-xl  mb-4'>Pregunta 4</h2>
              <TablaFrecuencia pregunta={{tipo:"Nivel de Educacion",cod:"4P",a:"Inicial",b:"Primaria",c:"Secundaria",d:"Tecnico Medio",e:"Tecnico superior",f:"Licenciatura",g:"Maestria",h:"Doctorado",nroPreguntas:8}} 
                seccion="1"
            />
              <DiagramaBarras data={jsonData} cod="4P" seccion="1"
               variables={["Inicial","Primaria","Secundaria","Tecnico Medio","Tecnico superior","Licenciatura","Maestria","Doctorado"]} />
              <DiagramaCircular data={jsonData} cod="4P" seccion="1"
               variables={["Inicial","Primaria","Secundaria","Tecnico Medio","Tecnico superior","Licenciatura","Maestria","Doctorado"]} />
            </div>
            <div className='preg5' id='seccion1pregunta-5'>
              <h2 className='text-xl  mb-4'>Pregunta 5</h2>
              <TablaFrecuencia pregunta={{tipo:"Trabaja",cod:"5P",a:"Si",b:"No",nroPreguntas:2}} 
                seccion="1"
            />
               <DiagramaBarras data={jsonData} cod="5P" variables={["Si","No"]} seccion="1"/>
               <DiagramaCircular data={jsonData} cod="5P" variables={["Si","No"]} seccion="1"/>
            </div>
          </div>
      
          <div id='seccion2'>
            <h3 className="text-2xl font-bold mb-4" id='seccion2'>Seccion 2</h3>
            <p className="text-lg mb-4">
                Este estudio utiliza una metodología mixta que incluye encuestas cuantitativas y entrevistas cualitativas. La encuesta se diseñó para recopilar datos sobre la familiaridad con la IA y las percepciones de los ciudadanos. Las entrevistas cualitativas se realizaron para profundizar en temas emergentes y captar opiniones detalladas sobre la regulación y el futuro de la IA en La Paz. Se utilizó un muestreo estratificado para garantizar la representatividad de la muestra.
            </p>
            <div className='preg1' id='seccion2pregunta-1'>
              <h2 className='text-xl  mb-4'>Pregunta 1</h2>
              <TablaFrecuencia pregunta={{tipo:"Conoce la Inteligencia Artificial",cod:"1P",a:"Si",b:"No",nroPreguntas:2}} 
                seccion="2"
            />
                <DiagramaBarras data={jsonData} cod="1P" variables={["Si","No"]} seccion="2" />
                <DiagramaCircular data={jsonData} cod="1P" variables={["Si","No"]} seccion="2" />
            </div>
            <div className='preg2' id='seccion2pregunta-2'>
              <h2 className='text-xl  mb-4'>Pregunta 2</h2>
              <TablaFrecuencia pregunta={{tipo:"Qué tan familiarizado/a estás con el término 'Inteligencia Artificial'",cod:"2P",a:"Muy familirizado",b:"Algo familirizado",c:"Poco familirizado",d:"Nada familirizado", nroPreguntas:4}} 
                seccion="2"
            />
                <DiagramaBarras data={jsonData} cod="2P" variables={["Muy familirizado","Algo familirizado","Poco familirizado","Nada familirizado"]} seccion="2" />
                <DiagramaCircular data={jsonData} cod="2P" variables={["Muy familirizado/a","Algo familirizado/a","Poco familirizado/a","Nada familirizado/a"]} seccion="2" />
            </div>
            <div className='preg3' id='seccion2pregunta-3'>
              <h2 className='text-xl  mb-4'>Pregunta 3</h2>
              <TablaFrecuencia pregunta={{tipo:"¿Qué tan informado/a te sientes sobre I.A.",cod:"3P",a:"Muy informado/a",b:"Moderadamente Informado/a",c:"Poco informado/a",d:"Nada informado/a", nroPreguntas:4}} 
                seccion="2"
            />
                <DiagramaBarras data={jsonData} cod="3P" variables={["Muy informado/a","Moderadamente Informado/a","Poco informado/a","Nada informado/a"]} seccion="2" />
                <DiagramaCircular data={jsonData} cod="3P" variables={["Muy informado/a","Moderadamente Informado/a","Poco informado/a","Nada informado/a"]} seccion="2" />
            </div>
            <div className='preg4' id='seccion2pregunta-4'>
              <h2 className='text-xl  mb-4'>Pregunta 4</h2>
              <TablaFrecuencia pregunta={{tipo:"¿Has utilizado alguna tecnología basada en IA?",cod:"4P",a:"Si",b:"No", nroPreguntas:2}} 
                seccion="2"
            />
                <DiagramaBarras data={jsonData} cod="4P" variables={["Si","No"]} seccion="2" />
                <DiagramaCircular data={jsonData} cod="4P" variables={["Si","No"]} seccion="2" />
            </div>
            <div className='preg5' id='seccion2pregunta-5'>
              <h2 className='text-xl  mb-4'>Pregunta 5</h2>
              <TablaFrecuencia pregunta={{tipo:"¿Con qué frecuencia utilizas tecnologías basadas en IA?",cod:"5P",a:"Diaria,emte",b:"Semanalmente", c:"Mensualmente",d:"Raramente",e:"Nunca", nroPreguntas:5}} 
                seccion="2"
            />
                <DiagramaBarras data={jsonData} cod="5P" variables={["Diaria,emte","Semanalmente", "Mensualmente","Raramente","Nunca"]} seccion="2" />
                <DiagramaCircular data={jsonData} cod="5P" variables={["Diaria,emte","Semanalmente", "Mensualmente","Raramente","Nunca"]} seccion="2" />
            </div>
            <div className='preg6' id='seccion2pregunta-6'>
              <h2 className='text-xl  mb-4'>Pregunta 6</h2>
              <TablaFrecuencia pregunta={{tipo:"¿En qué áreas de la informática crees que la IA puede ser más beneficiosa?",cod:"6P",a:"Desarollo de sfotware",b:"Ciberseguridad", c:"Analisis de datos",d:"Redes y sistemas",e:"Otro", nroPreguntas:5}} 
                seccion="2"
            />
                <DiagramaBarras data={jsonData} cod="6P" variables={["Desarollo de sfotware","Ciberseguridad","Analisis de datos","Redes y sistemas","Otro"]} seccion="2" />
                <DiagramaCircular data={jsonData} cod="6P" variables={["Desarolllo de sfotware","Ciberseguridad","Analisis de datos","Redes y sistemas","Otro"]} seccion="2" />
            </div>
            <div className='preg7' id='seccion2pregunta-7'>
              <h2 className='text-xl  mb-4'>Pregunta 7</h2>
              <TablaFrecuencia pregunta={{tipo:"¿Qué sector crees que debería priorizar la IA?",cod:"7P",a:"Salud y bienestar",b:"Seguridad y defensa", c:"Medio ambiente y sostenibilidad",d:"Industria y manofactura",e:"Servicios publicos", nroPreguntas:5}} 
                seccion="2"
            />
                <DiagramaBarras data={jsonData} cod="7P" variables={["Salud y bienestar","Seguridad y defensa","Medio ambiente y sostenibilidad","Industria y manofactura","Servicios publicos"]} seccion="2" />
                <DiagramaCircular data={jsonData} cod="7P" variables={["Salud y bienestar","Seguridad y defensa","Medio ambiente y sostenibilidad","Industria y manofactura","Servicios publicos"]} seccion="2" />
            </div>
            <div className='preg8' id='seccion2pregunta-8'>
              <h2 className='text-xl  mb-4'>Pregunta 8</h2>
              <TablaFrecuencia pregunta={{tipo:"¿Consideras que la IA debería regularse",cod:"8P",a:"Totalmente de acuerdo",b:"De acuerdo", c:"En desacuerdo",d:"Totalmente en desacuerdo", nroPreguntas:4}} 
                seccion="2"
            />
                <DiagramaBarras data={jsonData} cod="8P" variables={["Totalmente de acuerdo","De acuerdo","En desacuerdo","Totalmente en desacuerdo"]} seccion="2" />
                <DiagramaCircular data={jsonData} cod="8P" variables={["Totalmente de acuerdo","De acuerdo","En desacuerdo","Totalmente en desacuerdo"]} seccion="2" />
            </div>
            <div className='preg9' id='seccion2pregunta-9'>
              <h2 className='text-xl  mb-4'>Pregunta 9</h2>
              <TablaFrecuencia pregunta={{tipo:"¿Qué tan preocupado/a estás por los riesgos?",cod:"9P",a:"Muy preocupad/a",b:"Algo preocupado/a", c:"Poco preocupado/a",d:"Nada preocupado/a", nroPreguntas:4}} 
                seccion="2"
            />
                <DiagramaBarras data={jsonData} cod="9P" variables={["Muy preocupad/a","Algo preocupado/a","Poco preocupado/a","Nada preocupado/a"]} seccion="2" />
                <DiagramaCircular data={jsonData} cod="9P" variables={["Muy preocupad/a","Algo preocupado/a","Poco preocupado/a","Nada preocupado/a"]} seccion="2" />
            </div>
            <div className='preg10' id='seccion2pregunta-10'>
              <h2 className='text-xl  mb-4'>Pregunta 10</h2>
              <TablaFrecuencia pregunta={{tipo:"¿Cree que utilizar una inteligencia artificial es peligroso",cod:"10P",a:"Si",b:"No", nroPreguntas:2}} 
                seccion="2"
            />
                <DiagramaBarras data={jsonData} cod="10P" variables={["Si","No"]} seccion="2" />
                <DiagramaCircular data={jsonData} cod="10P" variables={["Si","No"]} seccion="2" />
            </div>
            <div className='preg11' id='seccion2pregunta-11'>
              <h2 className='text-xl  mb-4'>Pregunta 11</h2>
              <TablaFrecuencia pregunta={{tipo:"Conoces los términos y condiciones de las IA que utilizas en tus proyectos?",cod:"11P",a:"Si",b:"No", nroPreguntas:2}} 
                seccion="2"
            />
                <DiagramaBarras data={jsonData} cod="11P" variables={["Si","No"]} seccion="2" />
                <DiagramaCircular data={jsonData} cod="11P" variables={["Si","No"]} seccion="2" />
            </div>
            <div className='preg12' id='seccion2pregunta-12'>
              <h2 className='text-xl  mb-4'>Pregunta 12</h2>
              <TablaFrecuencia pregunta={{tipo:"¿Tienes conocimiento del manejo de datos que realizan las IA",cod:"12P",a:"Si",b:"No", nroPreguntas:2}} 
                seccion="2"
            />
                <DiagramaBarras data={jsonData} cod="12P" variables={["Si","No"]} seccion="2" />
                <DiagramaCircular data={jsonData} cod="12P" variables={["Si","No"]} seccion="2" />
            </div>
            <div className='preg13' id='seccion2pregunta-13'>
              <h2 className='text-xl  mb-4'>Pregunta 13</h2>
              <TablaFrecuencia pregunta={{tipo:"¿Cuál es tu opinión sobre la capacidad de la IA para reemplazar trabajos humanos?",cod:"13P",a:"Es una oportunidad para nuevos empleos",b:"Es una amenaza",c:"Es inevitable",d:"No tengo una opnion clatra", nroPreguntas:4}} 
                seccion="2"
            />
                <DiagramaBarras data={jsonData} cod="13P" variables={["Es una oportunidad para nuevos empleos","Es una amenaza","Es inevitable","No tengo una opnion clatra"]} seccion="2" />
                <DiagramaCircular data={jsonData} cod="13P" variables={["Es una oportunidad para nuevos empleos","Es una amenaza","Es inevitable","No tengo una opnion clatra"]} seccion="2" />
            </div>
            <div className='preg14' id='seccion2pregunta-14'>
              <h2 className='text-xl  mb-4'>Pregunta 14</h2>
              <TablaFrecuencia pregunta={{tipo:"¿Cree que la IA será más útil en el futuro?",cod:"14P",a:"Si",b:"No", nroPreguntas:2}} 
                seccion="2"
            />
                <DiagramaBarras data={jsonData} cod="14P" variables={["Si","No"]} seccion="2" />
                <DiagramaCircular data={jsonData} cod="14P" variables={["Si","No"]} seccion="2" />
            </div>
            <div className='preg15' id='seccion2pregunta-15'>
              <h2 className='text-xl  mb-4'>Pregunta 15</h2>
              <TablaFrecuencia pregunta={{tipo:"¿cree que la IA puede reemplazar al ser humano?",cod:"15P",a:"Si",b:"No", nroPreguntas:2}} 
                seccion="2"
            />
                <DiagramaBarras data={jsonData} cod="15P" variables={["Si","No"]} seccion="2" />
                <DiagramaCircular data={jsonData} cod="15P" variables={["Si","No"]} seccion="2" />
            </div>
          </div>
          <div id='tablas_bibariantes'> 
          <h3 className="text-2xl font-bold mb-4">Tablas bibariantes</h3>
          <div>
          <Image src="/bi1.png" width={500} height={500}></Image>
          <Image src="/b2.png" width={500} height={500}></Image>
          </div>
          </div>
          <div id='resultado_Final'>
          <h3 className="text-2xl font-bold mb-4" id='resultado'>Resultado total de la encuesta</h3>
          <p className="text-lg mb-4">
            Se espera que este estudio arroje luz sobre las áreas donde se necesita más educación y conciencia pública sobre la IA en La Paz. Además, se espera que los resultados informen la formulación de políticas que promuevan la adopción responsable de la IA y la preparación educativa de la población para los cambios tecnológicos futuros.
          </p>
          </div>

        </div>

      </section>
      
    )
}