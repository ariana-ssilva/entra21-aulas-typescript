let nome = "Ariana Silva";
//nome = 10 
let idade = 22;
console.log("nome,idade");
$("<p>", {
    text: `Oi ${nome}, vc tem ${idade} anos`
}).appendTo("body");
function teste() {
    return 0;
}
function dados(nome, idade) {
    if (nome == "Ariana" && idade == 22) {
        return true;
    }
    else {
        return false;
    }
}
