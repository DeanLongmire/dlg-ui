import BaseValidator from './base-validator';

export default class PresenceValidator extends BaseValidator {
    constructor(valuePath) {
        super();
        this.valuePath = valuePath;
    }
    
    validate(value) {
        if (value === ''
            || value === null
            || value === undefined
            || (typeof value === 'boolean' && value === false)
            || (typeof value === 'object' && !Object.values(value).some(v => v ? true : false))) {
            this.errorMessage = 'This field is required';
            this.isValid = false;
            return this.errorMessage;
        }

        this.isValid = true;
        this.errorMessage = null;
        return null;
    }
}
