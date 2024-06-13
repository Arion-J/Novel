import CharacterProfileManager from './characterProfileManager.js';
const characterProfileManager = new CharacterProfileManager(selectElementId, resumeElementId, repoUrl);
characterProfileManager.init();
const characterNames = characterProfileManager.getCharacterNames();
console.log("Nombres de personajes:");
characterNames.forEach(name => {
  console.log(name);
});
