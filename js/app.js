const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

document.addEventListener('DOMContentLoaded',()=>{
    formulario.addEventListener('submit',validarBusqueda);
});

function validarBusqueda(e) {
    e.preventDefault();

    const busqueda = document.querySelector('#busqueda').value;

    if (busqueda.length <= 1) {
        
        mostrarMensaje('Busqueda muy corta... Añade mas informacion');
        return;
    };
};

function mostrarMensaje(mensaje) {

    const alertaPrevia = document.querySelector('.alerta');
    
    if (!alertaPrevia) {
        const alerta = document.createElement('div');
        alerta.classList.add('bg-gray-100', 'p-3', 'text-center', 'mt-3', 'alerta');
        alerta.textContent = mensaje;

        formulario.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    };
};