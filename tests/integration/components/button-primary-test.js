import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | button-primary', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<ButtonPrimary />`);

    assert.dom().hasText('');

    await render(hbs`
      <ButtonPrimary>
        template block text
      </ButtonPrimary>
    `);

    assert.dom().hasText('template block text');
  });
});
