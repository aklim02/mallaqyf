document.addEventListener('DOMContentLoaded', () => {
    const materias = document.querySelectorAll('.materia');

    function actualizarEstado() {
        // Primero, leer qué materias están marcadas
        const marcadas = new Set();
        materias.forEach(m => {
            if(m.checked) marcadas.add(m.dataset.nombre);
        });

        // Ahora, activar o desactivar materias según prerrequisitos
        materias.forEach(m => {
            const prereqs = m.dataset.prerrequisitos;
            if (!prereqs) {
                // No tiene prerrequisitos, siempre activada
                m.disabled = false;
            } else {
                // Prerrequisitos separados por coma
                const prereqArray = prereqs.split(',').map(p => p.trim());
                // Está desbloqueada si todos sus prerrequisitos están marcados
                const desbloqueada = prereqArray.every(pr => marcadas.has(pr));
                m.disabled = !desbloqueada;
            }
        });
    }

    // Cada vez que se cambia un checkbox, actualiza estado
    materias.forEach(m => {
        m.addEventListener('change', actualizarEstado);
    });

    // Inicializar el estado al cargar la página
    actualizarEstado();
});
