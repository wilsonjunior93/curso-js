/*const { nome, sobrenome, falaNome } = require('./mod1');
console.log(nome, sobrenome);
console.log(falaNome());
*/

const { Pessoa } = require('./mod');

const p1 = new Pessoa('Luiz');
console.log(p1);