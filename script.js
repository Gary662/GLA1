
const h1Element = document.createElement('h1');

h1Element.innerText = 'Gary Simwawa'; 
h1Element.style.textAlign = 'center';
h1Element.style.color = '#A9A9A9';

document.body.appendChild(h1Element);

const container = document.createElement('div');
container.style.textAlign = 'center';

const input1 = document.createElement('input');
const input2 = document.createElement('input');
const button = document.createElement('button');

input1.type = 'text';
input2.type = 'text';
button.innerText = 'Calculate Sum';

container.appendChild(input1);
container.appendChild(input2);
container.appendChild(button);


document.body.appendChild(container);

button.addEventListener('click', calculateSum);

const validateInput = (value, inputElement) => {
    try {
        const num = parseFloat(value);
        if (isNaN(num)) {
            throw 'Value is not a number.';
        }
        return num;
    } catch (error) {
        document.body.innerHTML += `<p>Error: ${error}</p>`;
        inputElement.style.border = '2px solid red';
    }
};

function calculateSum() {
    const num1 = validateInput(input1.value, input1);
    const num2 = validateInput(input2.value, input2);

    if (!isNaN(num1) && !isNaN(num2)) {
        const sum = num1 + num2;
        document.body.innerHTML += `<p>Sum: ${sum}</p>`;
    }
}

const body = document.body;
body.style.fontFamily = 'Arial, sans-serif';
body.style.backgroundColor = '#f0f0f0';
body.style.padding = '20px';
body.style.margin = '0';
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.alignItems = 'center';

input1.style.marginBottom = '10px';
input2.style.marginBottom = '10px';
button.style.backgroundColor = 'gray'; 
button.style.color = '#ffffff'; 
button.style.padding = '3px';
button.style.border = '2px';
button.style.cursor = 'pointer';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('p').forEach(errorMsg => {
        errorMsg.style.color = '#e74c3c';
    });
});
