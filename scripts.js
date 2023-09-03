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

// Event listener para copiar enlaces al hacer clic en los botones
const buttons = document.querySelectorAll('.links a');

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const link = this.getAttribute('href');
        if (link) {
            // Redirigir al enlace
            window.location.href = link;
        } else {
            // Copiar al portapapeles si no hay un enlace
            const buttonText = this.innerText;
            copyToClipboard(buttonText);
            alert('Texto copiado al portapapeles: ' + buttonText);
        }
    });
});
