class Temperature {
    unit = {
        CELCIUS : 1,
        FARENHEIT : 32
    }

    convert(unitValue, value) {
        if(unitValue == 32) {
            return (value - unitValue) * 5 / 9;
        }
        return unitValue * value;
    }

}

module.exports = Temperature;