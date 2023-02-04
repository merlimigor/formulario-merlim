let nome = document.querySelector("#nome")
let email = document.querySelector("#email")
let sobrenome = document.querySelector("#sobrenome")
let cpf = document.querySelector("#cpf")
let campo = document.querySelector("#aplicacao1")
let campo2 = document.querySelector("#aplicacao2")
let campo3 = document.querySelector("#aplicacao3")
let senioridade = document.querySelector("#Senioridade")
let titulo = document.querySelector('#titulo')
let experiencia = document.querySelector('#experiencia')
const tecnologias = document.querySelectorAll('.tecnologia1')


function pdf () {
    let gerar = new jsPDF()
    gerar.text("" + titulo.textContent,80,20)
    gerar.text("Nome: " + nome.value,10,40)
    gerar.text("Email: " + email.value,10,50)
    gerar.text("Sobrenome: " + sobrenome.value,10,60)
    gerar.text("cpf: " + cpf.value,10,70)
    if (campo.checked) {
        gerar.text('Função: Front-end',10, 80)
    } else if (campo2.checked) {
        gerar.text('Função: back-end',10,80)
    } else if (campo3.checked) {
        gerar.text('Função: Fullstack',10,80)
    }
    gerar.text("Senioridade: " + senioridade.value,10,90)

    var conhecidas = "Tecnologias Conhecidas: "
    tecnologias.forEach((tecnologia) => {
    if (tecnologia.checked){
        for(var label of tecnologia.labels){
            conhecidas += label.textContent +', '
        } 
    }
    })
    conhecidas = conhecidas.substring(0, conhecidas.length - 2)
    gerar.text(conhecidas,10,100)
    gerar.text("Experiência: " + experiencia.value,10,110,)
    gerar.save("cadastro")

}


const validarCpf = (cpf=0) => {
    cpf = cpf.replace(/\.|-/g, '')

    let soma = 0;
    soma += cpf[0] *10;
    soma += cpf[1] *9;
    soma += cpf[2] *8;
    soma += cpf[3] *7;
    soma += cpf[4] *6;
    soma += cpf[5] *5;
    soma += cpf[6] *4;
    soma += cpf[7] *3;
    soma += cpf[8] *2;
    soma = (soma * 10) % 11;
    if(soma == 10 || soma == 11){
        soma = 0;
    }
    if(soma != cpf[9]){
        alert('CPF Invalido')
        return false
    }

    let soma2 = 0;
    soma2 += cpf[0] *11;
    soma2 += cpf[1] *10;
    soma2 += cpf[2] *9;
    soma2 += cpf[3] *8;
    soma2 += cpf[4] *7;
    soma2 += cpf[5] *6;
    soma2 += cpf[6] *5;
    soma2 += cpf[7] *4;
    soma2 += cpf[8] *3;
    soma2 += cpf[9] *2;
    soma2 = (soma2 * 10) % 11;

    if(soma2 == 10 || soma2 == 11){
        soma2 = 0;
    }

    if(soma2 != cpf[10]){
        alert('CPF Invalido')
        return false
    }

    if(true){
        alert('Cadastro Confirmado')
        pdf();
    }
}

const inserirCPF = () => {
    let variavel = document.querySelector('#cpf')
    if( variavel.value != ''){
        validarCpf(variavel.value);
    }
}