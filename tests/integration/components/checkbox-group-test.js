import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | checkbox-group', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    let options = [
      { label: 'option 1', value: 1 },
      { label: 'option 2', value: 2 },
      { label: 'option 3', value: 3 },
    ];

    let model = {
      checkboxGroup: { 'short option': true },
    };

    this.set('options', options);
    this.set('model', model);

    await render(hbs`<CheckboxGroup
                      @options={{this.options}}
                      @model={{this.model}}
                      @valuePath="checkboxGroup"
                     />`);

    assert.dom('label').exists({ count: 3 });
    assert.dom(this.element).includesText('option 1');
    assert.dom(this.element).includesText('option 2');
    assert.dom(this.element).includesText('option 3');
    assert.deepEqual(model.checkboxGroup, {
      'short option': true,
      'option 1': false,
      'option 2': false,
      'option 3': false,
    });
  });
});
