// Código anterior optimizado por chatGPT v3.5
// Definir todos los elementos de la aplicación
const elementos = {
  cerrar: document.getElementById('cerrar'),
  solution: document.getElementById('solution'),
  entrada: document.getElementById('entrada'),
  del: document.getElementById('del'),
  parIzq: document.getElementById('par-izq'),
  parDer: document.getElementById('par-der'),
  mod: document.getElementById('mod'),
  pi: document.getElementById('pi'),
  siete: document.getElementById('siete'),
  ocho: document.getElementById('ocho'),
  nueve: document.getElementById('nueve'),
  division: document.getElementById('division'),
  sqrt: document.getElementById('sqrt'),
  cuatro: document.getElementById('cuatro'),
  cinco: document.getElementById('cinco'),
  seis: document.getElementById('seis'),
  multiplicacion: document.getElementById('multiplicacion'),
  pow: document.getElementById('pow'),
  uno: document.getElementById('uno'),
  dos: document.getElementById('dos'),
  tres: document.getElementById('tres'),
  resta: document.getElementById('resta'),
  igual: document.getElementById('igual'),
  cero: document.getElementById('cero'),
  coma: document.getElementById('coma'),
  porcentaje: document.getElementById('porcentaje'),
  suma: document.getElementById('suma')
};

// Agregar eventos a los botones numéricos y operadores
for (const key in elementos) {
  if (key === 'entrada') continue;
  if (elementos.hasOwnProperty(key)) {
    const elemento = elementos[key];
    elemento.addEventListener('click', () => {
      entrada.value += elemento.textContent;
    });
  }
}

// Configurar el botón de igual para realizar el cálculo
elementos.igual.addEventListener('click', () => {
  try {
    solution.value = eval(entrada.value);
    entrada.value = '';
    console.log(solution.value);
    solution.textContent = solution.value;
  } catch (error) {
    console.error(error);
    entrada.value = '';
    solution.value = '';
    solution.textContent = '';
  }
});

// Configurar el botón de Enter para realizar el cálculo
elementos.entrada.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    try {
      solution.value = eval(entrada.value);
      entrada.value = '';
      console.log(solution.value);
      solution.textContent = solution.value;
    } catch (error) {
      console.error(error);
      entrada.value = '';
      solution.value = '';
      solution.textContent = '';
    }
  }
});

// Configurar el botón de porcentaje
elementos.porcentaje.addEventListener('click', () => {
  entrada.value = parseFloat(entrada.value) * 0.01;
});

// Configurar el botón de borrar
elementos.del.addEventListener('click', () => {
  entrada.value = '';
  solution.value = '';
  solution.textContent = '';
});

// Configurar el botón de cerrar ventana
elementos.cerrar.addEventListener('click', () => {
  let x = confirm('Se va a cerrar la ventana, esta de acuerdo: ');
  if (x) window.close();
});
