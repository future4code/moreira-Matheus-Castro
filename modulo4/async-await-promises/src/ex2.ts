import axios from 'axios'
import { baseURL } from './baseURL';

// A - A função nomeada async recebe o ASYNC antes do nome da função
// já em arrow function, a função é definida como async, pois ele vem
// depois do '='

const getSubscribers = async(): Promise<any> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    console.log(response.data)
    return response.data;
  };
  
const main = async () => {
    try {
        await getSubscribers()

    } catch (error: any){
        console.log(error.response?.data || error.mesage)
    }
}

main ()