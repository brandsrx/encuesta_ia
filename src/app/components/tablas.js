"use client"
import React, { useEffect, useState } from 'react';
import { Bar,Doughnut} from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement,CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale,ArcElement, BarElement, Title, Tooltip, Legend);

export function TablaFrecuencia({ pregunta ,seccion}) {
   const [jsonData, setJsonData] = useState(null);
   const [itemsTable, setItemsTable] = useState([]);
    const ab = ["a","b","c","d","e","f","g","h"]
  // Función para sumar un vector de números
  function sumarVector(vector) {
    return vector.reduce((suma, valor) => suma + valor, 0);
  }

  // Cargar datos del archivo JSON al montar el componente
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/frecuencias_encuesta.json'); // Ruta relativa al archivo JSON
        if (!response.ok) {
          throw new Error('Error al cargar el archivo JSON');
        }
        const data = await response.json();
        const aux = seccion == "1"?data.seccion1[pregunta.cod]:data.seccion2[pregunta.cod];
        
        let vecAbs = Object.values(aux.frecuencia_absoluta);
        let vecRel = Object.values(aux.frecuencia_relativa);
        let vecPor = Object.values(aux.frecuencia_porcentual);
        vecAbs.splice(pregunta.nroPreguntas)
        vecRel.splice(pregunta.nroPreguntas)
        vecPor.splice(pregunta.nroPreguntas)
        let n = {
          nombre: pregunta.tipo,
          vecAbs,
          vecRel,
          vecPor,
          total1: sumarVector(vecAbs),
          total2: sumarVector(vecRel),
          total3: sumarVector(vecPor),
        };

        setJsonData(n);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const items = [];

    // Verifica que pregunta y jsonData estén definidos y no sean nulos
    if (pregunta && jsonData) {
        for (let i = 0; i < pregunta.nroPreguntas; i++) {
            // Verifica que jsonData[i] esté definido antes de acceder a sus propiedades

                items.push(
                    <tr key={i}>
                        <td className="px-4 py-2 border">{pregunta[ab[i]]}</td>
                        <td className="px-4 py-2 border">{jsonData.vecAbs[i]}</td>
                        <td className="px-4 py-2 border">{jsonData.vecRel[i]}</td>
                        <td className="px-4 py-2 border">{jsonData.vecPor[i]} %</td>
                    </tr>
                );
            
        }
    }

    // Guarda los elementos generados en el estado
    setItemsTable(items);

}, [pregunta, jsonData]); // Dependencias: pregunta y jsonData
  
//   <td key={i} className="px-4 py-2 border">{pregunta[ab[i]]}</td>
  // Renderizar el componente de tabla con los datos obtenidos
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-100 border-b">{pregunta.tipo}</th>
            <th className="px-4 py-2 bg-gray-100 border-b">Frecuencia Absoluta</th>
            <th className="px-4 py-2 bg-gray-100 border-b">Frecuencia Relativa</th>
            <th className="px-4 py-2 bg-gray-100 border-b">Frecuencia Porcentual %</th>
          </tr>
        </thead>
        <tbody>
        {itemsTable}
          {jsonData && (
            <tr>
              <td className="px-4 py-2 border font-bold">Totales</td>
              <td className="px-4 py-2 border font-bold">{jsonData.total1}</td>
              <td className="px-4 py-2 border font-bold">{jsonData.total2}</td>
              <td className="px-4 py-2 border font-bold">{Math.round(jsonData.total3)} %</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export function DiagramaBarras({data,variables,cod,seccion}){
    if (!data) {
        return <p>Cargando datos...</p>; // Mostrar un mensaje de carga si los datos no están listos
    }
    const dataJson = (seccion == "1")?data.seccion1[cod]:data.seccion2[cod];
    const ab = ["a","b","c","d","e","f","g","h"]
    const frecuenciaAbsoluta = Object.values(dataJson.frecuencia_absoluta);
    const items = [];
    for(let i =0;i<data.nroPreguntas;i++){
        items.push(data[ab[i]])
    }
    const chartData = {
        labels: variables,
        datasets: [
            {
                label: 'Frecuencia Absoluta',
                data: frecuenciaAbsoluta,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Frecuencia Absoluta por Categoría',
            },
        },
    };

    return <Bar data={chartData} options={options} />;
}
export function DiagramaCircular({ data, variables,cod ,seccion}){
    if (!data) {
        return <p>Cargando datos...</p>; // Mostrar un mensaje de carga si los datos no están listos
    }
    const dato = (seccion == "1")?data.seccion1[cod]:data.seccion2[cod];
    const frecuenciaAbsoluta = Object.values(dato.frecuencia_porcentual);
    const labels = Object.keys(dato.frecuencia_porcentual);

    const chartData = {
        labels: variables,
        datasets: [
            {
                label: 'Frecuencia porcentual %',
                data: frecuenciaAbsoluta,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(199, 199, 199, 0.2)',
                    'rgba(83, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(199, 199, 199, 1)',
                    'rgba(83, 102, 255, 1)'
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Frecuencia Porcentual % por Categoría',
            },
        },
    };

    return <Doughnut data={chartData} options={options} />;
}