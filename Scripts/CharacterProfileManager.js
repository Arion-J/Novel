// Array para almacenar los nombres de los personajes y sus descripciones
let charactersData = [];

// Función para obtener los nombres de los personajes y sus descripciones
async function getCharactersData() {
    // Ruta base del directorio de personajes
    const charactersDirectory = "https://arion-j.github.io/Novel/Personajes/";

    // Lista de nombres de personajes (puedes modificarla según tus necesidades)
    const characters = ["Lorenzo", "OtroPersonaje", "Etc"];

    // Iterar sobre cada personaje
    for (let character of characters) {
        // URL del archivo HTML del personaje
        const characterHTML = `${charactersDirectory}${character}.html`;

        try {
            // Obtener el contenido del archivo HTML del personaje
            const response = await fetch(characterHTML);
            const htmlContent = await response.text();

            // Verificar si el archivo HTML contiene un enlace a resume.html
            if (htmlContent.includes("resume.html")) {
                // Si se encuentra un enlace a resume.html, agregar el nombre del personaje y su descripción al array
                charactersData.push({
                    name: character,
                    description: "Descripción del personaje obtenida de resume.html"
                });
            }
        } catch (error) {
            console.error(`Error al obtener datos del personaje ${character}: ${error}`);
        }
    }

    // Imprimir los resultados en la pantalla
    charactersData.forEach(character => {
        console.log(`Nombre: ${character.name}, Descripción: ${character.description}`);
    });
}

// Llamar a la función para obtener los datos de los personajes
getCharactersData();
