import Component from '@glimmer/component';
import { get, set } from '@ember/object';

export default class DatePickerComponent extends Component {
    get value() {
      const value = get(this.args.model, this.args.valuePath);
      return value !== undefined ? value : this.placeholder;
    }
    
    set value(newValue) {
      set(this.args.model, this.args.valuePath, newValue);
      return newValue;
    }

    onChange = (event) => {
      this.value = event.target.value;
      this.args.onChange?.(this.value);
    }
}
