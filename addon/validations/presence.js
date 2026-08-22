import BaseValidator from './base-validator';

export default class PresenceValidator extends BaseValidator {
  constructor(value, valuePath) {
    super();
    this.value = value;
    this.valuePath = valuePath;
  }

  validate() {
    if (
      this.value === '' ||
      this.value === null ||
      this.value === undefined ||
      (typeof this.value === 'boolean' && this.value === false) ||
      (typeof this.value === 'object' &&
        !Object.values(this.value).some((v) => (v ? true : false)))
    ) {
      this.errorMessage = 'This field is required';
      this.isValid = false;
      return this.errorMessage;
    }

    this.isValid = true;
    this.errorMessage = null;
    return null;
  }
}
