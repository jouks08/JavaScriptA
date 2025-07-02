// var não respeita o bloco de código

function testeVar(){
    var mensagem = "Olá var";

    if(true){
        var mensagem = "Troquei a mensagem";
        console.log(mensagem);
    }

    console.log (mensagem);
}
testeVar();

// let respeita o escopo de bloco

function testeLet(){
    let mensagem = "Olá com let";
    if(true){
        let mensagem = "Mensagem nova no bloco if";
        console.log(mensagem);
    }
    console.log(mensagem);


}

testeLet();

var x1 = 10;
var x1 = 20;
console.log(x1);

let x2 = 5;
// let x2 = 7;

console.log(x2);

var x3;

console.log(x3);


// constantes
const _constante = 42;
console.log(_constante);


const array = [1, 2, 4];
array.push(7);
console.log(array);

const pessoa = {nome: "jair", idade: 25};
pessoa.nome = "Outro nome";
console.log(pessoa);




function saudacao(){
    alert("Bem vindo ao nosso site");
}