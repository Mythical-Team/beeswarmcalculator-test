const D3Input = document.getElementById('D3');
const resultElement = document.getElementById('result');

function calculate() {
  const D3Value = parseFloat(D3Input.value);
  let result;

  if (D3Value === 100000) {
    result = 0;
  } else if (D3Value < 102000) {
    result = 1;
  } else {
    const exponent = D3Value <= 1824000 ? 5 / 6 : 10 / 17;
    result = Math.floor(Math.pow((D3Value / 1000 - 100), exponent)) + 1;
  }

  resultElement.textContent = result;
}

D3Input.addEventListener('input', calculate);