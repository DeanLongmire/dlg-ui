import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | text-input', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    let model = {
      name: null,
    };

    this.set('model', model);

    await render(hbs`
      <TextInput
        @placeholder='Enter text here...'
        @model={{this.model}}
        @valuePath="name"
      />
    `);

    assert.dom().hasText('');
  });
});
