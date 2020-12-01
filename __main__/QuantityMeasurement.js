
class QuantityMeasurement {
    constructor(convertObj, unit, value) {
        this.convertObj = convertObj;
        this.unit = unit;
        this.value = value;
    }

    equal(that) {
        return new Promise(resolve => {
            if(this.value == null || that.value == null) {
                resolve(false);
            }
            else if(this.convertObj != that.convertObj) {
                resolve(false);
            }
            else if(this.unit == undefined || this.unit == undefined) {
                resolve(false);
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

}

module.exports = QuantityMeasurement;