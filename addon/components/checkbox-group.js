import Component from '@glimmer/component';

export default class CheckboxGroupComponent extends Component {
  get value() {
    return this.args.value;
  }

  getValue = (key) => {
    return this.value?.[key] ?? false;
  };

  onChange = (key, value) => {
    this.args.onChange?.(key, value);
  };
}
