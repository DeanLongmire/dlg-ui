import Component from '@glimmer/component';
import PresenceValidator from '../../validations/presence';

export default class FormFieldComponent extends Component {
    get error() {
        return this.args.errors?.[this.args.valuePath] || null;
    }

    get fieldType() {
        return this.args.field?.constructor?.name || null;
    }

    get didValidate() {
        return this.args.didValidate;
    }

    constructor() {
        super(...arguments);
        if (this.args.required) {
            this.args.addValidator(new PresenceValidator(this.args.valuePath));
        }
    }

    onChange = () => {
        if (this.didValidate) {
            this.args.validate();
        }
    }
}
