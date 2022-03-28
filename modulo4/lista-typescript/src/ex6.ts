type Cliente = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}[]

const cliente: Cliente = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function saldoCliente(client: Cliente) {

    const filterClient = client.filter((client) => {
        const debitosValores = client.debitos.reduce((saldo, debito) => { return saldo + debito }, 0)
        const saldo = client.saldoTotal - debitosValores
        return saldo < 0
    })

    const clientesDevendo = filterClient.map((client) => {
        const debitosValores = client.debitos.reduce((saldo, debito) => { return saldo + debito }, 0)
        client.saldoTotal = client.saldoTotal - debitosValores
        client.debitos = []

        return client
    })

    return clientesDevendo
}

console.log(saldoCliente(cliente))