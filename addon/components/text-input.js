import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class TextInputComponent extends Component {
  @tracked
  _value = this.args.value ?? '';

  get value() {
    return this.args.value ?? '';
  }

  set value(value) {
    this._value = value;
  }

  get placeholder() {
    return this.args.placeholder || 'Enter text...';
  }

  updateValue = (event) => {
    this.value = event.target.value;
    this.args.onChange?.(event.target.value);
  };
}
