import Component from '@glimmer/component';
import { action, get, set } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class DropdownComponent extends Component {
  @tracked displayValue = null;
  @tracked isOpen = false;

  get displaySelectedOption() {
    if (this.displayValue) {
      return this.displayValue;
    } else {
      return this.placeholder;
    }
  }

  get placeholder() {
    if (this.args.placeholder) {
      return this.args.placeholder;
    } else {
      return 'Select an option...';
    }
  }

  get value() {
    if (!this.args.model || !this.args.valuePath) {
      return undefined;
    }
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
        this.setDropdownWidth();
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

  @action
  setDropdownWidth() {
    const targetElement = document.querySelector(
      '.' + this.args.class + ' .header-dropdown-select'
    );
    const dropdownOptions = document.querySelector(
      '.' + this.args.class + ' .header-dropdown-options'
    );

    if (targetElement && dropdownOptions) {
      const targetWidth = targetElement.offsetWidth;
      dropdownOptions.style.width = `${targetWidth}px`;
    }
  }
}
