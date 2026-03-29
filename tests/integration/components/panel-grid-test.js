import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | panel-grid', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    let panels = [
      {
        title: 'Panel 1',
      },
      {
        title: 'Panel 2',
      },
      {
        title: 'Panel 3',
      },
      {
        title: 'Panel 4',
      },
    ];

    this.set('panels', panels);

    await render(hbs`<PanelGrid @panels={{this.panels}} />`);

    assert.dom().hasText('Panel 1 Panel 2 Panel 3 Panel 4');
  });
});
