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
    color: string;
    valueColor: string;
    isFrozen: boolean;
}

export type IDiceCollection = Immutable.Map<string, IDie>

export interface IPropOfDie {
    die: IDie
}

export interface IDiceStyleProps {
    die: IDie;
}

export enum InputSize {
    normal = 'normal',
    small = 'small'
  }
  
export enum InputType {
    normal = 'normal',
    danger = 'danger',
    freeze = 'freeze'
}

export interface IDieSVGProps {
    die: IDie;
}