 // min and max included 
export const randomNumFromAtoB = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

export const generateId = (): string => {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}