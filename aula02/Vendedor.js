export class Vendedor {
    constructor(nome, idade, comissao, vendasRealizadas) {
        this.nome = nome;
        this.idade = idade;
        this.comissao = comissao;
        this.vendasRealizadas = vendasRealizadas;
    }
    apresentar() {
        return `O nome do vendedor é ${this.nome}, tem ${this.idade} anos. Sua comissão é de {this.comissao} reais para cada venda. ${this.nome} tem ${this.vendasRealizadas} vendas realizadas.`;
    }
    calcularRendimento() {
        let rendimento = this.comissao * this.vendasRealizadas;
        return rendimento;
    }
}
