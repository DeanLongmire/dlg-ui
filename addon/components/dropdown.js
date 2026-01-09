import Component from '@glimmer/component';
import { action, get, set } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class DropdownComponent extends Component {
  @tracked isOpen = false;
  @tracked displayValue = null;

  get dropdownClass() {
    if (this.isOpen) {
      return 'dropdown-options display';
    } else {
      return 'dropdown-options';
    }
  }

  get options() {
    let options = [];
    options.push({ label: null });
    this.args.options.forEach((option) => {
      options.push(option);
    });
    return options;
  }

  get placeholder() {
    if (this.args.placeholder) {
      return this.args.placeholder;
    } else {
      return 'Select an option...';
    }
  }

  get value() {
    const value = get(this.args.model, this.args.valuePath);
    return value !== undefined ? value : this.placeholder;
  }
  
  set value(newValue) {
    set(this.args.model, this.args.valuePath, newValue);
    return newValue;
  }

  constructor() {
    super(...arguments);
    if (!this.args.options) {
      throw new Error('Dropdown requires an options array');
    }
  }

  saveSelection(option) {
    if (!this.args.preventDefault) {
      this.value = option?.value;
    }
    this.displayValue = option?.label || null;
    this.args.onSelect?.(option);
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
    if (option.value === this.value) {
      this.saveSelection(null);
    } else {
      this.saveSelection(option);
    }
    this.isOpen = false;
    this.args.onChange?.(this.value);
  }
}
