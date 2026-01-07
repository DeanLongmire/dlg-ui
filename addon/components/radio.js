import Component from '@glimmer/component';
import { get, set } from '@ember/object';

export default class RadioComponent extends Component {
  get options() {
    return this.args.options || [];
  }

  get value() {
    if (!this.args.model || !this.args.valuePath) {
      return undefined;
    }
    const value = get(this.args.model, this.args.valuePath);
    return value !== undefined ? value : this.placeholder;
  }
  
  set value(newValue) {
    set(this.args.model, this.args.valuePath, newValue);
    return newValue;
  }

  onChange = (option) => {
    this.value = option;
    this.args.onChange?.(option);
  }
}
