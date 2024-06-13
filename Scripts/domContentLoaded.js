import CharacterProfileManager from './characterProfileManager.js';

document.addEventListener('DOMContentLoaded', () => {
  const repoUrl = 'https://api.github.com/repos/arion-j/Novel/contents/Personajes';
  const characterProfileManager = new CharacterProfileManager('selectpj', 'resumepj', repoUrl);
  characterProfileManager.init();
});
