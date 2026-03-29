import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Modifier | did-insert', function (hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function (assert) {
    assert.expect(1);

    let model = {
      func: () => {
        assert.ok(true);
      },
    };

    this.set('model', model);

    await render(hbs`<div {{did-insert this.model.func}}></div>`);
  });
});
