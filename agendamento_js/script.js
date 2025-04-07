alert ("agendamento");

let totalAgendamento = 2;
let agendamentoAtual = 0;

let responsavel = []; 
let dataEntrada = []; 



while (agendamentoAtual <= totalAgendamento) {
    let entrada = (prompt('Digite a data e o horário de entrada do veículo: '));
    dataEntrada[agendamentoAtual] = entrada;

    let responsavelNome = (prompt('Digite o responsável pelo veículo: '));
    responsavel[agendamentoAtual] = responsavelNome;

    agendamentoAtual++;
}

for (let contador = 0; contador <= totalAgendamento; contador++) {
    console.log ("=========================================");
    console.log (responsavel[contador]);
    console.log (dataEntrada[contador]);
    console.log ("=========================================");
}