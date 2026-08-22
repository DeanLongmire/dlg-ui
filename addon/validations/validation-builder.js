import { tracked } from '@glimmer/tracking';

export default class ValidationBuilder {
  @tracked validations;
  @tracked didValidate = false;

  constructor() {
    this.validations = [];
  }

  addValidation(validator) {
    this.validations.push(validator);
  }

  async validate() {
    let errors = {};
    for (let validator of this.validations) {
      await validator.validate();
      if (!validator.isValid) {
        errors[validator.valuePath] = validator.errorMessage;
      }
    }
    this.didValidate = true;
    return Object.keys(errors).length ? errors : null;
  }
}
