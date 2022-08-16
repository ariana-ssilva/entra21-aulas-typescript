export class Vendedor {
    public nome: string
    public idade: number
    public comissao: number
    public vendasRealizadas: number

    constructor(
        nome: string,
        idade: number,
        comissao: number,
        vendasRealizadas: number) {
        this.nome = nome
        this.idade = idade
        this.comissao = comissao
        this.vendasRealizadas = vendasRealizadas
    }

    public apresentar(): string {
        return `O nome do vendedor é ${this.nome}, tem ${this.idade} anos. Sua comissão é de {this.comissao} reais para cada venda. ${this.nome} tem ${this.vendasRealizadas} vendas realizadas.`
    }

    public calcularRendimento(): number {
        let rendimento: number = this.comissao * this.vendasRealizadas

        return rendimento
    }

}