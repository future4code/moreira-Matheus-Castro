import axios from 'axios'
import { InfoResponse } from '../types'

// https://viacep.com.br/ws/

const baseURL = "https://viacep.com.br/ws"

export const getAddressInfo = async (zipcode: string) => {
    try {
        const response = await axios.get(`${baseURL}/${zipcode}/json/`)
        const infoResponse: InfoResponse =  {
            logradouro: response.data.logradouro,
            complemento: response.data.complemento,
            bairro: response.data.bairro,
            cidade: response.data.localidade,
            cep: response.data.cep,
            estado: response.data.uf
        }
        console.log(infoResponse)
        return infoResponse
    } catch (error) {
        console.error("Erro no getAddressInfo:", error)
    }
}