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

console.log(`Total de ingredientes: ${ingredientes.length}`)

let personagem = {
    nome: "Teste",
    idade : 90,
    pais: 'brazil',
    olhos: ['preto', 'azul'],
    caracteristicas:{
      forca : 5,
      magia: 5,
      stamina : 15
    }
    

}
console.log(`${personagem.nome} tem ${personagem.idade}`)
console.log(personagem.caracteristicas.magia);
console.log(personagem.olhos[1]);

let personagem = {
    nome: 'ksmode',
    idade: 90,
    pais: 'Brazil',
    olhos: ['preto', 'azul'],
    caracteristicas:{
      forca : 5,
      magia: 5,
      stamina : 15
    }
}

personagem.nome = 'pedro';
personagem.caracteristicas.forca += 5;
personagem.olhos.push('verde');

console.log(personagem.olhos);

let personagem = {
    nome: 'ksmode',
    idade: 90,
    carros: [
        {modelo: 'fiat', cor: 'preto'},
        {modelo: 'ferrari', cor: 'vermelho'}
    ]
}

console.log(personagem.carros[1].modelo);


let pessoa = {
    nome: 'ksmode',
    sobrenome: 'oliveira',
    idade: 90,
    nomeCompleto: function(){
        return 'blaaaa la blaa'
    }
}

console.log(pessoa.nomeCompleto())*/
/*
let cores = [
    {nome: 'preto', qt: 10},
    {nome: 'azul', qt: 5},
    {nome: 'vermelho', qt: 15}
]*/

// cores.push('verde')
/*
for(let n = 0; n < cores.length; n++) {
    console.log(cores[n])
}

for(let i in cores){
    // console.log(cores[i].nome)
    cores[i].nome = cores[i].nome.toUpperCase();
}

/*
for(let cor of cores){
   console.log(`Nome: ${cor.nome} - ${cor.qt}`)
}
console.log(cores)

let numero = 0;

while(numero < 10) {
    console.log(`O numero da vez é ${numero}`);
    numero++;
}

for(let numero = 0; numero <= 10; numero++){
    console.log(`O numero da vez é ${numero}`);
}

while(condicional){
    console.log("bla bla")
}

let frutas = ['banana', 'morango', 'cereja', 'maça'];
for(let x in frutas){
    console.log(frutas[x]);
}

// contando de 1 ate 100
let n = 1;
while(n <= 100) {
    console.log(n);
    n++;
}*/

// let frutas = ['banana', 'morango', 'cereja', 'maça'];
// frutas[frutas.length - 1] = 'Pera';

// frutas.pop();
// frutas.push('KsGostoso');
// frutas.pop();


// delatar o ultimo frutas.pop()
// deleta o primeiro frutas.shift();

//console.log(frutas.join(', '));
// console.log(frutas)



// frutas.push('Kiwi');
 //console.log(frutas)
// console.log(frutas.length);


// let frutas = ['banana', 'morango', 'cereja', 'maça'];

// // muda a ordem do seu array frutas.sort();
// // inverte o seu array frutas.reverse();
// console.log(frutas);

// let cars = [
//     {brand: 'fiat', year: 2022},
//     {brand: 'bmw', year: 2018},
//     {brand: 'ferrari', year: 2020},
// ]
// //do maior ao menor so trocar o b, pelo a
// cars.sort((a, b) => b.year - a.year);

// console.log(cars)

// let frutas = ['banana', 'morango', 'cereja', 'maça'];

// let bigFrutas = frutas.filter((value) => {

//     return value.length > 4;
//     // return item.length > 4;

//     // if(item.length > 4){
//     //     return true;
//     // }else{
//     //     return false;
//     // }
// });

// let frutas = ['banana', 'morango', 'cereja', 'maça'];

// let ok = frutas.some((value) => {
//     return value.length > 3;
//     // if(value.length > 3){
//     //     return true;
//     // }else{
//     //     return false;
//     // }
// });

// if(ok){
//     console.log('Todos são maior que 3')
// } else{
//     console.log("Não sao todos maior que 3")
// }

// let frutas = ['banana', 'morango', 'cereja', 'maça'];

// if(frutas.includes('banana')){
//     console.log("Tem banana sim")
// } else {
//     console.log("N tem")
// }

function clicou(){
    /*const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');
    //ul.children[0].append("(alterado)")
    ul.children[0].innerHTML += "(alterado)";
    // console.log(teste.children[0].children)
    //console.log("Clicou no botao")
    // console.log(ul)
    //ul.innerHTML = ul.innerHTML + "<li> Item alterado</li>";
    // ul.innerHTML += "<li> Item alterado</li>";

    //para substituir
    //ul.children[0].innerHTML = "Item  <strong> alterado! </strong>";
    //console.log(ul.outerHTML)
    //ul.outerHTML = '<strong>Alterado</strong>'*/

    // const input = document.querySelector('input');
    // const botao = document.querySelector('.botao')

    // if(input.getAttribute('type') == 'text'){
    //   input.setAttribute('type', 'password')
    //   input.setAttribute('value', 'Mostrar senha')
    // } else{
    //     input.setAttribute('type', 'text')
    //     input.setAttribute('value', 'Ocultar sneha')
    //     botao.value = 'ocultar senha';
    // }

   /* const li = document.querySelector('li');
    
    li.style.backgroundColor = 'blue';
    li.style.fontSize = '20px';
    li.style.textTransform = 'uppercase'
    li.style.color = '#fff'*/

    const button = document.querySelector('button');
    //button.classList.remove('azul')
    /*if(button.classList.contains('azul')) {
        button.classList.contains('azul');
        button.classList.contains('verde');

    }else{
        button.classList.contains('azul');
        button.classList.contains('verde');

    }*/

    //button.classList.toggle('azul')
    /**button.classList.replace('azul', 'verde')
    console.log(button.classList)*/  
}

// let botao = document.querySelector('.botao')
// botao.addEventListener("click", clicou)]
/*
function apertou() {
   console.log("APERTOU")
}

function segurou() {
    console.log("SEGUROU")
}
*/

/*
function soltou(e) {
    //console.log("SOLTOU")
    console.log("Telca apertada: " + e.code)
    console.log("SHIFT? " + e.shiftKey);
    console.log("---")
}

input = document.querySelector('input');
input.addEventListener('keyup', soltou);*/

/*
const input = document.querySelector('input');
const lista = document.querySelector('li');

//eventos
input.addEventListener('keyup', handlekeyup)

//funcoes
function handlekeyup(e){
    if(event.key === 'Enter'){
        //console.log("Ok");
        //console.log(input.value);
        lista.innerHTML += '<li>' + input.value + '</li>'
        const newli = document.querySelector('li');
        
    }
}*/

//orientaçao a ojetos
/*
class Person {
    _age = 10;
    steps = 0;
    constructor(firstName, lastName){
       this.firstName = firstName;
       this.lastName = lastName;
    }

    takeAStep (){
        this.steps++;
    }
    get fullname(){
        return `${this.firstName} ${this.lastName}`;

    }
    get age(){
        return this._age;

    }
    set age(x) {
        if (typeof x === 'number') {
            this._age = x;
        }
    }
}


let p1 = new Person("Ksmode", "Oliveira");
let p2 = new Person("Maria", "kaka");
let p3 = new Person("Pedro", "ox");

 p1._age = 'abc';
console.log(`${p1.fullname}: Tem ${p1.age} anos `);




/*
console.log(`P1 = ${p1.name} tem ${p1.age}`);
console.log(`P2 = ${p1.name} tem ${p1.age}`);
console.log(`P3 = ${p1.name} tem ${p1.age}`);

p1.takeAStep();
p1.takeAStep();
console.log(`Passos de ${p1.name}: ${p1.steps}`);
console.log(`Passos de ${p2.name}: ${p2.steps}`);
*/

class Person {

    age = 0;

    constructor(name){
       this.name = name;
    //    this.age = age;
    }
}

let p1 = new Person("Ksmode");
let p2 = new Person("Maria");
let p3 = new Person("Pedro");

p1.age = 20;

console.log(`P1 = ${p1.name} tem ${p1.age}`);
console.log(`P1 = ${p2.name} tem ${p2.age}`);
console.log(`P1 = ${p3.name} tem ${p3.age}`);