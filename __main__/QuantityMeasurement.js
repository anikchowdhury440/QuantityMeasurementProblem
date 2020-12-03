const QuantityMeasurementException = require('../__main__/QuantityManagementException');
const ExceptionType = require('../__main__/ExceptionType');

class QuantityMeasurement {
    constructor(convertObj, unit, value) {
        this.convertObj = convertObj;
        this.unit = unit;
        this.value = value;
    }

    equal(that) {
        return new Promise((resolve, reject) => {
            if(this.value == null || that.value == null) {
                reject(new QuantityMeasurementException('Value Passed Null', ExceptionType.NULL_VALUE_PASSED));
            }
            else if(this.convertObj.constructor.name != that.convertObj.constructor.name) {
                reject(new QuantityMeasurementException('Value Passed Null', ExceptionType.REFERENCE_NOT_EQUAL));
            }
            else if(this.unit == undefined || this.unit == undefined) {
                reject(new QuantityMeasurementException('Value Passed Null', ExceptionType.INVALID_UNIT_TYPE));
            }
            else {
                this.compare(that).then(value => resolve(value));
            }
        })
    }

    compare(that) {
        return new Promise(resolve => {
            const firstValue = this.convertObj.convert(this.unit, this.value);
            const secondValue = that.convertObj.convert(that.unit, that.value);
            resolve(firstValue == secondValue);
        })
    }

    additionOfUnits(that, outputUnit) {
        return new Promise(resolve => {
            const firstValue = this.convertObj.convert(this.unit, this.value);
            const secondValue = that.convertObj.convert(that.unit, that.value);
            if(this.convertObj == that.convertObj) {
                resolve(this.convertObj.getValueInUnit(firstValue + secondValue, outputUnit));
            }
        })
    }

}

module.exports = QuantityMeasurement;