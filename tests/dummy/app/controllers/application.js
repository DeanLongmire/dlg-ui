import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @tracked selectedOption = { label: 'short option' };
  @tracked selectedRadioOption = { label: 'short option' };

  options = [
    { label: 'A very very very long option that is long' },
    { label: 'short option' },
    { label: 'a medium size option' },
  ];

  navbarOptions = [
    {
      label: 'Login',
      route: 'login',
      type: 'link',
      index: 0,
    },
    {
      label: 'More',
      route: 'more',
      type: 'link',
      index: 2,
    },
    {
      label: 'Settings',
      route: 'settings',
      type: 'dropdown',
      index: 1,
      dropdownOptions: [
        {
          label: 'Profile',
          route: 'profile',
          index: 0,
        },
        {
          label: 'Accountaaaaaaaaa',
          route: 'account',
          index: 1,
        },
        {
          label: 'Billing',
          route: 'billing',
          index: 2,
        },
      ],
    },
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
