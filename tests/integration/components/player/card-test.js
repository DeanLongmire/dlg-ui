import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | player/card', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <Player::Card
        @player="Player Name"
        @trophyCount={{5}}
        @points={{100}}
        @position="QB"
        @picture={{this.picture}}
      />
    `);

    assert.dom(this.element).hasText('QB Player Name 100 pts');
  });
});
