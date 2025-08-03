import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class RadioComponent extends Component {
  @tracked
  selectedOption = this.args.defaultOption || {};

  get options() {
    let options = [];
    this.args.options.forEach((option) => {
      if (option.label === this.selectedOption.label) {
        option.isChecked = true;
      }
      options.push(option);
    });
    return this.args.options || [];
  }

  @action
  onChange(option) {
    this.selectedOption = option;
    this.args.onChange(option);
  }
}
