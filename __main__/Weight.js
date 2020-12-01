class Weight {
    unit = {
        KILOGRAM : 1,
        GRAM : 0.001,
        TONNE : 1000
    }

    convert(unitValue, value) {
        return unitValue * value;
    }

    getValueInUnit(add, unitType){
        return add / unitType;
    }
}

module.exports = Weight;