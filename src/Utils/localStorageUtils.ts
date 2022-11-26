import { Map } from 'immutable';
import { DieType, IDiceCollection } from '../types';
import { createNewDieWithType, generateId } from './utils';

const dieSetKey = 'dieSet-testing-123';

export const getDieFromLocalStorage = (): IDiceCollection => {
    const defaultDieSet = Map({
        [generateId()]: createNewDieWithType(DieType.D4),
        [generateId()]: createNewDieWithType(DieType.D6),
        [generateId()]: createNewDieWithType(DieType.D8),
        [generateId()]: createNewDieWithType(DieType.D10),
        [generateId()]: createNewDieWithType(DieType.D12),
        [generateId()]: createNewDieWithType(DieType.D20)
    });

    let dieSet = undefined

    try {
        dieSet = JSON.parse(localStorage.getItem(dieSetKey) || '');
    } catch {
        return defaultDieSet;
    }

    if (typeof dieSet !== 'object' || Object.keys(dieSet).length === 0) {
        return defaultDieSet;
    }

    // TODO: ensure data conforms to IDiceCollection

    return Map(dieSet);
}

export const saveDieSetToLocalStorage = (dieSet: IDiceCollection) => {
    localStorage.setItem(dieSetKey, JSON.stringify(dieSet.toJSON()));
}