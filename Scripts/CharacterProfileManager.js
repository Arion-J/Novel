const repoUrl = 'https://api.github.com/repos/arion-j/Novel/contents/Personajes';

(async () => {
  const response = await fetch(repoUrl);
  const folders = (await response.json()).filter(item => item.type === 'dir');
  const selectElement = document.getElementById('selectpj');
  
  folders.forEach(({ name }) => {
    selectElement.add(new Option(name, name));
  });

  const loadCharacterContent = async (characterName) => {
    const characterContentUrl = `https://arion-j.github.io/Novel/Personajes/${characterName}/`;
    const contentResponse = await fetch(characterContentUrl);
    document.getElementById('resumepj').innerHTML = await contentResponse.text();
  };

  // Load the content of the first character by default
  if (folders.length > 0) {
    loadCharacterContent(folders[0].name);
  }

  selectElement.addEventListener('change', ({ target: { value } }) => {
    loadCharacterContent(value);
  });
})();
