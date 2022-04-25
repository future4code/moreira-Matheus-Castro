import { Client } from "./Client";
import { Industry } from "./Industry";

class IndustrialClient extends Industry implements Client {
    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private industrialID: string,
      machinesQuantity: number,
      cep: string
    ) {
      super(machinesQuantity, cep);
    }
  
    public getIndustrialID(): string {
      return this.industrialID;
    }
  
    public calculateBill(): number {
      return this.consumedEnergy * 0.45 + this.getMachinesQuantity() * 100;
    }
  }