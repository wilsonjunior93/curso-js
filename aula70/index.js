/*const pessoa = {
    nome: 'Luis',
    sobrenome: 'Otávio'
};

const chave = 'sobrenome';
console.log(pessoa['sobrenome']);
console.log(pessoa[chave]);
*/

/*const pessoa1 = new Object();
pessoa1.nome = 'Luis';
pessoa1.sobrenome = 'Otávio';

console.log(pessoa1.nome);
*/

/*const pessoa1 = new Object();
pessoa1.nome = 'Luis';
pessoa1.sobrenome = 'Otávio';
pessoa1.idade = 30;
pessoa1.falaNome = function() { 
return (`${this.nome} está falando seu nome.`)
};
pessoa1.getDataNascimento = function() { 
const dataAtual = new Date();
return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1.falaNome());
console.log(pessoa1.getDataNascimento());
*/

//Factory functions / Contructor functions / Classes
/*function criaPessoa(nome, sobrenome) {
return {
    nome,
    sobrenome,
    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`; 
    }
};
}

const p1 = criaPessoa('Luis', 'Otavio');
console.log(p1.nomeCompleto());
*/

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
}

const p1 = new Pessoa('Luis', 'Miranda');
p1.nome = 'Weslley'
const p2 = new Pessoa('Wilson', 'Junior');

console.log(p1);
console.log(p2);