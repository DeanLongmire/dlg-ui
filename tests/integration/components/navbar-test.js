import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | navbar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    let navbarOptions = [
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
        placeholder: 'Settings',
        preventDefault: true,
        dropdownOptions: [
          {
            label: 'Profile',
            route: 'settings.profile',
            index: 0,
          },
          {
            label: 'Account',
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

    this.set('navbarOptions', navbarOptions);
    this.set('title', 'My Navbar');

    await render(hbs`
      <Navbar @options={{this.navbarOptions}} @title={{this.title}}></Navbar>
    `);

    assert
      .dom(this.element)
      .hasText('My Navbar More Settings Profile Account Billing Login');
  });
});
