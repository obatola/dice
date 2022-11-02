import { DieType, IDie } from "./types";

 // min and max included 
export const randomNumFromAtoB = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

export const generateId = (): string => {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}

export const generateRolledValue = (dieType: DieType): number => {
    return randomNumFromAtoB(1, dieType);
}

export const createNewDie  = (dieType: DieType): IDie => {
    return {
        type: dieType
    }
}