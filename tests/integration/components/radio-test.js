import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | radio', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    let options = [
      { label: 'option 1', value: 1 },
      { label: 'option 2', value: 2 },
      { label: 'option 3', value: 3 },
    ];

    let model = {
      radioValue: 1,
    };

    this.set('options', options);
    this.set('model', model);

    await render(hbs`
      <Radio
        @options={{this.options}}
        @name='radio'
        @label='Radio'
        @model={{this}}
        @valuePath="radioValue"
      />
    `);

    assert.dom(this.element).hasText('Radio option 1 option 2 option 3');
  });
});
