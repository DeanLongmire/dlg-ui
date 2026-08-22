import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class DropdownComponent extends Component {
  @tracked
  isOpen = false;

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
}
