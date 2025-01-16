import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @tracked selectedOption = 'short option';
  dropdownOptions = [
    'A very very very long option that is long', 
    'short option', 
    'a medium size option'
  ];

  @action
  onSelect(value) {
    this.selectedOption = value;
  }
}
