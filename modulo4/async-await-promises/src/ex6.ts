import axios from 'axios'
import { baseURL } from './baseURL';

type user = {
    id: string;
    name: string;
    email: string;
}

const sendNotifications = async (
    users: user[],
    message: string
  ): Promise<void> => {
  
      try {
        const promises = users.map(user =>{
          return axios.post(`${baseURL}/notifications`, {
            subscriberId: user.id,
            message: message,
          })
        })
      
        await Promise.all(promises);
  
      } catch {
          console.log("Error");
      }
  };

const main = async () => {
    try {
        await sendNotifications([{
            id: 'd5252df5-05bd-4989-9d92-783af5fbcae0',
            email: 'paola@labenu.com.br',
            name: 'Paola, a Bracho'
          }], "Bem vindo")
        console.log()

    } catch (error: any) {
        console.log(error.response?.data || error.mesage)
    }
}

main()

// A - Ele tras todas promises
// B - Promise. all permite executar várias 
// operações assíncronas em paralelo e executar alguma operação