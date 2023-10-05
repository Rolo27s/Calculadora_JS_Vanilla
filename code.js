// Defino todos los elementos de la aplicación
const cerrar = document.getElementById('cerrar');

const solution = document.getElementById('solution');
const entrada = document.getElementById('entrada');

const del = document.getElementById('del');
const parIzq = document.getElementById('par-izq');
const parDer = document.getElementById('par-der');
const mod = document.getElementById('mod');
const pi = document.getElementById('pi');
const siete = document.getElementById('siete');
const ocho = document.getElementById('ocho');
const nueve = document.getElementById('nueve');
const division = document.getElementById('division');
const sqrt = document.getElementById('sqrt');
const cuatro = document.getElementById('cuatro');
const cinco = document.getElementById('cinco');
const seis = document.getElementById('seis');
const multiplicacion = document.getElementById('multiplicacion');
const pow = document.getElementById('pow');
const uno = document.getElementById('uno');
const dos = document.getElementById('dos');
const tres = document.getElementById('tres');
const resta = document.getElementById('resta');
const igual = document.getElementById('igual');
const cero = document.getElementById('cero');
const coma = document.getElementById('coma');
const porcentaje = document.getElementById('porcentaje');
const suma = document.getElementById('suma');

del.addEventListener('click', () => {
    entrada.value = '';
    solution.value = '';
    solution.textContent = '';
});

cero.addEventListener('click', () => {
    entrada.value += '0';
});

uno.addEventListener('click', () => {
    entrada.value += '1';
});

dos.addEventListener('click', () => {
    entrada.value += '2';
});

tres.addEventListener('click', () => {
    entrada.value += '3';
});

cuatro.addEventListener('click', () => {
    entrada.value += '4';
});

cinco.addEventListener('click', () => {
    entrada.value += '5';
});

seis.addEventListener('click', () => {
    entrada.value += '6';
});

siete.addEventListener('click', () => {
    entrada.value += '7';
});

ocho.addEventListener('click', () => {
    entrada.value += '8';
});

nueve.addEventListener('click', () => {
    entrada.value += '9';
});

parIzq.addEventListener('click', () => {
    entrada.value += '(';
});

parDer.addEventListener('click', () => {
    entrada.value += ')';
});

mod.addEventListener('click', () => {
    entrada.value += '%';
});

pi.addEventListener('click', () => {
    entrada.value += '3.1415';
});

division.addEventListener('click', () => {
    entrada.value += '/';
});

sqrt.addEventListener('click', () => {
    entrada.value += 'Math.sqrt(';
});

multiplicacion.addEventListener('click', () => {
    entrada.value += '*';
});

pow.addEventListener('click', () => {
    entrada.value += '**2';
});

resta.addEventListener('click', () => {
    entrada.value += '-';
});

suma.addEventListener('click', () => {
    entrada.value += '+';
});

coma.addEventListener('click', () => {
    entrada.value += '.';
});

porcentaje.addEventListener('click', () => {
    entrada.value *= 0.01;
});

igual.addEventListener('click', () => {
    // Code to solve the problem
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

// Configuramos el botón de igual en el intro.
entrada.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        // Code to solve the problem
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
    }});

cerrar.addEventListener('click', () => {
    let x = confirm('Se va a cerrar la ventana, esta de acuerdo: ');
    if (x) window.close();
});

// Add event listener on keydown - Reconocimiento de las teclas
/* document.addEventListener('keydown', (event) => {
  var name = event.key;
  var code = event.code;
  // Alert the key name and key code on keydown
  alert(`Key pressed ${name} \r\n Key code value: ${code}`);
}, false); */