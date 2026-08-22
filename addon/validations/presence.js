import BaseValidator from './base-validator';

export default class PresenceValidator extends BaseValidator {
  constructor(value, valuePath) {
    super();
    this.value = value;
    this.valuePath = valuePath;
  }

  validate(value) {
    const valueToValidate = value ?? this.value;
    if (
      valueToValidate === '' ||
      valueToValidate === null ||
      valueToValidate === undefined ||
      (typeof valueToValidate === 'boolean' && valueToValidate === false) ||
      (typeof valueToValidate === 'object' &&
        !Object.values(valueToValidate).some((v) => (v ? true : false)))
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
