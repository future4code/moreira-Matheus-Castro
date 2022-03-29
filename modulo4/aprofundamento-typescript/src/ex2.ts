function obterEstatisticas(numeros: number[]): Estatistica {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: Estatistica = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

type Estatistica = {
    maior: number,
    menor: number,
    media: number
}

type amostra = {
    numero: number [],
    obterEstatisticas: (numeros: number[]) => Estatistica
}

console.log(obterEstatisticas([2,4,5,6,7,9]))

