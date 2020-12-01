const QuantityMeasurement = require('../__main__/QuantityMeasurement');
const Length = require('../__main__/Length');
const Volume = require('../__main__/Volume');
const Weight = require('../__main__/Weight');
const Temperature = require('../__main__/Temperature');

describe('testsForCompareLengthAndAddingLength', () => {
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

    test('givenInchAndInchValuesNull_WhenCompared_ShouldReturnFalse', async () => {
        const length = new Length();
        const inchValue1 = new QuantityMeasurement(length, length.unit.INCH, null);
        const inchValue2 = new QuantityMeasurement(length, length.unit.INCH, null);
        await expect(inchValue1.equal(inchValue2)).resolves.toBe(false);
    });

    test('givenInchAndInchValuesReferenceNotEqual_WhenCompared_ShouldReturnFalse', async () => {
        const length1 = new Length();
        const length2 = new Length();
        const inchValue1 = new QuantityMeasurement(length1, length1.unit.INCH, 1.0);
        const inchValue2 = new QuantityMeasurement(length2, length2.unit.INCH, 1.0);
        await expect(inchValue1.equal(inchValue2)).resolves.toBe(false);
    });

    test('givenInchAndInchValuesTypeIncorrect_WhenCompared_ShouldReturnFalse', async () => {
        const length = new Length();
        const inchValue1 = new QuantityMeasurement(length, length.unit.FEET, 1.0);
        const inchValue2 = new QuantityMeasurement(length, length.unit.MM, 1.0);
        await expect(inchValue1.equal(inchValue2)).resolves.toBe(false);
    });

    test('givenInchAndFeetValuesAreCorrect_WhenCompared_ShouldReturnTrue', async() => {
        const length = new Length();
        const inchValue = new QuantityMeasurement(length, length.unit.INCH, 12.0);
        const feetValue = new QuantityMeasurement(length, length.unit.FEET, 1.0);
        await expect(inchValue.equal(feetValue)).resolves.toBe(true)
    });

    test('givenInchAndFeetValuesAreInCorrect_WhenCompared_ShouldReturnFalse', async() => {
        const length = new Length();
        const inchValue = new QuantityMeasurement(length, length.unit.INCH, 2.0);
        const feetValue = new QuantityMeasurement(length, length.unit.FEET, 12.0);
        await expect(inchValue.equal(feetValue)).resolves.toBe(false)
    });

    test('given3FeetAnd1Yard_WhenCompared_ShouldReturnTrue', async() => {
        const length = new Length();
        const feetValue = new QuantityMeasurement(length, length.unit.FEET, 3.0);
        const yardValue = new QuantityMeasurement(length, length.unit.YARD, 1.0);
        await expect(feetValue.equal(yardValue)).resolves.toBe(true);
    });

    test('given1FeetAnd1Yard_WhenCompared_ShouldReturnFalse', async() => {
        const length = new Length();
        const feetValue = new QuantityMeasurement(length, length.unit.FEET, 1.0);
        const yardValue = new QuantityMeasurement(length, length.unit.YARD, 1.0);
        await expect(feetValue.equal(yardValue)).resolves.toBe(false);
    });

    test('given1InchAnd1Yard_WhenCompared_ShouldReturnFalse', async() => {
        const length = new Length();
        const inchValue = new QuantityMeasurement(length, length.unit.INCH, 1.0);
        const yardValue = new QuantityMeasurement(length, length.unit.YARD, 1.0);
        await expect(inchValue.equal(yardValue)).resolves.toBe(false);
    });

    test('given1YardAnd36Inch_WhenCompared_ShouldReturnTrue', async() => {
        const length = new Length();
        const yardValue = new QuantityMeasurement(length, length.unit.YARD, 1.0);
        const inchValue = new QuantityMeasurement(length, length.unit.INCH, 36.0);
        await expect(yardValue.equal(inchValue)).resolves.toBe(true);
    });

    test('given36InchAnd1Yard_WhenCompared_ShouldReturnTrue', async() => {
        const length = new Length();
        const inchValue = new QuantityMeasurement(length, length.unit.INCH, 36.0);
        const yardValue = new QuantityMeasurement(length, length.unit.YARD, 1.0);
        await expect(inchValue.equal(yardValue)).resolves.toBe(true);
    });

    test('given1YardAnd3Feet_WhenCompared_ShouldReturnTrue', async() => {
        const length = new Length();
        const yardValue = new QuantityMeasurement(length, length.unit.YARD, 1.0);
        const feetValue = new QuantityMeasurement(length, length.unit.FEET, 3.0);
        await expect(yardValue.equal(feetValue)).resolves.toBe(true);
    });

    test('given2InchAnd5Centimeter_WhenCompared_ShouldReturnTrue', async() => {
        const length = new Length();
        const inchValue = new QuantityMeasurement(length, length.unit.INCH, 2.0);
        const cmValue = new QuantityMeasurement(length, length.unit.CENTIMETER, 5.0);
        await expect(inchValue.equal(cmValue)).resolves.toBe(true);
    });

    test('given2InchAnd2Inch_WhenAdded_ShouldReturn4Inch', async() => {
        const length = new Length();
        const inchValue1 = new QuantityMeasurement(length, length.unit.INCH, 2.0);
        const inchValue2 = new QuantityMeasurement(length, length.unit.INCH, 2.0);
        await expect(inchValue1.additionOfUnits(inchValue2, length.unit.INCH)).resolves.toBe(4.0);
    });
    
    test('given1FeetAnd2Inch_WhenAdded_ShouldReturn14Inch', async() => {
        const length = new Length();
        const feetValue = new QuantityMeasurement(length, length.unit.FEET, 1.0);
        const inchValue = new QuantityMeasurement(length, length.unit.INCH, 2.0);
        await expect(feetValue.additionOfUnits(inchValue, length.unit.INCH)).resolves.toBe(14.0);
    });

    test('given1FeetAnd1Feet_WhenAdded_ShouldReturn24Inch', async() => {
        const length = new Length();
        const feetValue1 = new QuantityMeasurement(length, length.unit.FEET, 1.0);
        const feetValue2 = new QuantityMeasurement(length, length.unit.FEET, 1.0);
        await expect(feetValue1.additionOfUnits(feetValue2, length.unit.INCH)).resolves.toBe(24.0);
    });

    test('given2InchAnd2.5Centimeter_WhenAdded_ShouldReturn3Inch', async() => {
        const length = new Length();
        const inchValue = new QuantityMeasurement(length, length.unit.INCH, 2.0);
        const cmValue = new QuantityMeasurement(length, length.unit.CENTIMETER, 2.5);
        await expect(inchValue.additionOfUnits(cmValue, length.unit.INCH)).resolves.toBe(3.0);
    });
})

describe('testsForCompareVolumeAndAddingVolume', () => {
    test('given1GallonAnd3.785Litres_WhenCompared_ShouldReturnTrue', async () => {
        const volume = new Volume();
        const gallonValue = new QuantityMeasurement(volume, volume.unit.GALLON, 1.0);
        const litreValue = new QuantityMeasurement(volume, volume.unit.LITRE, 3.785);
        await expect(gallonValue.equal(litreValue)).resolves.toBe(true);
    });

    test('given1LitreAnd1000Mililitres_WhenCompared_ShouldReturnTrue', async () => {
        const volume = new Volume();
        const litreValue = new QuantityMeasurement(volume, volume.unit.LITRE, 1.0);
        const miliLitreValue = new QuantityMeasurement(volume, volume.unit.MILILITRE, 1000.0);
        await expect(litreValue.equal(miliLitreValue)).resolves.toBe(true);
    });

    test('given1GallonAnd3.78Litres_WhenAdded_ShouldReturn7.57Litres', async () => {
        const volume = new Volume();
        const gallonValue = new QuantityMeasurement(volume, volume.unit.GALLON, 1.0);
        const litreValue = new QuantityMeasurement(volume, volume.unit.LITRE, 3.785);
        await expect(gallonValue.additionOfUnits(litreValue, volume.unit.LITRE)).resolves.toBe(7.57);
    });

    test('given1LitreAnd1000miliLitres_WhenAdded_ShouldReturn2Litres', async () => {
        const volume = new Volume();
        const litreValue = new QuantityMeasurement(volume, volume.unit.LITRE, 1.0);
        const miliLitreValue = new QuantityMeasurement(volume, volume.unit.MILILITRE, 1000.0);
        await expect(litreValue.additionOfUnits(miliLitreValue, volume.unit.LITRE)).resolves.toBe(2.0);
    });
})

describe('testsForCompareWeightAndAddingWeight', () => {
    test('given1KilogramAnd1000Grams_WhenCompared_ShouldReturnTrue', async () => {
        const weight = new Weight();
        const kiloGramValue = new QuantityMeasurement(weight, weight.unit.KILOGRAM, 1.0);
        const gramValue = new QuantityMeasurement(weight, weight.unit.GRAM, 1000.0);
        await expect(kiloGramValue.equal(gramValue)).resolves.toBe(true);
    });

    test('given1TonneAnd1000Kilograms_WhenCompared_ShouldReturnTrue', async () => {
        const weight = new Weight();
        const tonneValue = new QuantityMeasurement(weight, weight.unit.TONNE, 1.0);
        const kiloGramValue = new QuantityMeasurement(weight, weight.unit.KILOGRAM, 1000.0);
        await expect(tonneValue.equal(kiloGramValue)).resolves.toBe(true);
    });

    test('given1TonneAnd1000Grams_WhenAdded_ShouldReturn1001Kilogram', async () => {
        const weight = new Weight();
        const tonneValue = new QuantityMeasurement(weight, weight.unit.TONNE, 1.0);
        const gramValue = new QuantityMeasurement(weight, weight.unit.GRAM, 1000.0);
        await expect(tonneValue.additionOfUnits(gramValue, weight.unit.KILOGRAM)).resolves.toBe(1001.0);
    });    

})

describe('testsForCompareWeightAndAddingWeight', () => {
    test('given212FarenheitAnd100Celcius_WhenCompared_ShouldReturnTrue', async () => {
        const temperature = new Temperature();
        const farenheitValue = new QuantityMeasurement(temperature, temperature.unit.FARENHEIT, 212.0);
        const celciusValue = new QuantityMeasurement(temperature, temperature.unit.CELCIUS, 100.0);
        await expect(farenheitValue.equal(celciusValue)).resolves.toBe(true);
    });
})