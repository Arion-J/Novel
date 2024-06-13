document.addEventListener('DOMContentLoaded', async function() {
  const codeSelect = document.getElementById('codeSelect');
  const loadCodeBtn = document.getElementById('loadCodeBtn');
  const clearCodeBtn = document.getElementById('clearCodeBtn');
  const codeDisplay = document.getElementById('codeDisplay');

  // Cargar opciones de código disponibles
  await loadCodeOptions();

  // Evento al hacer clic en "Cargar Código"
  loadCodeBtn.addEventListener('click', async function() {
    const selectedOptions = Array.from(codeSelect.selectedOptions).map(option => option.value);
    loadCode(selectedOptions);
  });

  // Evento al hacer clic en "Limpiar Código"
  clearCodeBtn.addEventListener('click', function() {
    codeDisplay.innerHTML = '';
  });

  // Función para cargar las opciones de código disponibles
  async function loadCodeOptions() {
    const repoUrl = 'https://api.github.com/repos/arion-j/Novel/contents/Scripts';
    const response = await fetch(repoUrl);
    const files = await response.json();
    
    files.forEach(file => {
      if (file.type === 'file') {
        const option = document.createElement('option');
        option.textContent = file.name;
        option.value = file.download_url; // URL para descargar el archivo
        codeSelect.appendChild(option);
      }
    });
  }

  // Función para cargar y mostrar el contenido de los archivos seleccionados
  async function loadCode(selectedOptions) {
    codeDisplay.innerHTML = ''; // Limpiar el contenido anterior

    for (const url of selectedOptions) {
      const response = await fetch(url);
      const fileContent = await response.text();

      // Crear un elemento <code> para mostrar el contenido
      const codeElement = document.createElement('code');
      codeElement.textContent = `/*** Código de ${url} ***/\n\n${fileContent}\n\n`;
      codeDisplay.appendChild(codeElement);
    }
  }
});
