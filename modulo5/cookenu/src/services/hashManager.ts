import * as bcrypt from "bcryptjs";

 export const hashManager = async(dado: string): Promise<string> => {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(rounds);
    const result = await bcrypt.hash(dado, salt);
    return result;
  }

 const compare = async(pass: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(pass, hash);
  }
