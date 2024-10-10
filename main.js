
document.getElementById('calcular_btn').addEventListener('click', function() {
    const dataEvento = new Date(document.getElementById('data_evento').value);
    const hoje = new Date();
    

    const diff = dataEvento - hoje;


    const diasRestantes = Math.ceil(diff / (1000 * 60 * 60 * 24));

    const diasRestantesElement = document.getElementById('dias_restantes');
    
    if (diasRestantes < 0) {
        diasRestantesElement.textContent = 'O evento já ocorreu!';
    } else {
        diasRestantesElement.textContent = `${diasRestantes} dias restantes até o evento.`;
    }
});
