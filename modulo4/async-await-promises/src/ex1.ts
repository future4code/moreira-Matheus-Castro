import axios from 'axios'
import { baseURL } from './baseURL';


// A - Vou utilizar o endpoint de GET

// B - Promise<any>[]

async function getSubscribers(): Promise<any> {
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