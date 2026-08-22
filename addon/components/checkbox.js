import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class CheckboxComponent extends Component {
  @tracked
  _value = this.args.value ?? false;

  get value() {
    return this.args.value ?? false;
  }

  set value(value) {
    this._value = value;
  }

  onChange = () => {
    this.args.onChange?.(!this.value, this.args.option?.label);
    this._value = !this.value;
  };
}
