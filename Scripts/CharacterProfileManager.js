class CharacterProfileManager {
  constructor(repoUrl, selectElementId, resumeElementId) {
    this.repoUrl = repoUrl;
    this.selectElement = document.getElementById(selectElementId);
    this.resumeElement = document.getElementById(resumeElementId);
    this.characters = [];
  }

  async init() {
    await this.fetchCharacterFolders();
    this.populateSelectElement();
    if (this.characters.length > 0) {
      await this.loadCharacterContent(this.characters[0]);
    }
    this.selectElement.addEventListener('change', (event) => {
      this.loadCharacterContent(event.target.value);
    });
  }

  async fetchCharacterFolders() {
    const response = await fetch(this.repoUrl);
    const folders = (await response.json()).filter(item => item.type === 'dir');
    this.characters = folders.map(folder => folder.name);
  }

  populateSelectElement() {
    this.characters.forEach(characterName => {
      this.selectElement.add(new Option(characterName, characterName));
    });
  }

  async loadCharacterContent(characterName) {
    const characterContentUrl = `https://arion-j.github.io/Novel/Personajes/${characterName}/`;
    const contentResponse = await fetch(characterContentUrl);
    this.resumeElement.innerHTML = await contentResponse.text();
  }
}

// Usage
const repoUrl = 'https://api.github.com/repos/arion-j/Novel/contents/Personajes';
const selectElementId = 'selectpj';
const resumeElementId = 'resumepj';
const characterProfileManager = new CharacterProfileManager(repoUrl, selectElementId, resumeElementId);
characterProfileManager.init();
