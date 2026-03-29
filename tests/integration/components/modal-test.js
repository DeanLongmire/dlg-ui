import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | modal', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <Modal @toggleModal={{this.toggleModal}} @isOpen={{this.isModalOpen}}>
        <:header>Modal Header</:header>
        <:body>Modal Body</:body>
      </Modal>
    `);

    assert.dom().hasText('Modal Header Modal Body Cancel Done');
  });
});
