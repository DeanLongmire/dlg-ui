import Component from '@glimmer/component';
import { get, set } from '@ember/object';

export default class TextInputComponent extends Component {

    get placeholder() {
        return this.args.placeholder || 'Enter text...';
    }

    get value() {
      const value = get(this.args.model, this.args.valuePath);
      return value !== undefined ? value : null;
    }

    set value(newValue) {
      set(this.args.model, this.args.valuePath, newValue);
      return newValue;
    }

    updateValue = (event) => {
      this.value = event.target.value;
      this.args.onChange?.(this.value);
    }
}
