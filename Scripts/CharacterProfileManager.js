const repoUrl = 'https://api.github.com/repos/arion-j/Novel/contents/Personajes';

(async () => {
  try {
    const response = await fetch(repoUrl);
    const folders = (await response.json()).filter(item => item.type === 'dir');
    const selectElement = document.getElementById('selectpj');
    folders.forEach(({ name }) => {
      const option = new Option(name, name);
      selectElement.appendChild(option);
    });
  } catch (error) {
    console.error('Error al obtener las carpetas:', error);
  }
})();
