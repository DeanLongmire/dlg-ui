import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class DatePickerComponent extends Component {
  @tracked
  _value = null;

  get value() {
    return this.args.value ?? '';
  }

  set value(value) {
    this._value = value;
  }

  onChange = (event) => {
    this.value = event.target.value;
    this.args.onChange?.(event.target.value);
  };
}
