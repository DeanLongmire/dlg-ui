import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | date-picker', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    let model = {
      date: true,
    };

    this.set('model', model);

    await render(hbs`
      <DatePicker 
        @model={{this.model}}
        @valuePath="date"
        @label="Date"
      />
    `);

    assert.dom().hasText('Date');
  });
});
