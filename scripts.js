// scripts.js

// Función para copiar un enlace al portapapeles
function copyToClipboard(text) {
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
}

// Event listener para copiar enlaces al hacer clic en ellos
const links = document.querySelectorAll('ul.links a');

links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        copyToClipboard(this.href);
        alert('Enlace copiado al portapapeles: ' + this.href);
    });
});
