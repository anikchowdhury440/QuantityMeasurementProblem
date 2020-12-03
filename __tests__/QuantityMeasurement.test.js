const QuantityMeasurement = require('../__main__/QuantityMeasurement');
const ExceptionType = require('../__main__/ExceptionType');
const Length = require('../__main__/Length');
const Volume = require('../__main__/Volume');
const Weight = require('../__main__/Weight');
const Temperature = require('../__main__/Temperature');

describe('testsForCompareLengthAndAddingLength', () => {
    test('givenBothFeetValuesZero_WhenCompared_ShouldReturnTrue',  () => {
        const length = new Length();
        const feetValue1 = new QuantityMeasurement(length, length.unit.FEET, 0);
        const feetValue2 = new QuantityMeasurement(length, length.unit.FEET, 0);
        return expect(feetValue1.equal(feetValue2)).resolves.toBe(true);
    });

    test('givenFeetAndFeetValuesNull_WhenCompared_ShouldReturnError', () => {
        const length = new Length();
        const feetValue1 = new QuantityMeasurement(length, length.unit.FEET, null);
        const feetValue2 = new QuantityMeasurement(length, length.unit.FEET, null);
        feetValue1.equal(feetValue2).catch(error => expect(error.type).toBe(ExceptionType.NULL_VALUE_PASSED))
    });

    test('givenFeetAndFeetValuesReferenceNotEqual_WhenCompared_ShouldReturnFalse', () => {
        const length1 = new Length();
        const length2 = new Volume();
        const feetValue1 = new QuantityMeasurement(length1, length1.unit.FEET, 1);
        const feetValue2 = new QuantityMeasurement(length2, length2.unit.FEET, 1);
        feetValue1.equal(feetValue2).catch(error => expect(error.type).toBe(ExceptionType.REFERENCE_NOT_EQUAL))
    });
    
    test('givenFeetAndFeetValuesTypeIncorrect_WhenCompared_ShouldReturnFalse', () => {
        const length = new Length();
        const feetValue1 = new QuantityMeasurement(length, length.unit.FEET, 1);
        const feetValue2 = new QuantityMeasurement(length, length.unit.MM, 1);
        feetValue1.equal(feetValue2).catch(error => expect(error.type).toBe(ExceptionType.INVALID_UNIT_TYPE))
    });

    test('givenFeetAndInchValuesAreCorrect_WhenCompared_ShouldReturnTrue', () => {
        const length = new Length();
        const feetValue = new QuantityMeasurement(length, length.unit.FEET, 1);
        const inchValue = new QuantityMeasurement(length, length.unit.INCH, 12);
        return expect(feetValue.equal(inchValue)).resolves.toBe(true)
    });

    test('givenFeetAndInchValuesAreInCorrect_WhenCompared_ShouldReturnFalse', () => {
        const length = new Length();
        const feetValue = new QuantityMeasurement(length, length.unit.FEET, 2);
        const inchValue = new QuantityMeasurement(length, length.unit.INCH, 12);
        return expect(feetValue.equal(inchValue)).resolves.toBe(false)
    });

    test('givenBothInchValuesZero_WhenCompared_ShouldReturnTrue', () => {
        const length = new Length();
        const inchValue1 = new QuantityMeasurement(length, length.unit.INCH, 0);
        const inchValue2 = new QuantityMeasurement(length, length.unit.INCH, 0);
        return expect(inchValue1.equal(inchValue2)).resolves.toBe(true);
    });

    test('givenInchAndInchValuesNull_WhenCompared_ShouldReturnFalse', () => {
        const length = new Length();
        const inchValue1 = new QuantityMeasurement(length, length.unit.INCH, null);
        const inchValue2 = new QuantityMeasurement(length, length.unit.INCH, null);
        inchValue1.equal(inchValue2).catch(error => expect(error.type).toBe(ExceptionType.NULL_VALUE_PASSED))
    });

    test('givenInchAndInchValuesReferenceNotEqual_WhenCompared_ShouldReturnFalse', () => {
        const length1 = new Length();
        const length2 = new Volume();
        const inchValue1 = new QuantityMeasurement(length1, length1.unit.INCH, 1);
        const inchValue2 = new QuantityMeasurement(length2, length2.unit.INCH, 1);
        inchValue1.equal(inchValue2).catch(error => expect(error.type).toBe(ExceptionType.REFERENCE_NOT_EQUAL))
    });

    test('givenInchAndInchValuesTypeIncorrect_WhenCompared_ShouldReturnFalse', () => {
        const length = new Length();
        const inchValue1 = new QuantityMeasurement(length, length.unit.INCH, 1);
        const inchValue2 = new QuantityMeasurement(length, length.unit.MM, 1);
        inchValue1.equal(inchValue2).catch(error => expect(error.type).toBe(ExceptionType.INVALID_UNIT_TYPE))
    });

    test('givenInchAndFeetValuesAreCorrect_WhenCompared_ShouldReturnTrue', () => {
        const length = new Length();
        const inchValue = new QuantityMeasurement(length, length.unit.INCH, 12);
        const feetValue = new QuantityMeasurement(length, length.unit.FEET, 1);
        return expect(inchValue.equal(feetValue)).resolves.toBe(true)
    });

    test('givenInchAndFeetValuesAreInCorrect_WhenCompared_ShouldReturnFalse', () => {
        const length = new Length();
        const inchValue = new QuantityMeasurement(length, length.unit.INCH, 2);
        const feetValue = new QuantityMeasurement(length, length.unit.FEET, 12);
        return expect(inchValue.equal(feetValue)).resolves.toBe(false)
    });

    test('given3FeetAnd1Yard_WhenCompared_ShouldReturnTrue', () => {
        const length = new Length();
        const feetValue = new QuantityMeasurement(length, length.unit.FEET, 3);
        const yardValue = new QuantityMeasurement(length, length.unit.YARD, 1);
        return expect(feetValue.equal(yardValue)).resolves.toBe(true);
    });

    test('given1FeetAnd1Yard_WhenCompared_ShouldReturnFalse', () => {
        const length = new Length();
        const feetValue = new QuantityMeasurement(length, length.unit.FEET, 1);
        const yardValue = new QuantityMeasurement(length, length.unit.YARD, 1);
        return expect(feetValue.equal(yardValue)).resolves.toBe(false);
    });

    test('given1InchAnd1Yard_WhenCompared_ShouldReturnFalse', () => {
        const length = new Length();
        const inchValue = new QuantityMeasurement(length, length.unit.INCH, 1);
        const yardValue = new QuantityMeasurement(length, length.unit.YARD, 1);
        return expect(inchValue.equal(yardValue)).resolves.toBe(false);
    });

    test('given1YardAnd36Inch_WhenCompared_ShouldReturnTrue', () => {
        const length = new Length();
        const yardValue = new QuantityMeasurement(length, length.unit.YARD, 1);
        const inchValue = new QuantityMeasurement(length, length.unit.INCH, 36);
        return expect(yardValue.equal(inchValue)).resolves.toBe(true);
    });

    test('given36InchAnd1Yard_WhenCompared_ShouldReturnTrue', () => {
        const length = new Length();
        const inchValue = new QuantityMeasurement(length, length.unit.INCH, 36);
        const yardValue = new QuantityMeasurement(length, length.unit.YARD, 1);
        return expect(inchValue.equal(yardValue)).resolves.toBe(true);
    });

    test('given1YardAnd3Feet_WhenCompared_ShouldReturnTrue', () => {
        const length = new Length();
        const yardValue = new QuantityMeasurement(length, length.unit.YARD, 1);
        const feetValue = new QuantityMeasurement(length, length.unit.FEET, 3);
        return expect(yardValue.equal(feetValue)).resolves.toBe(true);
    });

    test('given2InchAnd5Centimeter_WhenCompared_ShouldReturnTrue', () => {
        const length = new Length();
        const inchValue = new QuantityMeasurement(length, length.unit.INCH, 2);
        const cmValue = new QuantityMeasurement(length, length.unit.CENTIMETER, 5);
        return expect(inchValue.equal(cmValue)).resolves.toBe(true);
    });

    test('given2InchAnd2Inch_WhenAdded_ShouldReturn4Inch', () => {
        const length = new Length();
        const inchValue1 = new QuantityMeasurement(length, length.unit.INCH, 2);
        const inchValue2 = new QuantityMeasurement(length, length.unit.INCH, 2);
        return expect(inchValue1.additionOfUnits(inchValue2, length.unit.INCH)).resolves.toBe(4);
    });
    
    test('given1FeetAnd2Inch_WhenAdded_ShouldReturn14Inch', () => {
        const length = new Length();
        const feetValue = new QuantityMeasurement(length, length.unit.FEET, 1);
        const inchValue = new QuantityMeasurement(length, length.unit.INCH, 2);
        return expect(feetValue.additionOfUnits(inchValue, length.unit.INCH)).resolves.toBe(14);
    });

    test('given1FeetAnd1Feet_WhenAdded_ShouldReturn24Inch', () => {
        const length = new Length();
        const feetValue1 = new QuantityMeasurement(length, length.unit.FEET, 1);
        const feetValue2 = new QuantityMeasurement(length, length.unit.FEET, 1);
        return expect(feetValue1.additionOfUnits(feetValue2, length.unit.INCH)).resolves.toBe(24);
    });

    test('given2InchAnd2.5Centimeter_WhenAdded_ShouldReturn3Inch', () => {
        const length = new Length();
        const inchValue = new QuantityMeasurement(length, length.unit.INCH, 2);
        const cmValue = new QuantityMeasurement(length, length.unit.CENTIMETER, 2.5);
        return expect(inchValue.additionOfUnits(cmValue, length.unit.INCH)).resolves.toBe(3.0);
    });
})

describe('testsForCompareVolumeAndAddingVolume', () => {
    test('given1GallonAnd3.785Litres_WhenCompared_ShouldReturnTrue',  () => {
        const volume = new Volume();
        const gallonValue = new QuantityMeasurement(volume, volume.unit.GALLON, 1);
        const litreValue = new QuantityMeasurement(volume, volume.unit.LITRE, 3.785);
        return expect(gallonValue.equal(litreValue)).resolves.toBe(true);
    });

    test('given1LitreAnd1000Mililitres_WhenCompared_ShouldReturnTrue',  () => {
        const volume = new Volume();
        const litreValue = new QuantityMeasurement(volume, volume.unit.LITRE, 1);
        const miliLitreValue = new QuantityMeasurement(volume, volume.unit.MILILITRE, 1000);
        return expect(litreValue.equal(miliLitreValue)).resolves.toBe(true);
    });

    test('given1GallonAnd3.78Litres_WhenAdded_ShouldReturn7.57Litres',  () => {
        const volume = new Volume();
        const gallonValue = new QuantityMeasurement(volume, volume.unit.GALLON, 1);
        const litreValue = new QuantityMeasurement(volume, volume.unit.LITRE, 3.785);
        return expect(gallonValue.additionOfUnits(litreValue, volume.unit.LITRE)).resolves.toBe(7.57);
    });

    test('given1LitreAnd1000miliLitres_WhenAdded_ShouldReturn2Litres',  () => {
        const volume = new Volume();
        const litreValue = new QuantityMeasurement(volume, volume.unit.LITRE, 1);
        const miliLitreValue = new QuantityMeasurement(volume, volume.unit.MILILITRE, 1000);
        return expect(litreValue.additionOfUnits(miliLitreValue, volume.unit.LITRE)).resolves.toBe(2);
    });
})

describe('testsForCompareWeightAndAddingWeight', () => {
    test('given1KilogramAnd1000Grams_WhenCompared_ShouldReturnTrue',  () => {
        const weight = new Weight();
        const kiloGramValue = new QuantityMeasurement(weight, weight.unit.KILOGRAM, 1);
        const gramValue = new QuantityMeasurement(weight, weight.unit.GRAM, 1000);

        return expect(kiloGramValue.equal(gramValue)).resolves.toBe(true);
    });

    test('given1TonneAnd1000Kilograms_WhenCompared_ShouldReturnTrue',  () => {
        const weight = new Weight();
        const tonneValue = new QuantityMeasurement(weight, weight.unit.TONNE, 1);
        const kiloGramValue = new QuantityMeasurement(weight, weight.unit.KILOGRAM, 1000);
        return expect(tonneValue.equal(kiloGramValue)).resolves.toBe(true);
    });

    test('given1TonneAnd1000Grams_WhenAdded_ShouldReturn1001Kilogram',  () => {
        const weight = new Weight();
        const tonneValue = new QuantityMeasurement(weight, weight.unit.TONNE, 1);
        const gramValue = new QuantityMeasurement(weight, weight.unit.GRAM, 1000);
        return expect(tonneValue.additionOfUnits(gramValue, weight.unit.KILOGRAM)).resolves.toBe(1001);
    });    

})

describe('testsForCompareWeightAndAddingWeight', () => {
    test('given212FarenheitAnd100Celcius_WhenCompared_ShouldReturnTrue',  () => {
        const temperature = new Temperature();
        const farenheitValue = new QuantityMeasurement(temperature, temperature.unit.FARENHEIT, 212);
        const celciusValue = new QuantityMeasurement(temperature, temperature.unit.CELCIUS, 100);
        return expect(farenheitValue.equal(celciusValue)).resolves.toBe(true);
    });
})