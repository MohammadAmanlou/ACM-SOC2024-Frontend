const colorInput = document.getElementById('colorInput');
const colorBox = document.getElementById('colorBox');

colorInput.addEventListener('input', function() {
    const color = colorInput.value.trim();

    // Validate the Hex color code
    if (/^#?[0-9A-Fa-f]{6}$/.test(color) || /^#?[0-9A-Fa-f]{3}$/.test(color)) {
        const validColor = color.startsWith('#') ? color : `#${color}`;
        colorBox.style.backgroundColor = validColor;
        colorBox.textContent = validColor;
        colorBox.classList.remove('invalid');
    } else if (color === '') {
        // If input is empty, reset to default
        colorBox.style.backgroundColor = 'black';
        colorBox.textContent = 'HTML Color Test';
        colorBox.classList.remove('invalid');
    } else {
        // If invalid, show error
        colorBox.style.backgroundColor = 'black';
        colorBox.textContent = 'INVALID COLOR!';
        colorBox.classList.add('invalid');
    }
});
