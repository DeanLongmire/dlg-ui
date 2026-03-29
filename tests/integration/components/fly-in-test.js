import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | fly-in', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <FlyIn @icon={{this.icon}} @yPercentage="20%" @title="Most Yards" @titleOffset="12%">
        <:dropdown>
          1st P. Name 2nd P. Name 3rd P. Name
        </:dropdown>
      </FlyIn>
    `);

    assert.dom().hasText('Most Yards 1st P. Name 2nd P. Name 3rd P. Name');
  });
});
