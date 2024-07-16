const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');
const x = path.join(__dirname,"..")
console.log(path.join(x,"../public"))
const excelFilePath = path.join(x,"../public/ia.xlsx")
const workbook = xlsx.readFile(excelFilePath);
const sheetName = workbook.SheetNames[0];

const worksheet = workbook.Sheets[sheetName];
const excelData = xlsx.utils.sheet_to_json(worksheet, { header: 1 });

let objectPregunta = []

let filteredData = excelData.filter(item => item.length > 0);
let filterPreguntas = filteredData[1].filter(item => item != undefined)

for(let k = 2;k<=excelData.length;k++){
    if(filteredData[k] == undefined) break
    let personaEnc = {
        nro:0,
        seccion1:null,
        seccion2:null
    }
    const respDataS1 = []
    const respDataS2 = []
    personaEnc.nro = filteredData[k][0]

    for(var i = 1 ;i <=5 ;i++){
        respDataS1.push({ [filterPreguntas[i-1]]: filteredData[k][i] });
    }
    for(var i = 6 ;i < filteredData[k].length ;i++){
        respDataS2.push({ [filterPreguntas[i-1]]: filteredData[k][i] });
    }
    personaEnc.seccion1 = respDataS1
    personaEnc.seccion2 = respDataS2
    objectPregunta.push(personaEnc)
}

let jsonContent = JSON.stringify(objectPregunta, null, 2);
    
let nombreArchivo = 'datos.json';

fs.writeFile(nombreArchivo, jsonContent, 'utf8', (err) => {
  if (err) {
    console.error('Error al escribir el archivo JSON:', err);
    return;
  }
  console.log(`Archivo JSON '${nombreArchivo}' guardado correctamente.`);
});




