let peso = 101;

if(peso >= 100){
    console.log("A peça possui um peso adequado, pode ser cadastrada!")
} else {
    console.log("A peça não pode ser cadastrada, não possui o peso mínimo")
}

let listaPecas = ["Disco de freio", "Amortecedor", "Virabrequim", "Vela" , "Bateria", "Radiador", "Correia", "Carter"]

if (listaPecas.length < 10) {
    console.log("A lista ainda possui espaço para mais peças")
} else {
    console.log("Não há espaço disponível na lista, a capacidade máxima foi atingida")
}

let nomePeca = "Disco de Freio" // String

if (nomePeca.length > 3) {
    console.log("Nome da peça é válido, pode seguir com o cadastro")    
} else {
    console.log("Nome de paça inválido, o nome dever ter mais de 3 caracteres")
}