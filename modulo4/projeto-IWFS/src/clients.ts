export type Client = {
	name: string,
	cpf: number,
	nascimento: string,
	saldoTotal: number,
	debitos: Debitos[]
}

type Debitos = {
	data: string,
	valor: number
	descricao: string
}

export const cliente: Client[] = [
	{
		name: "João",
		cpf: 15482731212,
		nascimento: "28/08/1950",
		saldoTotal: 1000,
		debitos: [
			{
				data: "28/11/2020",
				valor: 100,
				descricao: "lanche"
			},
			{
				data: "18/12/2020",
				valor: 300,
				descricao: "shopping"
			}]
	},
	{
		name: "Paula",
		cpf: 15421321299,
		nascimento: "03/09/1980",
		saldoTotal: 7500,
		debitos: [
			{
				data: "08/01/2020",
				valor: 150,
				descricao: "calçado"
			},
			{
				data: "29/07/2020",
				valor: 250,
				descricao: "concerto do celuar"
			}]
	},
	{
		name: "Pedro",
		cpf: 15486519872,
		nascimento: "10/09/2001",
		saldoTotal: 10000,
		debitos: [
			{
				data: "22/12/2020",
				valor: 1500,
				descricao: "celuar novo"
			}]
	},

]