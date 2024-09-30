function calcular(num) {
    const resultado = fatorial(num);
    mostrarResultado(resultado);
}

function fatorial(n) {
    if (n <= 1) return 1;
    return n * fatorial(n - 1);
}

function mostrarResultado(resultado) {
    const tbody = document.querySelector('#resultado tbody');

    tbody.innerHTML = `<tr><td> =${resultado}</td></tr>`;
    document.getElementById('resultado').style.display = 'block';
}


document.querySelectorAll('button').forEach((button) => {
    button.onclick = () => calcular(parseInt(button.innerText));
});
