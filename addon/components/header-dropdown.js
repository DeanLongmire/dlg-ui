import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class DropdownComponent extends Component {
  @tracked isOpen = false;

  @tracked
  _value = this.args.value ?? '';

  get displayValue() {
    return (
      this.options.find((option) => option.value === this.value)?.label ?? null
    );
  }

  get value() {
    return this.args.value ?? '';
  }

  set value(value) {
    this._value = value;
  }

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

  get options() {
    let options = [];
    options.push({ label: null });
    this.args.options.forEach((option) => {
      options.push(option);
    });
    return options;
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
      this.args.onChange?.(undefined);
    } else {
      this.saveSelection(option);
      this.args.onChange?.(option.value);
    }
    this.isOpen = false;
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
