class CharacterProfileManager {
  constructor(selectElementId, resumeElementId, repoUrl) {
    this.repoUrl = repoUrl;
    this.selectElement = document.getElementById(selectElementId);
    this.resumeElement = document.getElementById(resumeElementId);
    this.characters = [];
  }

  // Método para inicializar la carga de personajes y configurar el evento del selector
  async init() {
    await this.loadCharacterFolders();
    if (this.characters.length > 0) {
      this.loadCharacterContent(this.characters[0]);
    }
    this.setupSelectEvent();
  }

  // Método para cargar las carpetas de personajes desde el repositorio
  async loadCharacterFolders() {
    const response = await fetch(this.repoUrl);
    const folders = (await response.json()).filter(item => item.type === 'dir');
    this.characters = folders.map(folder => folder.name);

    this.populateSelectElement();
  }

  // Método para llenar el elemento select con los nombres de los personajes
  populateSelectElement() {
    this.characters.forEach(characterName => {
      this.selectElement.add(new Option(characterName, characterName));
    });
  }

  // Método para configurar el evento change del elemento select
  setupSelectEvent() {
    this.selectElement.addEventListener('change', ({ target: { value } }) => {
      this.loadCharacterContent(value);
    });
  }

  // Método para cargar el contenido de un personaje específico
  async loadCharacterContent(characterName) {
    const characterContentUrl = `https://arion-j.github.io/Novel/Personajes/${characterName}/`;
    const contentResponse = await fetch(characterContentUrl);
    this.resumeElement.innerHTML = await contentResponse.text();
  }

  // Método para obtener solo los nombres de los personajes
  getCharacterNames() {
    return this.characters;
  }
}

// Asegurarse de que el DOM esté completamente cargado antes de inicializar la clase
document.addEventListener('DOMContentLoaded', () => {
  const repoUrl = 'https://api.github.com/repos/arion-j/Novel/contents/Personajes';
  const characterProfileManager = new CharacterProfileManager('selectpj', 'resumepj', repoUrl);
  characterProfileManager.init();

  // Obtener los nombres de los personajes
  const characterNames = characterProfileManager.getCharacterNames();
  console.log(characterNames);
  CharacterProfileManager.exports = {characterNames};
});
