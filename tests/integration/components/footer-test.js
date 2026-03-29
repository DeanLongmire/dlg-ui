import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | footer', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Footer />`);

    assert.dom('.page-footer-yield').doesNotExist();
    assert.dom('.page-footer-static').hasText('Footer');

    await render(hbs`
      <Footer>
        template block text
      </Footer>
    `);

    assert.dom('.page-footer-yield').exists();
    assert.dom('.page-footer-yield').hasText('template block text');
    assert.dom('.page-footer-static').hasText('Footer');
  });
});
