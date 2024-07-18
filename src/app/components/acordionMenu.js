import { useState } from 'react';
import Image from 'next/image';
import './AccordionMenu.css';
export default function AccordionMenu() {
  const [openSection, setOpenSection] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    {
      id: 'seccion1',
      title: 'Sección 1',
      items: ['Pregunta 1', 'Pregunta 2', 'Pregunta 3','Pregunta 4','Pregunta 5'],
    },
    {
      id: 'seccion2',
      title: 'Sección 2',
      items: ['Pregunta 1', 'Pregunta 2', 'Pregunta 3','Pregunta 4','Pregunta 5','Pregunta 6', 'Pregunta 7', 'Pregunta 8','Pregunta 9','Pregunta 10','Pregunta 11', 'Pregunta 12', 'Pregunta 13','Pregunta 14','Pregunta 15'],
    },
  ];

  return (
    <nav className="max-w-sm mx-auto bg-white shadow-md rounded-lg fixed  left" style={{top:"55px"}}>
      <button onClick={toggleMenu}><Image src="./menu.svg" width={30} height={30}/></button>
    <ul className={`flex flex-col  p-4 menu-container bg-white shadow-md  rounded-lg ${menuVisible ? 'open' : ''}`} style={{width:"250px"}}>
        <li className='w-full text-left text-lg font-medium text-gray-700 hover:text-blue-600 focus:outline-none transition-colors duration-300'>
           <a href='#'> Analisis de Encuesta</a>
        </li>
        <button onClick={toggleMenu} className='btn'>X</button>
      {sections.map((section) => (
        <li key={section.id} className="mb-2">
          <button
            onClick={() => toggleSection(section.id)}
            className="w-full text-left text-lg font-medium text-gray-700 hover:text-blue-600 focus:outline-none transition-colors duration-300"
          >
            {section.title}
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ${
              openSection === section.id ? 'max-h-screen' : 'max-h-0'
            }`}
          >
            <div className="mt-2 space-y-2 pl-4 max-h-48 overflow-y-auto">
              <ul>
                {section.items.map((item, index) => (
                  <li key={index} className="text-md text-gray-600 hover:text-blue-600">
                    <a href={`#${section.id+item.toLowerCase().replace(/\s/g, '-')}`}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </li>
      ))}
       <li className='w-full text-left text-lg font-medium text-gray-700 hover:text-blue-600 focus:outline-none transition-colors duration-300'>
        <a href='#tablas_bibariantes'> Tablas bibariantes</a>
        </li>
        <li className='w-full text-left text-lg font-medium text-gray-700 hover:text-blue-600 focus:outline-none transition-colors duration-300'>
        <a href='#resultado_Final'>Resultado total de la encuesta</a>
        </li>
    </ul>
  </nav>
  );
}
