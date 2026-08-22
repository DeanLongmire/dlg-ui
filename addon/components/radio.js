import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
export default class RadioComponent extends Component {
  @tracked
  _value = this.args.value ?? null;

  get options() {
    return this.args.options || [];
  }

  get value() {
    return this.args.value ?? null;
  }

  set value(value) {
    this._value = value;
  }

  onChange = (option) => {
    this.value = option.value;
    this.args.onChange?.(option.value);
  };
}
