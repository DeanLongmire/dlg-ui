import Component from '@glimmer/component';
import ValidationBuilder from '../validations/validation-builder';
import { tracked } from '@glimmer/tracking';

export default class FormComponent extends Component {
    @tracked validations = new ValidationBuilder();
    @tracked errors = null;

    get didValidate() {
        return this.validations.didValidate;
    }

    addValidator = (validator) => {
        this.validations.addValidation(validator);
    }

    submitForm = () => {
        this.validate();
    }

    validate = () => {
        let res = this.validations.validate(this.args.model);
        console.log(res);
        this.errors = res;
    }
}
