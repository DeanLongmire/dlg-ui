import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class DropdownComponent extends Component {
  @tracked isOpen = false;
  @tracked _selectedOption = this.args.selectedOption;

  get dropdownClass() {
    if (this.isOpen) {
      return 'dropdown-options display';
    } else {
      return 'dropdown-options';
    }
  }

  get selectedOption() {
    if (this.args.selectedOption) {
      return this.args.selectedOption;
    } else {
      null;
    }
  }

  get placeholder() {
    if (this.args.placeholder) {
      return this.args.placeholder;
    } else {
      return 'Select an option...';
    }
  }

  constructor() {
    super(...arguments);
    if (!this.args.onSelect) {
      console.warn('Dropdown 2-way binding needs an onSelect action');
    }
    if (!this.args.options) {
      throw new Error('Dropdown requires an options array');
    }
    if (this.args.forceSelection && !this.args.selectedOption) {
      throw new Error(
        'Dropdown requires a selected option when forceSelection is true'
      );
    }
  }

  saveSelection(value) {
    if (!this.args.preventDefault) {
      this._selectedOption = value;
    }
    this.args.onSelect(value);
  }

  @action
  loadClickListener(element) {
    const handleClickOutside = (event) => {
      if (!element.contains(event.target)) {
        this.isOpen = false;
      }
    };

    element.addEventListener('click', (event) => {
      if (!event.target.classList.contains('dropdown-option')) {
        this.isOpen = !this.isOpen;
      }
    });

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }

  @action
  makeSelection(option) {
    if (!this.args.forceSelection && option === this.selectedOption) {
      this.saveSelection(null);
      this.isOpen = false;
    } else {
      this.saveSelection(option);
      this.isOpen = false;
    }
  }
}
