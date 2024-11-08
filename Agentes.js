class Agente {
    constructor(nombre, rol, habilidades, imagen, descripcion) {
        this.nombre = nombre;
        this.rol = rol;
        this.habilidades = habilidades;
        this.imagen = imagen;
        this.descripcion = descripcion;
    }
}

async function getAgents() {
    try {
        const response = await fetch('https://valorant-api.com/v1/agents');
        const data = await response.json();
        return data.data.map(agent => new Agente(
            agent.displayName,
            agent.role ? agent.role.displayName : "N/A",
            agent.abilities.map(ability => ability.displayName),
            agent.displayIcon,
            agent.description || "No description available"
        ));
    } catch (error) {
        console.error("Error al obtener agentes:", error);
    }
}
