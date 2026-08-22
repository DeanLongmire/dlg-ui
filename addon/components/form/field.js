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

  get value() {
    return this.args.value;
  }

  constructor() {
    super(...arguments);
    if (this.args.required) {
      this.args.addValidator(
        new PresenceValidator(this.args.value, this.args.valuePath)
      );
    }
  }

  onChange = (value) => {
    this.args.updateValidator?.(value, this.args.valuePath);
    if (this.didValidate) {
      this.args.validate(value);
    }
    this.args.onChange?.(value);
  };

  onGroupChange = (key, value) => {
    const newValue = {
      ...(this.args.value ?? {}),
      [key]: value,
    };
    this.args.updateValidator?.(newValue, this.args.valuePath);
    if (this.didValidate) {
      this.args.validate(newValue);
    }
    this.args.onChange?.(key, value);
  };
}
