export class Professor {
    constructor(nome, idade, disciplinas, valorHora, quantidadeHoras) {
        this.nome = nome;
        this.idade = idade;
        this.disciplinas = disciplinas;
        this.valorHora = valorHora;
        this.quantidadeHoras = quantidadeHoras;
    }
    apresentar() {
        return `O nome do professor é ${this.nome}, tem ${this.idade} anos. Ministra a disciplina de ${this.disciplinas}, com o valor de R%${this.valorHora}, com ${this.quantidadeHoras} horas.`;
    }
    calcularRendimento() {
        let rendimento = this.valorHora * this.quantidadeHoras;
        return rendimento;
    }
}
