import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
  @tracked selectedOption = { label: 'a medium size option' };
  @tracked selectedRadioOption = { label: 'a medium size option' };

  options = [
    { label: 'short option' },
    { label: 'a medium size option' },
    { label: 'A very very very long option that is long' },
  ];

  @action
  onSelect(value) {
    this.selectedOption = value;
  }

  @action
  onRadioSelect(value) {
    this.selectedRadioOption = value;
  }

  @action
  onClick() {
    console.log('clicked');
  }
}
