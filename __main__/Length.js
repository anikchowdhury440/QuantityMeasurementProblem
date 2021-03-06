class Length {
    unit = {
        FEET : 12,
        INCH : 1,
        YARD : 36,
        CENTIMETER : 0.4
    }

    convert(unitValue, value) {
        return unitValue * value;
    }

    getValueInUnit(add, unitType){
        return add / unitType;
    }
}

module.exports = Length;