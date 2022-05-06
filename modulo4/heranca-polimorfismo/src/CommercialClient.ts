import { Client } from "./Client";
import { Commerce } from "./Commerce";

class CommercialClient extends Commerce implements Client {
    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private cnpj: string,
      residentsQuantity: number,
      cep: string
    ) {
      super(residentsQuantity, cep);
    }
  
    public getCnpj(): string {
      return this.cnpj;
    }
  
    public calculateBill(): number {
      return this.consumedEnergy * 0.75;
    }
  }