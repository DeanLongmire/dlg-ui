import { tracked } from '@glimmer/tracking';

export default class BaseValidator {
  @tracked errorMessage = '';
  @tracked isValid = false;
  @tracked value = '';
  @tracked valuePath = '';

  validate(value) {
    throw new Error('The validate method must be implemented by subclasses');
  }
}
