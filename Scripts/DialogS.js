// Importa la clase CharacterProfileManager
import CharacterProfileManager from './CharacterProfileManager.js';

// Crear una función para cargar y mostrar los nombres de los personajes
async function showCharacterNames() {
  // URL del repositorio donde se encuentran los personajes
  const repoUrl = 'https://api.github.com/repos/arion-j/Novel/contents/Personajes';

  // Crear una instancia de CharacterProfileManager
  const characterProfileManager = new CharacterProfileManager(null, null, repoUrl);

  // Inicializar el objeto para cargar los nombres de los personajes
  await characterProfileManager.loadCharacterFolders();

  // Obtener los nombres de los personajes
  const characterNames = characterProfileManager.getCharacterNames();

  // Crear el texto con los nombres de los personajes
  const characterNamesText = characterNames.join(', '); // Unir los nombres con una coma y un espacio

  // Mostrar el texto en el cuerpo del documento
  document.body.textContent += characterNamesText;
}

// Ejecutar la función para mostrar los nombres de los personajes cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', showCharacterNames);
