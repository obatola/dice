import { arrayOfBackgroundColors, colors, dieColor } from "../../Style/style";
import { DieType } from "../../types";
import { generateId, randomNumFromAtoB, generateRolledValue, createNewDie, createNewDieWithType, getRandomBackgroundColor, getDieColor } from "../utils";

describe('generateId', () => {
    test('expect to recieve a random string of length greater than 1', () => {
        expect(typeof generateId()).toEqual('string');
        expect(generateId().length).toBeGreaterThan(0);
    });
});

describe('randomNumFromAtoB', () => {
    test('expect to recieve a random number inclusively between the given min and max', () => {
        expect(randomNumFromAtoB(0, 0)).toEqual(0);
        expect(randomNumFromAtoB(41, 41)).toEqual(41);
        const randomFrom0to1 = randomNumFromAtoB(0, 1);
        expect(randomFrom0to1 >= 0 && randomFrom0to1 <= 1).toBeTruthy();
        const randomFrom0to5 = randomNumFromAtoB(0, 5);
        expect(randomFrom0to5 >= 0 && randomFrom0to5 <= 5).toBeTruthy();
        const randomFrom3to6 = randomNumFromAtoB(3, 6);
        expect(randomFrom3to6 >= 3 && randomFrom3to6 <= 6).toBeTruthy();
    });
});

describe('generateRolledValue', () => {
    test('expect to recieve a random number between 1 and 4 for a D4 Die', () => {
        for (let i = 0; i <= 25; i++) {
            const d4Roll = generateRolledValue(DieType.D4)
            expect(d4Roll >= 1 && d4Roll <= 4).toBeTruthy();
        }
    })

    test('expect to recieve a random number between 1 and 6 for a D6 Die', () => {
        for (let i = 0; i <= 25; i++) {
            const d6Roll = generateRolledValue(DieType.D6)
            expect(d6Roll >= 1 && d6Roll <= 6).toBeTruthy();
        }
    })

    test('expect to recieve a random number between 1 and 8 for a D8 Die', () => {
        for (let i = 0; i <= 25; i++) {
            const d8Roll = generateRolledValue(DieType.D8)
            expect(d8Roll >= 1 && d8Roll <= 8).toBeTruthy();
        }
    })

    test('expect to recieve a random number between 1 and 10 for a D10 Die', () => {
        for (let i = 0; i <= 25; i++) {
            const d10Roll = generateRolledValue(DieType.D10)
            expect(d10Roll >= 1 && d10Roll <= 10).toBeTruthy();
        }
    })

    test('expect to recieve a random number between 1 and 12 for a D12 Die', () => {
        for (let i = 0; i <= 25; i++) {
            const d12Roll = generateRolledValue(DieType.D12)
            expect(d12Roll >= 1 && d12Roll <= 12).toBeTruthy();
        }
    })

    test('expect to recieve a random number between 1 and 20 for a D20 Die', () => {
        for (let i = 0; i <= 25; i++) {
            const d20Roll = generateRolledValue(DieType.D20)
            expect(d20Roll >= 1 && d20Roll <= 20).toBeTruthy();
        }
    })
});

describe('createNewDie', () => {
    test('if given params are valid will create a new die with the given parameters', () => {
        const dieParams = {
            value: 10,
            type: DieType.D10,
            color: colors.blue,
            valueColor: colors.white,
            isFrozen: true,
        }
        
        const newDie = createNewDie(dieParams);

        expect(dieParams.value === newDie.value).toBeTruthy();
        expect(dieParams.type === newDie.type).toBeTruthy();
        expect(dieParams.color === newDie.color).toBeTruthy();
        expect(dieParams.valueColor === newDie.valueColor).toBeTruthy();
        expect(dieParams.isFrozen === newDie.isFrozen).toBeTruthy();
    })


    test("if only type is provided, will create a new die with filled params", () => {
        const dieParams = {
            type: DieType.D6,
        }
        
        const newD6Die = createNewDie(dieParams);
        expect(newD6Die.value >= 1 && newD6Die.value <= 6).toBeTruthy();
        expect(newD6Die.type).toEqual(DieType.D6);
        expect(newD6Die.color).toBeDefined();
        expect(newD6Die.valueColor).toBeDefined();
        expect(newD6Die.isFrozen).toBeFalsy();
    })

    test("if param value is not given, will create a new die with a valid value for it's type", () => {
        const dieParams = {
            type: DieType.D4,
        }
        
        const newDie = createNewDie(dieParams);

        expect(newDie.value >= 1 && newDie.value <= 4).toBeTruthy();
    })

    test('if param value is not valid for the given dieType, will create a new die with a valid value', () => {
        const dieParams = {
            value: 10,
            type: DieType.D4,
        }
        
        const newDie = createNewDie(dieParams);
        
        expect(dieParams.value !== newDie.value).toBeTruthy();
        expect(newDie.value >= 1 && newDie.value <= 4).toBeTruthy();
    })
})

describe('createNewDieWithType', () => {
    test("to create a filled die with valid value for the given type", () => {
        const newD8Die = createNewDieWithType(DieType.D8);
        expect(newD8Die.value >= 1 && newD8Die.value <= 8).toBeTruthy();
        expect(newD8Die.type).toEqual(DieType.D8);
        expect(newD8Die.color).toBeDefined();
        expect(newD8Die.valueColor).toBeDefined();
        expect(newD8Die.isFrozen).toBeFalsy();
    })

    test('if given params are valid will create a new die with the given parameters', () => {
        const dieParams = {
            value: 10,
            color: colors.blue,
            valueColor: colors.white,
            isFrozen: true,
        }
        
        const newDie = createNewDieWithType(DieType.D10, dieParams);

        expect(dieParams.value === newDie.value).toBeTruthy();
        expect(DieType.D10 === newDie.type).toBeTruthy();
        expect(dieParams.color === newDie.color).toBeTruthy();
        expect(dieParams.valueColor === newDie.valueColor).toBeTruthy();
        expect(dieParams.isFrozen === newDie.isFrozen).toBeTruthy();
    })
})

describe('getRandomBackgroundColor', () => {
    test('will return a random color from arrayOfBackgroundColors', () => {
        for (let i = 0; i <= 25; i++) {
            const chosenColor = getRandomBackgroundColor();
            expect(arrayOfBackgroundColors.includes(chosenColor)).toBeTruthy();
        }
    })
})

describe('getDieColor', () => {
    test('will return color of die if the die is not frozen', () => {
        const die = createNewDieWithType(DieType.D8);
        expect(getDieColor(die)).toEqual(die.color);
    })

    test('will return frozen color if die is frozen', () => {
        const die = createNewDieWithType(DieType.D8, {isFrozen: true});
        expect(getDieColor(die)).toEqual(dieColor.frozenBackground);
    })
})