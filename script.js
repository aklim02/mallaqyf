const materiasData = [
  // Primer Año - I Semestre
  {
    semestre: 'Primer Año - I Semestre',
    materias: [
      { nombre: "Química general I", abre: ["Química general II","Química orgánica I"], prerrequisitos: [] },
      { nombre: "Biología Celular", abre: ["Morfología"], prerrequisitos: [] },
      { nombre: "Elementos de Álgebra y Cálculo", abre: ["Física","Fisicoquímica aplicada"], prerrequisitos: [] },
      { nombre: "Formación General I", abre: ["Formación General II"], prerrequisitos: [] },
      { nombre: "Introducción a las Ciencias Farmacéuticas", abre: [], prerrequisitos: [] }
    ]
  },
  // Primer Año - II Semestre
  {
    semestre: 'Primer Año - II Semestre',
    materias: [
      { nombre: "Química general II", abre: ["Fisicoquímica aplicada","Química analítica"], prerrequisitos: ["Química general I"] },
      { nombre: "Química orgánica I", abre: ["Química orgánica II"], prerrequisitos: ["Química general I"] },
      { nombre: "Morfología", abre: ["Fisiología humana"], prerrequisitos: ["Biología Celular"] },
      { nombre: "Física", abre: ["Fisicoquímica aplicada"], prerrequisitos: ["Elementos de Álgebra y Cálculo"] },
      { nombre: "Inglés I", abre: ["Inglés II"], prerrequisitos: [] }
    ]
  },
  // Segundo Año - III Semestre
  {
    semestre: 'Segundo Año - III Semestre',
    materias: [
      { nombre: "Fisicoquímica aplicada", abre: ["Farmacocinética y Biofarmacia"], prerrequisitos: ["Química general II","Física"] },
      { nombre: "Química orgánica II", abre: ["Bioquímica general","Laboratorio de Bioquímica general","Farmoquímica I"], prerrequisitos: ["Química orgánica I"] },
      { nombre: "Fisiología humana", abre: ["Bioquímica general","Laboratorio de Bioquímica general","Fisiopatología y Semiología"], prerrequisitos: ["Morfología"] },
      { nombre: "Química analítica", abre: ["Química Analítica e Instrumental"], prerrequisitos: ["Química general II"] },
      { nombre: "Inglés II", abre: ["Inglés III"], prerrequisitos: ["Inglés I"] }
    ]
  },
  // Segundo Año - IV Semestre
  {
    semestre: 'Segundo Año - IV Semestre',
    materias: [
      { nombre: "Bioquímica general", abre: ["Microbiología","Laboratorio de Microbiología General"], prerrequisitos: ["Química orgánica II","Fisiología humana"] },
      { nombre: "Laboratorio de Bioquímica general", abre: ["Microbiología","Laboratorio de Microbiología General"], prerrequisitos: ["Química orgánica II","Fisiología humana"] },
      { nombre: "Fisiopatología y Semiología", abre: ["Salud Pública I","Farmacología Humana I","Bioquímica Clínica"], prerrequisitos: ["Fisiología humana"] },
      { nombre: "Química Analítica e Instrumental", abre: ["Farmoquímica I","Integrador I: Laboratorio Químico, Clínico, Forense y Biofarmacéutico"], prerrequisitos: ["Química analítica"] },
      { nombre: "Farmacocinética y Biofarmacia", abre: ["Farmacología humana I","Tecnología Farmacéutica I"], prerrequisitos: ["Fisicoquímica aplicada"] },
      { nombre: "Inglés III", abre: ["Inglés IV"], prerrequisitos: ["Inglés II"] }
    ]
  },
  // Tercer Año - V Semestre
  {
    semestre: 'Tercer Año - V Semestre',
    materias: [
      { nombre: "Microbiología", abre: ["Fundamentos de Biología Molecular y Biotecnología","Tecnología Farmacéutica II"], prerrequisitos: ["Bioquímica general","Laboratorio de Bioquímica general"] },
      { nombre: "Laboratorio de Microbiología General", abre: ["Fundamentos de Biología Molecular","Tecnología Farmacéutica II"], prerrequisitos: ["Bioquímica general","Laboratorio de Bioquímica general"] },
      { nombre: "Salud Pública I", abre: ["Farmacovigilancia y Educación en salud","Salud Pública II"], prerrequisitos: ["Fisiopatología y Semiología"] },
      { nombre: "Farmoquímica I", abre: ["Botánica y Farmacognosia","Farmoquímica II"], prerrequisitos: ["Química orgánica II"] },
      { nombre: "Farmacología Humana I", abre: ["Farmacología Humana II","Botánica y Farmacognosia"], prerrequisitos: ["Fisiopatología y Semiología"] },
      { nombre: "Inglés IV", abre: [], prerrequisitos: ["Inglés III"] }
    ]
  },
  // Tercer Año - VI Semestre
  {
    semestre: 'Tercer Año - VI Semestre',
    materias: [
      { nombre: "Fundamentos de Biología Molecular y Biotecnología", abre: ["Bioquímica Clínica"], prerrequisitos: ["Microbiología","Laboratorio de Microbiología General"] },
      { nombre: "Tecnología Farmacéutica I", abre: ["Tecnología Farmacéutica II"], prerrequisitos: ["Farmacocinética y Biofarmacia"] },
      { nombre: "Farmacología Humana II", abre: ["Fármacoquimica II","Fármacovigilancia y Educación en Salud","Farmacología Humana III"], prerrequisitos: ["Farmacología Humana I"] },
      { nombre: "Botánica y Farmacognosia", abre: ["Farmacología Humana III"], prerrequisitos: ["Farmoquímica I","Farmacología Humana I"] },
      { nombre: "Fármacoquimica II", abre: ["Toxicología Clínica y Forense"], prerrequisitos: ["Farmoquímica I"] }
    ]
  },
  // Cuarto Año - VII Semestre
  {
    semestre: 'Cuarto Año - VII Semestre',
    materias: [
      { nombre: "Fármacovigilancia y Educación en Salud", abre: ["Salud Pública II","Farmacia Clínica y Atención Farmacéutica I"], prerrequisitos: ["Farmacología Humana II"] },
      { nombre: "Tecnología Farmacéutica II", abre: ["Tecnología Cosmética"], prerrequisitos: ["Tecnología Farmacéutica I"] },
      { nombre: "Farmacología Humana III", abre: ["Farmacia Clínica y Atención Farmacéutica I"], prerrequisitos: ["Farmacología Humana II","Botánica y Farmacognosia"] },
      { nombre: "Bioquímica Clínica", abre: ["Farmacia Clínica y Atención Farmacéutica I","Toxicología Clínica y Forense"], prerrequisitos: ["Fundamentos de Biología Molecular y Biotecnología"] },
      { nombre: "Formación General II", abre: ["Formación General III"], prerrequisitos: ["Formación General I"] }
    ]
  },
  // Cuarto Año - VIII Semestre
  {
    semestre: 'Cuarto Año - VIII Semestre',
    materias: [
      { nombre: "Salud Pública II", abre: ["Farmacoeconomía y Marketing","Administración y Gestión en Salud"], prerrequisitos: ["Fármacovigilancia y Educación en Salud","Salud Pública I"] },
      { nombre: "Tecnología Cosmética", abre: ["Gestión y Control de Calidad Farmacéutico y de Alimentos","Integrador I: Laboratorio Químico, Clínico, Forense y Biofarmacéutico"], prerrequisitos: ["Tecnología Farmacéutica II"] },
      { nombre: "Farmacia Clínica y Atención Farmacéutica I", abre: ["Farmacia Clínica y Atención Farmacéutica II","Administración y Gestión en Salud"], prerrequisitos: ["Farmacología Humana III","Bioquímica Clínica","Fármacovigilancia y Educación en Salud"] },
      { nombre: "Toxicología Clínica y Forense", abre: ["Farmacia Clínica y Atención Farmacéutica II","Integrador I: Laboratorio Químico, Clínico, Forense y Biofarmacéutico"], prerrequisitos: ["Fármacoquimica II","Bioquímica Clínica"] },
      { nombre: "Formación General III", abre: ["Formación General IV"], prerrequisitos: ["Formación General II"] }
    ]
  },
  // Quinto Año - IX Semestre
  {
    semestre: 'Quinto Año - IX Semestre',
    materias: [
      { nombre: "Farmacoeconomía y Marketing", abre: ["Ética y Legislación Farmacéutica","Gestión de recursos y Evaluación de Proyectos","Práctica en Farmacia Comunitaria"], prerrequisitos: ["Salud Pública II"] },
      { nombre: "Gestión y Control de Calidad Farmacéutico y de Alimentos", abre: ["Práctica en Farmacia Comunitaria"], prerrequisitos: ["Tecnología Cosmética"] },
      { nombre: "Farmacia Clínica y Atención Farmacéutica II", abre: ["Farmacia Hospitalaria","Integrador II: Atención Clínica","Práctica en Farmacia Comunitaria"], prerrequisitos: ["Farmacia Clínica y Atención Farmacéutica I"] },
      { nombre: "Integrador I: Laboratorio Químico, Clínico, Forense y Biofarmacéutico", abre: ["Práctica en Farmacia Comunitaria"], prerrequisitos: ["Química Analítica e Instrumental","Toxicología Clínica y Forense","Tecnología Cosmética"] },
      { nombre: "Administración y Gestión en Salud", abre: ["Ética y Legislación Farmacéutica","Farmacia Hospitalaria","Gestión de recursos y Evaluación de Proyectos","Práctica en Farmacia Comunitaria"], prerrequisitos: ["Salud Pública II","Farmacia Clínica y Atención Farmacéutica I"] }
    ]
  },
  // Quinto Año - X Semestre
  {
    semestre: 'Quinto Año - X Semestre',
    materias: [
      { nombre: "Ética y Legislación Farmacéutica", abre: ["Internado Farmacéutico"], prerrequisitos: ["Farmacoeconomía y Marketing","Administración y Gestión en Salud"] },
      { nombre: "Farmacia Hospitalaria", abre: ["Internado Farmacéutico"], prerrequisitos: ["Farmacia Clínica y Atención Farmacéutica II","Administración y Gestión en Salud"] },
      { nombre: "Integrador II: Atención Clínica", abre: ["Internado Farmacéutico"], prerrequisitos: ["Farmacia Clínica y Atención Farmacéutica II"] },
      { nombre: "Gestión de recursos y Evaluación de Proyectos", abre: ["Internado Farmacéutico"], prerrequisitos: ["Farmacoeconomía y Marketing","Administración y Gestión en Salud"] },
      { nombre: "Práctica en Farmacia Comunitaria", abre: ["Internado Farmacéutico"], prerrequisitos: ["Farmacoeconomía y Marketing","Gestión y Control de Calidad Farmacéutico y de Alimentos","Farmacia Clínica y Atención Farmacéutica II","Integrador I: Laboratorio Químico, Clínico, Forense y Biofarmacéutico","Administración y Gestión en Salud"] },
      { nombre: "Formación General IV", abre: [], prerrequisitos: ["Formación General III"] }
    ]
  },
  // Sexto Año - XI Semestre
  {
    semestre: 'Sexto Año - XI Semestre',
    materias: [
      { nombre: "Internado Farmacéutico", abre: [], prerrequisitos: ["Ética y Legislación Farmacéutica","Farmacia Hospitalaria","Integrador II: Atención Clínica","Gestión de recursos y Evaluación de Proyectos","Práctica en Farmacia Comunitaria"] }
    ]
  }
];

// Variables globales
const mallaContainer = document.getElementById('malla');
let estadoMaterias = {};

// Crear UI de malla
function crearMalla() {
  materiasData.forEach(semestreData => {
    const sec = document.createElement('section');
    sec.className = 'semestre';
    const h2 = document.createElement('h2');
    h2.textContent = semestreData.semestre;
    sec.appendChild(h2);

    const ul = document.createElement('div');
    ul.className = 'lista-materias';

    semestreData.materias.forEach(materia => {
      const divMateria = document.createElement('div');
      divMateria.className = 'materia';

      const input = document.createElement('input');
      input.type = 'checkbox';
      input.id = materia.nombre;
      input.dataset.nombre = materia.nombre;
      input.disabled = materia.prerrequisitos.length > 0; // inicialmente bloqueados si tienen prereqs

      // Si ya está guardado en estado, restaurar
      if(estadoMaterias[materia.nombre]) {
        input.checked = true;
        input.disabled = false;
        divMateria.classList.add('checked');
      }

      const label = document.createElement('label');
      label.htmlFor = materia.nombre;
      label.textContent = materia.nombre;

      divMateria.appendChild(input);
      divMateria.appendChild(label);
      ul.appendChild(divMateria);
    });

    sec.appendChild(ul);
    mallaContainer.appendChild(sec);
  });
}

// Actualizar estado y desbloquear
function actualizarEstado() {
  // Leer todos los checkboxes
  const inputs = document.querySelectorAll('input[type="checkbox"]');

  // Guardar qué materias están marcadas
  estadoMaterias = {};
  inputs.forEach(input => {
    estadoMaterias[input.dataset.nombre] = input.checked;
  });

  // Recorrer y actualizar disabled y estilos
  inputs.forEach(input => {
    const materia = encontrarMateriaPorNombre(input.dataset.nombre);
    if(!materia) return;

    // Verificar si prerrequisitos están todos marcados
    const todosPrerrequisitosMarcados = materia.prerrequisitos.every(pr => estadoMaterias[pr]);

    if (materia.prerrequisitos.length === 0) {
      input.disabled = false; // Siempre activo si no tiene prereqs
    } else {
      input.disabled = !todosPrerrequisitosMarcados;
    }

    // Si está marcado y habilitado => estilo checked
    if(input.checked) {
      input.parentElement.classList.add('checked');
    } else {
      input.parentElement.classList.remove('checked');
    }
  });

  guardarEstado();
}

// Buscar materia en el array global por nombre
function encontrarMateriaPorNombre(nombre) {
  for(let semestre of materiasData) {
    for(let mat of semestre.materias) {
      if(mat.nombre === nombre) return mat;
    }
  }
  return null;
}

// Guardar estado en localStorage
function guardarEstado() {
  localStorage.setItem('estadoMaterias', JSON.stringify(estadoMaterias));
}

// Cargar estado desde localStorage
function cargarEstado() {
  const estadoGuardado =
