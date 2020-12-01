class Length {
    unit = {
        FEET : 12,
        INCH : 1
    }

    convert(unitValue, value) {
        return unitValue * value;
    }

}

module.exports = Length;