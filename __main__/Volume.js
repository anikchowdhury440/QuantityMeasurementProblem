class Volume {
    unit = {
        LITRE : 1,
        GALLON: 3.78,
        MILILITRE : 0.001
    }

    convert(unitValue, value) {
        return unitValue * value;
    }

    getValueInUnit(add, unitType){
        return add / unitType;
    }
}

module.exports = Volume;