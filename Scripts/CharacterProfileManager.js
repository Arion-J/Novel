class CharacterProfileManager {
  constructor(selectElementId, resumeElementId, repoUrl) {
    this.repoUrl = repoUrl;
    this.selectElement = document.getElementById(selectElementId);
    this.resumeElement = document.getElementById(resumeElementId);
    this.characters = [];
  }

  async init() {
    await this.loadCharacterFolders();
    if (this.characters.length > 0) {
      this.loadCharacterContent(this.characters[0]);
    }
    this.setupSelectEvent();
  }

  async loadCharacterFolders() {
    const response = await fetch(this.repoUrl);
    const folders = (await response.json()).filter(item => item.type === 'dir');
    this.characters = folders.map(folder => folder.name);
    this.populateSelectElement();
  }

  populateSelectElement() {
    this.characters.forEach(characterName => {
      this.selectElement.add(new Option(characterName, characterName));
    });
  }

  setupSelectEvent() {
    this.selectElement.addEventListener('change', ({ target: { value } }) => {
      this.loadCharacterContent(value);
    });
  }

  async loadCharacterContent(characterName) {
    const characterContentUrl = `https://arion-j.github.io/Novel/Personajes/${characterName}/`;
    const contentResponse = await fetch(characterContentUrl);
    this.resumeElement.innerHTML = await contentResponse.text();
  }

  getCharacterNames() {
    return this.characters;
  }
}

export default CharacterProfileManager;
