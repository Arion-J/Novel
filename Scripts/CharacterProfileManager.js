const repoUrl = 'https://api.github.com/repos/arion-j/Novel/contents/Personajes';

(async () => {
  const response = await fetch(repoUrl);
  const folders = (await response.json()).filter(item => item.type === 'dir');
  const selectElement = document.getElementById('selectpj');
  
  folders.forEach(({ name }) => {
    selectElement.add(new Option(name, name));
  });

  selectElement.addEventListener('change', async ({ target: { value } }) => {
    const characterContentUrl = `https://arion-j.github.io/Novel/Personajes/${value}/`;
    const contentResponse = await fetch(characterContentUrl);
    document.getElementById('resumepj').innerHTML = await contentResponse.text();
  });
})();
