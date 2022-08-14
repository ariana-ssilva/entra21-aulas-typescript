export class Aluno {
    constructor(nome, idade, notas) {
        this.nome = nome,
            this.idade = idade,
            this.notas = notas;
    }
    apresentar() {
        return `Olá, me chamo  ${this.nome}   e tenho  ${this.idade} anos`;
    }
    calcularMedia() {
        //       return this.notas.reduce((anterior, posterior) => anterior + posterior, 0) / this.notas.length;
        let soma = 0;
        this.notas.forEach(nota => {
            soma += nota;
        });
        return soma / this.notas.length;
    }
}
