/*let nome = "Kaick"; // string
let idade = 90; //number
let logado = true; //boolean
let lista = ["Ovo", "massa", "corante", 30]; //array
let NomeCompleto = { nome: "Kaick", idade: 90} // object

// o comando exibe os dados no CONSOLE
console.log(typeof NomeCompleto)

let carro = "Ferrari";
console.log(carro);

let valor = 19.99;
console.log(valor);

let cidade = "Sao paulo";
console.log(cidade);

let nome = "kaick";
let idade = 90;

console.log(nome);
console.log(idade);

const nome = "ksmodee";
console.log(nome)

nome = "Kaick";
console.log(nome);

let nome ="ksmode";
let sobre = "Oliveira";

let NomeCompleto = nome + ' ' + sobre;

console.log(NomeCompleto)

let n1 = 15;
let n2 = 20;
let n3= 15;

let soma = (n1 + n2) - n3;

console.log(soma);


let nome = "Ksmode";
let sobrenome = "Oliveira";

//let NomeCompleto = nome + ' ' + sobrenome;
let nomeCompleto = `${nome} ${sobrenome} barbosa`;

console.log("Nome: " + nomeCompleto);

let idade = 90;
let idadeString = `Idade: ${idade} anos `;

console.log(idadeString);

let idade = 18;

if(idade >= 17){
    console.log("Eh maior de idade")
}else{
    console.log("Menor d eidae")
}

let idade = 20;

if(idade >= 20){
   idade = idade + 15;
   console.log("Idade adicionada com sucesso");
   console.log(idade)
}*/

// let idade = 17;

// // if(idade >= 18){
// //    if(idade < 60){
// //     console.log("Vc eh um adulto")
// //    }
// // }

// if(idade <= 18){
//     console.log("Voce é uma criança")
// }else if(idade >= 18 && idade < 60){
//     console.log("Voce e um adulto")
// }else if(idade >= 60){
//     console.log("Voce é um idoso")
// }

// let idade = 1;

// let adulto = idade >= 18 && idade < 60;

// if(idade > 18){
//   console.log("é audlto")
// }else{
//     console.log("Nao e adulto")
// }
/*
let isMember = 0;

let shipping = isMember ? 2 : 10;

console.log(isMember ? 'Voce é membro' : 'Voce nao e membro')
console.log("Frete: " + shipping)

let age = 14;

let isAdult = (age >= 18 && age <60 ? 'Sim' : 'Nao');

console.log(isAdult);

let prof = "policial";

console.log("Profissão: " +prof);

switch(prof){
    case 'fiscal':
        console.log("Sua camisa sera VERDE")
        break;
    case 'bombeiro':
        console.log("Sua camisa sera RED")
       break;
    case 'policial':
        console.log("Sua camisa sera AZUL")
      break;
    default:
        console.log("Nenhuma")
    break;
}

// - Oque eh uma função?

function gravidade() {
    console.log("A gravidade do planeta é: ")
    console.log(9.8)
}
console.log("Opa");
gravidade();*/

// function somando(){
//     let nome = Number(window.prompt('Digite um numero'));
//     // let n2 = Number(window.prompt('Digite um outro numero para a soma'));
//     somando = n1 + n2;

//     let res = document.querySelector('section#res')
//     res.innerHTML = `<p> A soma entre <mark>${n1}</mark> e <mark>${n2}</mark> é igual a <strong>${somando}</strong>!</p>`
// }
/*
function somar(n1, n2) {
   let resultado = n1 + n2;
   console.log('Resultado: ' + resultado)
}
somar(10, 15);

function nomeCompleto(nome, sobrenome){ 
    return `${nome} ${sobrenome}`;
}

let completo = nomeCompleto("Ksmode", "Oliveira");
console.log("Completo: " +completo)

function maiorDeIdade(idade){
    if(idade >= 18){
        return true;
    }else{
        return false;
    }
}

let idade = 65;
let verificacao = maiorDeIdade(idade);

if(verificacao){
    console.log("E maior de idade")
}else{
    console.log("Eh menor de idade")
}

let idade = 19;
function maiorDeIdade(idade){
   if(idade > 18){
    console.log("Maior de idade")
   }else{
    console.log("De menor")
   }
}

maiorDeIdade(idade);*/
/*
function validar(usuario, senha){
    if(usuario === 'ksmode' && senha === '1234'){
        return true;
    }else{
        return false;
    }
}

const usuario = "ksmode";
let senha = '123';
let validacao = validar(usuario, senha);
if(validacao){
    console.log("acesso concedido");
} else {
    console.log("acesso negado")
}
*/
/*console.log("Painel ADMIN");

function validadeok(user, password){
    if(user === 'kaick' && password === '1234'){
        return true;
    }else{
        return false;
    }
}

let user = 'kaick';
let password = '1234'
let verificacao = validadeok(user, password);
if(verificacao){
    console.log("Acesso liberado, seja bem-vindo novamente " + user)
}else{
    console.log("acesso negado voce nao e um ADMIN")
}

// function soomar(x,y){
//     return x + y;
// }

const somar = (x, y) => x + y;
console.log(somar(10, 5));

// function sobrenome(sob){
//     return 'ksmode' + sob;
// }

const sobrenome = (sob) => 'ksmode' + sob;

const sobrenome = (sob) => 'ksmode' + sob;

const sobrenome = (sob) => {
    return 'ksmode' + sob;
}

const sobrenome = (sob) => {
    let nomeCompleto = 'ksmode' + sob;
    return nomeCompleto;
}

console.log(sobrenome(" Oliver"));
let count = 0;

function add(){
    let count = 0;
    count += 10;
}

add()
add()
console.log(count)



function addSquares(a, b){
    function square(x){
        return x * x;
    }
   const

    let sqrA = square(a);
    let sqrB = square(b);
    return sqrA + sqrB;
}

console.log(addSquares(2,3))

let listas = ['blabla', ['xx', 'yy']];

let segundo = lista[1];

let ingredientes = [
    'agua',
    'farinha',
    'ovo',
    'corante',
    'sal',
];

//POP REMOVE - SHIFT REMOVE O PRIMEIRO

// ingredientes.push('cebola');
ingredientes.shift();

console.log(ingredientes);

console.log(`Total de ingredientes: ${ingredientes.length}`)*/


     






