export enum DieType {
    D4 = 4,
    D6 = 6,
    D8 = 8,
    D10 = 10,
    D12 = 12,
    D20 = 20
}

export interface IDie {
    value?: number;
    type: DieType;
    isFrozen: boolean;
}

export type IDiceCollection = Immutable.Map<string, IDie>
