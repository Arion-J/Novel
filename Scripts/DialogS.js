import { getCharacterNames } from '/Scripts/CharacterProfileManager.js';

document.addEventListener('DOMContentLoaded', async () => {
  const repoUrl = 'https://api.github.com/repos/arion-j/Novel/contents/Personajes';
  const characterNames = await getCharacterNames(repoUrl);
  console.log(characterNames);
});
