//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.buttons button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const id = button.id;
            const value = button.textContent;

            if (id === 'C') {
                display.value = '';
            } else if (id === 'back') {
                display.value = display.value.slice(0, -1);
            } else if (id === 'equal') {
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = 'Error';
                }
            } else {
                display.value += value;
            }
        });
    });
});
