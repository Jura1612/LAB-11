let allAgents = []; // Variable para almacenar todos los agentes

function renderAgents(agents) {
    const container = document.getElementById('agent-container');
    container.innerHTML = '';  // Limpiar contenido previo
    agents.forEach(agent => {
        const agentCard = document.createElement('div');
        agentCard.classList.add('card');
        
        agentCard.innerHTML = `
            <img src="${agent.imagen}" alt="Imagen de ${agent.nombre}">
            <h2>${agent.nombre}</h2>
            <h3>${agent.rol}</h3>
            <p>${agent.descripcion}</p>
            <p>Habilities:</p>
            <ul>${agent.habilidades.map(habilidad => `<li>${habilidad}</li>`).join('')}</ul>
        `;
        
        container.appendChild(agentCard);
    });
}

function filterAgents(searchText) {
    const filteredAgents = allAgents.filter(agent =>
        agent.nombre.toLowerCase().includes(searchText.toLowerCase())
    );
    renderAgents(filteredAgents);
}

document.addEventListener('DOMContentLoaded', async () => {
    allAgents = await getAgents(); // Almacena todos los agentes en la variable global
    if (allAgents) {
        renderAgents(allAgents); // Renderiza los agentes al cargar la página
    }

    // Agregar un evento para filtrar cuando el usuario escribe en la barra de búsqueda
    const searchBar = document.querySelector('.search-bar');
    searchBar.addEventListener('input', () => {
        filterAgents(searchBar.value); // Filtra en tiempo real
    });
});
