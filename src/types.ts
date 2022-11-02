import { randomNumFromAtoB } from "./utils";
import Immuitable from 'immutable';

export enum DieType {
    D2 = 2,
    D3 = 3,
    D4 = 4,
    D5 = 5,
    D6 = 6,
    D7 = 7,
    D8 = 8,
    D9 = 9,
    D10 = 10,
    D11 = 11,
    D12 = 12,
    D13 = 13,
    D14 = 14,
    D15 = 15,
    D16 = 16,
    D17 = 17,
    D18 = 18,
    D19 = 19,
    D20 = 20
}

export interface IDie {
    value?: number;
    type: DieType;
}

export type IDiceCollection = Immutable.Map<string, IDie>
