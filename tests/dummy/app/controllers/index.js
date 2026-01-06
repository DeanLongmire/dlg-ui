import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
  @tracked isModalOpen = false;
  @tracked name = '';
  @tracked date = '';
  @tracked dropdownValue = '';
  @tracked radioValue;
  @tracked checkboxValue = false;
  @tracked checkboxGroup = { 'short option': true };

  options = [
    { label: 'short option' },
    { label: 'a medium size option' },
    { label: 'A very very very long option that is long' },
  ];

  option = { label: 'Option 1' };

  @action
  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }
}
