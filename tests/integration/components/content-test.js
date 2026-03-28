import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | content', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Content />`);

    assert.dom(this.element).hasText('');

    await render(hbs`
      <Content>
        <:header>
          Header
        </:header>
        <:body>
          Body
        </:body>
      </Content>
    `);

    assert.dom(this.element).hasText('Header Body');
  });
});
