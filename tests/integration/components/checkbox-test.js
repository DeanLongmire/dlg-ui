import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | checkbox', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    let option = { label: 'option 1', value: 1 };

    let model = {
      checkbox: true,
    };

    this.set('option', option);
    this.set('model', model);

    await render(hbs`<Checkbox 
                      @model={{this.model}}
                      @valuePath="checkbox"
                      @option={{this.option}}
                     />`);

    assert.dom('label').exists({ count: 1 });
    assert.dom(this.element).includesText('option 1');
    assert.equal(model.checkbox, true);
  });
});
