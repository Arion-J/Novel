// CharacterProfileManager.js

// Función para crear un elemento select y añadirlo al div con id "selectpj"
function createSelectElement() {
    // Obtener el div donde se añadirá el select
    const selectDiv = document.getElementById('selectpj');
    
    // Crear el elemento select
    const select = document.createElement('select');

    // Encontrar todos los enlaces que contienen nombres de personajes
    const characterLinks = document.querySelectorAll('a[href*="/Personajes/"]');
    characterLinks.forEach(link => {
        const optionElement = document.createElement('option');
        optionElement.value = link.href;
        optionElement.textContent = link.textContent.trim();
        select.appendChild(optionElement);
    });

    // Añadir el select al div
    selectDiv.appendChild(select);
}

// Llamar a la función cuando se cargue el script
window.addEventListener('DOMContentLoaded', createSelectElement);
