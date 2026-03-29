import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | form', function (hooks) {
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

    await render(hbs`
      <Form @class="custom-form" @model={{this.model}} @secondaryButtonText="Cancel" as |form|>
        <form.Field @label='Form Radio' @required={{true}} @valuePath="radioValue" as |field|>
          <field.Radio 
            @options={{this.options}}
            @name='radio'
            @model={{this.model}}
          />
        </form.Field>

        <form.Field @label='Form Dropdown' @valuePath="dropdownValue" @required={{true}} as |field|>
          <field.Dropdown 
            @options={{this.options}}
            @placeholder='Select an option...'
            @model={{this.model}}
          />
        </form.Field>

        <form.Field @label='Form Text Input' @valuePath="name" @required={{true}} as |field|>
          <field.TextInput
            @placeholder='Enter text here...'
            @model={{this.model}}
          />
        </form.Field>

        <form.Field @valuePath="date" @required={{true}} @label='Form Date Picker' as |field|>
          <field.DatePicker 
            @model={{this.model}}
          />
        </form.Field>

        <form.Field @valuePath="checkboxValue" @label='Form Checkbox' @required={{true}} as |field|>
          <field.Checkbox 
            @model={{this.model}}
            @option={{this.option}}
          />
        </form.Field>

        <form.Field @label="Form Checkbox Group" @valuePath="checkboxGroup" @required={{true}} as |field|>
          <field.CheckboxGroup
            @options={{this.options}}
            @model={{this.model}}
          />
        </form.Field>
      </Form>
    `);

    assert
      .dom()
      .hasText(
        'Form Radio * option 1 option 2 option 3 Form Dropdown * Select an option... option 1 option 2 option 3 Form Text Input * Form Date Picker * Form Checkbox * Form Checkbox Group * option 1 option 2 option 3 Submit Cancel'
      );
  });
});
