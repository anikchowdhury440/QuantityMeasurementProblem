const {convert}= require('./Length')

class QuantityMeasurement {
    constructor(convertObj, unit, value) {
        this.convertObj = convertObj;
        this.unit = unit;
        this.value = value;
    }

    equal(that) {
        return new Promise(resolve => {
            this.compare(that).then(value => resolve(value));
        })
    }

    compare(that) {
        return new Promise(resolve => {
            const firstValue = this.convertObj.convert(this.unit, this.value);
            const secondValue = that.convertObj.convert(that.unit, that.value);
            resolve(firstValue == secondValue);
        })
    }

}

module.exports = QuantityMeasurement;