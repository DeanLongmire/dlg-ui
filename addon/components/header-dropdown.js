import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class DropdownComponent extends Component {
  @tracked isOpen = false;
  @tracked selectedOption = this.args.selectedOption;

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
    if (!this.args.selectedOption) {
      throw new Error('Header dropdown requires a selected option');
    }
  }

  saveSelection(value) {
    if(!this.args.preventDefault) {
      this.selectedOption = value;
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
    if (option === this.selectedOption) {
      this.isOpen = false;
    } else {
      this.saveSelection(option);
      this.isOpen = false;
    }
  }

  @action
  setDropdownWidth() {
    const targetElement = document.querySelector('.' + this.args.class + ' .header-dropdown-select');
    const dropdownOptions = document.querySelector('.' + this.args.class + ' .header-dropdown-options');

    if (targetElement && dropdownOptions) {
      const targetWidth = targetElement.offsetWidth;
      dropdownOptions.style.width = `${targetWidth}px`;
    }
  }
}
