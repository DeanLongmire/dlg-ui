import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
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
          route: 'settings.profile',
          index: 0,
        },
        {
          label: 'Accountaaaaaaaaa',
          route: 'accounts.account',
          index: 1,
          param: '1234',
        },
        {
          label: 'Billing',
          route: 'billing',
          index: 2,
        },
      ],
    },
  ];

  title = 'DLG-UI';
}
