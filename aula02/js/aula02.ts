import { Aluno } from "../Aluno.js";
import { Animal } from "../Animal.js";

console.log("Its working");

let animal1: Animal = new Animal("Canino", "Thornado", 15.0, ["Terrestre", "qq lugar"]);

console.log(animal1);
console.log(animal1.nome);
console.log(animal1.peso);
console.log(animal1.habitat[0]);
console.log(animal1.getEspecie);

animal1.nome = "Maia";
animal1.peso = 30.5;
animal1.habitat[1];
animal1.setEspecie = "Caninus";



console.log(animal1);
console.log(animal1.nome);
console.log(animal1.peso);
console.log(animal1.habitat[0]);
console.log(animal1.getEspecie);

let animal2: Animal = new Animal("Felino", "Pipoca", 1.8, ["Terrestre", "O que ele bem entender"]);
console.log(animal2);
console.log(animal2.nome);
console.log(animal2.peso);
console.log(animal2.habitat[1]);
console.log(animal2.getEspecie);

animal2.nome = "Pudim";
animal2.peso = 2.3;
animal2.habitat[0];
animal2.setEspecie = "Gatinho",

console.log(animal2);
console.log(animal2.nome);
console.log(animal2.peso);
console.log(animal2.habitat[1]);
console.log(animal2.getEspecie);

let ariana:Aluno = new Aluno("Ariana", 22, [7.0, 10.0, 8.75]);
console.log(ariana);
console.log(ariana.nome);
console.log(ariana.idade);
console.log(ariana.calcularMedia());
console.log(ariana.apresentar());

let cecilia:Aluno = new Aluno("Cecilia", 12, [5.0, 10.0]);
console.log(cecilia.nome);
console.log(cecilia.idade);
console.log(cecilia.calcularMedia());
console.log(cecilia.apresentar());

