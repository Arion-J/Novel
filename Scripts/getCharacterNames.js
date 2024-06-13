import CharacterProfileManager from './characterProfileManager.js';

export function getCharacterNames(selectElementId, resumeElementId, repoUrl) {
  const characterProfileManager = new CharacterProfileManager(selectElementId, resumeElementId, repoUrl);
  characterProfileManager.init();
  return characterProfileManager.getCharacterNames();
}
