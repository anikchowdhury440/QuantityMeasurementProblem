const QuantityMeasurement = require('../__main__/QuantityMeasurement');
const Length = require('../__main__/Length')

describe('testsForCompareFeetAndInch', () => {
    test('givenBothFeetValuesZero_WhenCompared_ShouldReturnTrue', async () => {
        const length = new Length();
        const feetValue1 = new QuantityMeasurement(length, length.unit.FEET, 0.0);
        const feetValue2 = new QuantityMeasurement(length, length.unit.FEET, 0.0);
        await expect(feetValue1.equal(feetValue2)).resolves.toBe(true);
    });

    test('givenFeetAndInchValuesNull_WhenCompared_ShouldReturnFalse', async () => {
        const length = new Length();
        const feetValue = new QuantityMeasurement(length, length.unit.FEET, null);
        const inchValue = new QuantityMeasurement(length, length.unit.INCH, null);
        await expect(feetValue.equal(inchValue)).resolves.toBe(false);
    });

    test('givenFeetOrInchValuesReferenceNotEqual_WhenCompared_ShouldReturnFalse', async () => {
        const length1 = new Length();
        const length2 = new Length();
        const feetValue = new QuantityMeasurement(length1, length1.unit.FEET, 1.0);
        const inchValue = new QuantityMeasurement(length2, length2.unit.INCH, 12.0);
        await expect(feetValue.equal(inchValue)).resolves.toBe(false);
    });
    
})