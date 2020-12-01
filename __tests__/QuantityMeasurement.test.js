const QuantityMeasurement = require('../__main__/QuantityMeasurement');
const Length = require('../__main__/Length')

describe('testsForCompareFeetAndInch', () => {
    test('givenBothFeetValuesZero_WhenCompared_ShouldReturnTrue', async () => {
        const length = new Length();
        const feetValue1 = new QuantityMeasurement(length, length.unit.FEET, 0.0);
        const feetValue2 = new QuantityMeasurement(length, length.unit.FEET, 0.0);
        await expect(feetValue1.equal(feetValue2)).resolves.toBe(true);
    });

    test('givenFeetAndFeetValuesNull_WhenCompared_ShouldReturnFalse', async () => {
        const length = new Length();
        const feetValue1 = new QuantityMeasurement(length, length.unit.FEET, null);
        const feetValue2 = new QuantityMeasurement(length, length.unit.FEET, null);
        await expect(feetValue1.equal(feetValue2)).resolves.toBe(false);
    });

    test('givenFeetAndFeetValuesReferenceNotEqual_WhenCompared_ShouldReturnFalse', async () => {
        const length1 = new Length();
        const length2 = new Length();
        const feetValue1 = new QuantityMeasurement(length1, length1.unit.FEET, 1.0);
        const feetValue2 = new QuantityMeasurement(length2, length2.unit.FEET, 1.0);
        await expect(feetValue1.equal(feetValue2)).resolves.toBe(false);
    });
    
    test('givenFeetAndFeetValuesTypeIncorrect_WhenCompared_ShouldReturnFalse', async () => {
        const length = new Length();
        const feetValue1 = new QuantityMeasurement(length, length.unit.FEET, 1.0);
        const feetValue2 = new QuantityMeasurement(length, length.unit.MM, 1.0);
        await expect(feetValue1.equal(feetValue2)).resolves.toBe(false);
    });

    test('givenFeetAndInchValuesAreCorrect_WhenCompared_ShouldReturnTrue', async() => {
        const length = new Length();
        const feetValue = new QuantityMeasurement(length, length.unit.FEET, 1.0);
        const inchValue = new QuantityMeasurement(length, length.unit.INCH, 12.0);
        await expect(feetValue.equal(inchValue)).resolves.toBe(true)
    });

    test('givenFeetAndInchValuesAreInCorrect_WhenCompared_ShouldReturnFalse', async() => {
        const length = new Length();
        const feetValue = new QuantityMeasurement(length, length.unit.FEET, 2.0);
        const inchValue = new QuantityMeasurement(length, length.unit.INCH, 12.0);
        await expect(feetValue.equal(inchValue)).resolves.toBe(false)
    });

    test('givenBothInchValuesZero_WhenCompared_ShouldReturnTrue', async () => {
        const length = new Length();
        const inchValue1 = new QuantityMeasurement(length, length.unit.INCH, 0.0);
        const inchValue2 = new QuantityMeasurement(length, length.unit.INCH, 0.0);
        await expect(inchValue1.equal(inchValue2)).resolves.toBe(true);
    });
})