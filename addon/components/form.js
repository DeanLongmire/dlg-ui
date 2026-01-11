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
    }

    submitForm = async () => {
        let errors = await this.validate();
        console.log(errors);
        if (errors) {
            return;
        }

        this.args.onSubmit?.();
    }

    validate = async () => {
        let errors = await this.validations.validate(this.args.model);
        this.errors = errors;
        return errors;
    }
}
