function pressKey(key) {
    const display = document.getElementById('display');

    if (key === 'AC') {
        clearDisplay();
    } else if (key === '=') {
        calculate();
    } else if (key === '%') {
        applyPercentage();
    } else {
        appendValue(key);
    }
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.innerText = '0';
}

function calculate() {
    const display = document.getElementById('display');
    try {

        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = 'Error';
    }
}

function applyPercentage() {
    const display = document.getElementById('display');
    try {

        let value = parseFloat(display.innerText);
        display.innerText = value / 100;
    } catch (error) {
        display.innerText = 'Error';
    }
}

function appendValue(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

document.querySelectorAll('.keys button').forEach(button => {
    button.addEventListener('click', function () {
        pressKey(button.textContent);
    });
});
