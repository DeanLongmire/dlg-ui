import Component from '@glimmer/component';
import { get, set } from '@ember/object';

export default class CheckboxComponent extends Component {
    get value() {
      const value = get(this.args.model, this.args.valuePath);
      return value !== undefined ? value : this.placeholder;
    }
    
    set value(newValue) {
      set(this.args.model, this.args.valuePath, newValue);
      return newValue;
    }

    onChange = () => {
        if (this.value === undefined) {
            this.value = true;
        } else {
            this.value = !this.value;
        }
        this.args.onChange?.(this.value);
    }
}
