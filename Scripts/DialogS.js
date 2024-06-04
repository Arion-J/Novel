import characterProfileManager from './CharacterProfileManager.js';

// Muestra los nombres de los personajes en la consola
function showCharacterNames() {
  const characterNames = characterProfileManager.getCharacterNames();
  console.log(characterNames);
}

// Ejecutar la función para mostrar los nombres de los personajes cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', showCharacterNames);
