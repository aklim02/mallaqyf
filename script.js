function marcarRamo(element) {
  if (element.classList.contains("bloqueado")) return;

  element.classList.toggle("aprobado");
  revisarDesbloqueos();
}

function revisarDesbloqueos() {
  const ramos = document.querySelectorAll(".ramo");

  ramos.forEach(ramo => {
    const prer = ramo.dataset.prer;
    if (!prer) return;

    const ids = prer.split(",");
    const aprobados = ids.every(id => {
      const el = document.querySelector(`.ramo[data-id="${id.trim()}"]`);
      return el && el.classList.contains("aprobado");
    });

    if (aprobados) {
      ramo.classList.remove("bloqueado");
    } else {
      ramo.classList.add("bloqueado");
    }
  });
}
