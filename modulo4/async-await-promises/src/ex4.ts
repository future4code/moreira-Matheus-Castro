import axios from 'axios'
import { baseURL } from './baseURL';

const createNews = async(
    title: string,
    content: string,
    date: number
  ): Promise<void> => {
    await axios.put(`${baseURL}/news`, {
      title: title,
      content: content, 
      date: date
    });
  }

const main = async () => {
    try {
        await createNews("Teste", "teste2", 12)
        console.log()

    } catch (error: any) {
        console.log(error.response?.data || error.mesage)
    }
}

main()