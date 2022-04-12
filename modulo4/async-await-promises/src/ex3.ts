import axios from 'axios'
import { baseURL } from './baseURL';

type user = {
    id: string;
    name: string;
    email: string;
}



const getSubscribers = async (): Promise<user[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    console.log(response.data)
    return response.data.map((res: any) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email,
        }
    });
};

const main = async () => {
    try {
        await getSubscribers()

    } catch (error: any) {
        console.log(error.response?.data || error.mesage)
    }
}

main()

// A - Não da erro
// B - Para deixar o código mais seguro e completo, evitando possiveis erros