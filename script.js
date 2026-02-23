// Referencias a las pantallas
const pantallaOp = document.getElementById('operacion');
const pantallaRes = document.getElementById('resultado');
let operacionActual = "";

// Función para añadir números y signos
function agregar(valor) {
    operacionActual += valor;
    pantallaOp.innerText = operacionActual;
}

// Borrar todo (Botón C)
function limpiar() {
    operacionActual = "";
    pantallaOp.innerText = "";
    pantallaRes.innerText = "0.00";
}

// Borrar último carácter (Botón ←)
function retroceso() {
    operacionActual = operacionActual.slice(0, -1);
    pantallaOp.innerText = operacionActual;
}

// Apagar pantalla
function apagar() {
    operacionActual = "";
    pantallaOp.innerText = "";
    pantallaRes.innerText = "";
}

// Cálculo con precisión de 2 decimales
function calcular() {
    try {
        if (operacionActual === "") return;
        let resultado = eval(operacionActual);
        
        // Desglose de resultado con 2 decimales
        pantallaRes.innerText = parseFloat(resultado).toFixed(2);
    } catch (e) {
        pantallaRes.innerText = "Error";
    }
}

// --- Soporte para Teclado Físico ---
document.addEventListener('keydown', (event) => {
    const tecla = event.key;

    // Números y operadores
    if (/[0-9\+\-\*\/\.]/.test(tecla)) {
        agregar(tecla);
    }
    // Enter para el igual
    if (tecla === 'Enter') {
        event.preventDefault();
        calcular();
    }
    // Borrar (Backspace)
    if (tecla === 'Backspace') {
        retroceso();
    }
    // Limpiar (Escape)
    if (tecla === 'Escape') {
        limpiar();
    }
});