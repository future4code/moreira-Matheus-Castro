const operação = (process.argv[2])
const firstNumber = Number((process.argv[3]))
const secondNumber = Number((process.argv[4]))

switch (operação){
    case 'add':
        console.log(firstNumber + secondNumber)
    break
    case 'sub':
        console.log(firstNumber - secondNumber)
    break
    case 'mult':
        console.log(firstNumber * secondNumber)
    break
    case 'div':
        console.log(firstNumber / secondNumber)
    break
}

