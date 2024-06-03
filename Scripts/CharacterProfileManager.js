// CharacterProfileManager.js

// Función para crear un elemento select y añadirlo al div con id "selectpj"
function createSelectElement() {
    // Obtener el div donde se añadirá el select
    const selectDiv = document.getElementById('selectpj');
    
    // Crear el elemento select
    const select = document.createElement('select');
    
    // Añadir algunas opciones de ejemplo
    const options = [
        { value: 'opcion1', text: 'Opción 1' },
        { value: 'opcion2', text: 'Opción 2' },
        { value: 'opcion3', text: 'Opción 3' }
    ];

    // Iterar sobre las opciones y añadirlas al select
    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.value;
        optionElement.textContent = option.text;
        select.appendChild(optionElement);
    });
    
    // Añadir el select al div
    selectDiv.appendChild(select);
}

// Llamar a la función cuando se cargue el script
window.addEventListener('DOMContentLoaded', createSelectElement);

