import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
  @tracked selectedOption = { label: 'short option' };
  @tracked selectedRadioOption = { label: 'short option' };

  options = [
    { label: 'A very very very long option that is long' },
    { label: 'short option' },
    { label: 'a medium size option' },
  ];

  @action
  onSelect(value) {
    this.selectedOption = value;
  }

  @action
  onRadioSelect(value) {
    this.selectedRadioOption = value;
  }
}
