import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | dropdown', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    let options = [
      { label: 'option 1', value: 1 },
      { label: 'option 2', value: 2 },
      { label: 'option 3', value: 3 },
    ];

    let model = {
      dropdownValue: true,
    };

    this.set('model', model);
    this.set('options', options);

    await render(hbs`
      <Dropdown
        @class='custom-dropdown'
        @options={{this.options}}
        @placeholder='Select an option...'
        @model={{this.model}}
        @valuePath="dropdownValue"
      />
    `);

    assert
      .dom(this.element)
      .hasText('Select an option... option 1 option 2 option 3');
  });
});
