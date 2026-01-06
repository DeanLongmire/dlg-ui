import { tracked } from '@glimmer/tracking';
import { get } from '@ember/object';

export default class ValidationBuilder {
    @tracked validations;
    @tracked didValidate = false;

    constructor() {
        this.validations = [];
    }

    addValidation(validator) {
        this.validations.push(validator);
    }

    validate(model) {
        let errors = {};
        for (let validator of this.validations) {
            const value = get(model, validator.valuePath);
            validator.validate(value);
            if (!validator.isValid) {
                errors[validator.valuePath] = validator.errorMessage;
            }
        }
        this.didValidate = true;
        return Object.keys(errors).length ? errors : null;
    }
}