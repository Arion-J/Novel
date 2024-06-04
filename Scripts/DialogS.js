import CharacterProfileManager from 'https://arion-j.github.io/Novel/Scripts/CharacterProfileManager.js';

// Crear una función para mostrar los nombres de los personajes en la página de diálogos
async function showCharacterNames() {
  const repoUrl = 'https://api.github.com/repos/arion-j/Novel/contents/Personajes';
  const characterProfileManager = new CharacterProfileManager(null, null, repoUrl);
  await characterProfileManager.loadCharacterFolders();
  const characterNames = characterProfileManager.getCharacterNames();
  console.log(characterNames); // Para verificar en la consola

  // Agregar los nombres de los personajes al cuerpo del documento
  document.body.textContent += characterNames.join(', ');
}

// Ejecutar la función para mostrar los nombres de los personajes cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', showCharacterNames);
