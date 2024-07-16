import pandas as pd
import json
import os


# Cargar el archivo JSON
with open('../src/app/datos.json', 'r') as file:
    data = json.load(file)

# Inicializar listas para almacenar las respuestas
seccion1_respuestas = []
seccion2_respuestas = []

# Extraer las respuestas del JSON
for entry in data:
    seccion1 = {list(item.keys())[0]: list(item.values())[0] for item in entry['seccion1']}
    seccion2 = {list(item.keys())[0]: list(item.values())[0] for item in entry['seccion2']}
    seccion1_respuestas.append(seccion1)
    seccion2_respuestas.append(seccion2)

# Crear DataFrames para cada sección
df_seccion1 = pd.DataFrame(seccion1_respuestas)
df_seccion2 = pd.DataFrame(seccion2_respuestas)

# Calcular tablas de distribución de frecuencia absoluta para cada pregunta en cada sección
frecuencia_absoluta_seccion1 = df_seccion1.apply(pd.Series.value_counts).fillna(0).astype(int)
frecuencia_absoluta_seccion2 = df_seccion2.apply(pd.Series.value_counts).fillna(0).astype(int)

# Calcular tablas de distribución de frecuencia relativa para cada pregunta en cada sección
frecuencia_relativa_seccion1 = frecuencia_absoluta_seccion1 / len(df_seccion1)
frecuencia_relativa_seccion2 = frecuencia_absoluta_seccion2 / len(df_seccion2)

# Calcular tablas de distribución de frecuencia porcentual para cada pregunta en cada sección
frecuencia_porcentual_seccion1 = frecuencia_relativa_seccion1 * 100
frecuencia_porcentual_seccion2 = frecuencia_relativa_seccion2 * 100

# Función para convertir frecuencias en formato JSON
def convert_to_json(frecuencia_absoluta, frecuencia_relativa, frecuencia_porcentual):
    frecuencia_json = {}
    for col in frecuencia_absoluta.columns:
        frecuencia_json[col] = {
            "frecuencia_absoluta": frecuencia_absoluta[col].to_dict(),
            "frecuencia_relativa": frecuencia_relativa[col].to_dict(),
            "frecuencia_porcentual": frecuencia_porcentual[col].to_dict()
        }
    return frecuencia_json

# Convertir las frecuencias de las secciones a formato JSON
frecuencia_json_seccion1 = convert_to_json(frecuencia_absoluta_seccion1, frecuencia_relativa_seccion1, frecuencia_porcentual_seccion1)
frecuencia_json_seccion2 = convert_to_json(frecuencia_absoluta_seccion2, frecuencia_relativa_seccion2, frecuencia_porcentual_seccion2)

# Guardar los datos en un archivo JSON
result = {
    "seccion1": frecuencia_json_seccion1,
    "seccion2": frecuencia_json_seccion2
}

with open('../public/frecuencias_encuesta.json', 'w') as outfile:
    json.dump(result, outfile, indent=4)

print("Frecuencias guardadas en frecuencias_encuesta.json")
