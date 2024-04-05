function colorirDia() {
    let days = parseInt(document.getElementById("day").value);
    let color = document.getElementById('color').value;
    let calendar = document.getElementById('calendar');
    let td = calendar.getElementsByTagName('td')[days + 2];
    
    // Verificar se o número do dia é negativo
    if (days < 0) {
        alert("Não é possível marcar um número negativo de dia.");
        return;
    }

    // Verificar se há mais de 1 entrega por dia
    let entregasNesteDia = 0;
    let todosTds = calendar.getElementsByTagName('td');
    for (let i = 0; i < todosTds.length; i++) {
        if (todosTds[i].style.backgroundColor === color) {
            entregasNesteDia++;
        }
    }
    if (entregasNesteDia >= 1) {
        alert("Não é possível marcar mais de 1 entrega por dia.");
        return;
    }

    // Verificar se há mais de 3 entregas por mês
    let entregasNesteMes = 0;
    let mesAtual = new Date().getMonth();
    for (let i = 0; i < todosTds.length; i++) {
        let dataTd = new Date(todosTds[i].getAttribute('data-date'));
        if (dataTd.getMonth() === mesAtual && todosTds[i].style.backgroundColor === color) {
            entregasNesteMes++;
        }
    }
    if (entregasNesteMes >= 3) {
        alert("Não é possível marcar mais de 3 entregas por mês.");
        return;
    }

    // Se todas as verificações passarem, colorir o dia
    td.style.backgroundColor = color;
}
