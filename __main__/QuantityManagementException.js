class QuantityMeasurementException extends Error{
    
    constructor(message, type){
        super(message)
        this.type = type;
    }
}

module.exports = QuantityMeasurementException;