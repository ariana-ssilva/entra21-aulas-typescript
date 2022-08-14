let nome:string="Ariana Silva";

//nome = 10 
let idade:number=22;

console.log("nome,idade");

$("<p>",{
    text:`Oi ${nome}, vc tem ${idade} anos` 
}).appendTo("body")

function teste():number {
    return 0;
}

function dados(nome: string, idade: number): boolean{
    if (nome == "Ariana" && idade == 22){
        return true;
    } else {
        return false;
    }
}