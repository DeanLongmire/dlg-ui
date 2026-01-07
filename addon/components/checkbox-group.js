import Component from '@glimmer/component';
import { get, set } from '@ember/object';

export default class CheckboxGroupComponent extends Component {
    get value() {
      const value = get(this.args.model, this.args.valuePath);
      return value !== undefined ? value : this.placeholder;
    }
    
    set value(newValue) {
      set(this.args.model, this.args.valuePath, newValue);
      return newValue;
    }
    
    initCheckboxGroup = () => {
        if (typeof this.value !== 'object') {
            this.value = {};
        }
        this.args.options.forEach(option => {
            if (this.value[option.label] === undefined) {
                set(this.value, option.label, false);
            } else {
                set(this.value, option.label, this.value[option.label]);
            }
        });
    }

    onChange = (value) => {
        this.args.onChange?.(value);
    }
}
