import Head from 'next/head';
import Image from 'next/image';
import Card from './components/card';
export default function Home() {
  return (
      <main className=" mx-auto " >

        <div className='c-dark'>
        <section className="text-center py-16 ">
          <h1 className="text-4xl font-bold mb-4">AI Survey Results</h1>
          <p className="text-lg mb-8">Explore the key insights and trends from our comprehensive survey on the state of artificial intelligence.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Download Report
          </button>
        </section>

        <section className="bg-gray-800 rounded-lg p-8 mt-8" >
          <div className="flex items-center justify-center h-64 bg-gray-700 rounded-lg" style={{ backgroundImage: "url('/est.jpg')"}}>
          </div>
        </section>
        </div>

        <div className="flex flex-col lg:flex-row justify-between">
  <section id="introduction" className=" px-2.5 text-center py-8 lg:py-16 lg:w-1/2 lg:pr-4">
    <h1 className="text-4xl font-bold mb-4">Introducción</h1>
    <p className="text-lg mb-4 lg:mb-8 text-justify">
      En las últimas décadas, la inteligencia artificial (IA) ha transformado sectores como salud, educación, industria y servicios. Evaluar el conocimiento y percepción pública sobre la IA es crucial para su adopción responsable.
    </p>
    <p className="text-lg mb-4 lg:mb-8 text-justify">
      La Paz, Bolivia, también avanza tecnológicamente. Es esencial conocer la percepción y familiaridad de sus ciudadanos con la IA para formular políticas y estrategias educativas adecuadas.
    </p>
    <p className="text-lg mb-4 lg:mb-8 text-justify">
      Este sitio web evalúa el conocimiento y percepción de la IA en La Paz, recopilando datos sobre familiaridad, uso y percepción de beneficios y riesgos, así como áreas donde la IA puede tener mayor impacto positivo.
    </p>
  </section>

  <section id="objectives" className="text-center py-8 lg:py-16 lg:w-1/2 lg:pl-4">
    <h2 className="text-3xl font-bold mb-4">Objetivo General</h2>
    <p className="text-lg mb-4 lg:mb-8 text-justify">
      Evaluar el nivel de conocimiento obtenido sobre la inteligencia artificial entre los ciudadanos de la ciudad de La Paz.
    </p>

    <h3 className="text-2xl font-bold mb-4">Objetivo Específico</h3>
    <ul className="list-disc list-inside text-lg mb-4 lg:mb-8">
      <li>Determinar el grado de familiaridad de los ciudadanos de La Paz con el término Inteligencia artificial.</li>
      <li>Evaluar la percepción de los ciudadanos sobre los beneficios y riesgos de la inteligencia artificial.</li>
      <li>Crear una tabla de distribución sobre el conocimiento de la inteligencia artificial.</li>
      <li>Realizar un diagrama circular (pastel) para comparar distintas preguntas de la encuesta.</li>
      <li>Evaluar la opinión de los ciudadanos sobre la regulación y el futuro de la IA en diversos sectores.</li>
    </ul>
  </section>
</div>

        <section id="key-insights" className="text-center py-16" style={{backgroundColor:"#F4F4F5"}}>
          <h2 className="text-3xl font-bold mb-4">Key Insights</h2>
          <p className="text-lg mb-8">Explore the most significant findings from our comprehensive survey on the state of artificial intelligence.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card/>
            <Card/>
            <Card/>
          </div>
        </section>
        <section id="key-insights" className="text-center justiy-center py-16" >
          <h2 className="text-3xl font-bold mb-4">estts</h2>
          <p className="text-lg mb-8">Explore the most significant findings from our comprehensive survey on the state of artificial intelligence.</p>
          <div className="flex justify-center">
            <Card/>
            <Card/>
          </div>
        </section>
      </main>
  );
}
