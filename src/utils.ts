import { arrayOfBackgroundColors, colors } from "./Style/style";
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

export const createNewDieWithType  = (dieType: DieType, options: Partial<IDie> = {}): IDie => createNewDie({
    ...options,
    type: dieType,
})

interface IOptionalDieProperties extends Partial<IDie> {
    type: DieType;
  }

export const createNewDie  = (dieParams: IOptionalDieProperties): IDie => {
    const dieType = dieParams.type
    let value = generateRolledValue(dieType);

    if (dieParams.value && dieParams.value > 0 && dieParams.value <= dieType) {
        value = dieParams.value;
    }

    return {
        isFrozen: false,
        color: getRandomBackgroundColor(),
        valueColor: colors.white,
        ...dieParams,
        value,
    }
}

export const getRandomBackgroundColor = () => {
    const index = Math.floor(Math.random() * arrayOfBackgroundColors.length)
    return arrayOfBackgroundColors[index];
}

export const lightenDarkenColor = (col: string, amt: number) => {
  
    var usePound = false;
  
    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
 
    var num = parseInt(col,16);
 
    var r = (num >> 16) + amt;
 
    if (r > 255) r = 255;
    else if  (r < 0) r = 0;
 
    var b = ((num >> 8) & 0x00FF) + amt;
 
    if (b > 255) b = 255;
    else if  (b < 0) b = 0;
 
    var g = (num & 0x0000FF) + amt;
 
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
 
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16) || 'red';
}

export const getDieColor = (die: IDie) => {
    if (die.isFrozen) {
        return colors.grey;
    } else {
        return die.color;
    }
}