import Component from '@glimmer/component';
import ValidationBuilder from '../validations/validation-builder';
import { tracked } from '@glimmer/tracking';

export default class FormComponent extends Component {
  @tracked validations = new ValidationBuilder();
  @tracked errors = null;

  get didValidate() {
    return this.validations.didValidate;
  }

  get submitButtonText() {
    return this.args.submitButtonText || 'Submit';
  }

  addValidator = (validator) => {
    this.validations.addValidation(validator);
  };

  updateValidator = (value, valuePath) => {
    const validator = this.validations.validations.find(
      (v) => v.valuePath === valuePath
    );
    if (validator) {
      validator.value = value;
    }
  };

  submitForm = async () => {
    let errors = await this.validate();
    if (errors) {
      return;
    }

    this.args.onSubmit?.();
  };

  validateOne = (valuePath, value) => {
    const validator = this.validations.validations.find(
      (v) => v.valuePath === valuePath
    );
    const errors = validator?.validate(value);
    return errors;
  };

  validate = async (value) => {
    let errors = await this.validations.validate(value);
    this.errors = errors;
    return errors;
  };
}
