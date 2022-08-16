export class Professor {
    public nome: string
    public idade: number
    public disciplinas: Array<string>
    public valorHora: number
    public quantidadeHoras: number

    constructor(
        nome: string,
        idade: number,
        disciplinas: Array<string>,
        valorHora: number,
        quantidadeHoras: number) {

        this.nome = nome
        this.idade = idade
        this.disciplinas = disciplinas
        this.valorHora = valorHora
        this.quantidadeHoras = quantidadeHoras
    }

    public apresentar(): string {
        return `O nome do professor é ${this.nome}, tem ${this.idade} anos. Leciona a  ${this.disciplinas}, no valor de R%${this.valorHora}, com ${this.quantidadeHoras} horas.`
    }

    public calcularRendimento(): number {
        let rendimento: number = this.valorHora * this.quantidadeHoras

        return rendimento
    }

}