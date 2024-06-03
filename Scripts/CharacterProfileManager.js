// CharacterProfileManager.js

// Función para obtener las carpetas dentro de la carpeta Personajes
function obtenerCarpetasPersonajes() {
    // Array para almacenar los nombres de las carpetas
    const carpetas = [];

    // Encontrar todos los enlaces que apuntan a carpetas dentro de la carpeta Personajes
    const enlacesCarpetas = document.querySelectorAll('a[href^="/Novel/Personajes/"]');
    enlacesCarpetas.forEach(enlace => {
        // Obtener la parte de la URL después de "/Personajes/"
        const ruta = enlace.getAttribute('href').substring('/Novel/Personajes/'.length);
        // Obtener el nombre de la carpeta
        const nombreCarpeta = ruta.split('/')[0];
        // Añadir el nombre de la carpeta al array si no está presente
        if (!carpetas.includes(nombreCarpeta)) {
            carpetas.push(nombreCarpeta);
        }
    });

    return carpetas;
}

// Llamar a la función para obtener las carpetas cuando se cargue el script
window.addEventListener('DOMContentLoaded', function() {
    const carpetas = obtenerCarpetasPersonajes();
    console.log('Carpetas dentro de Personajes:', carpetas);
});
