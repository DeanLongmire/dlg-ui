import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
    @tracked selectedOption = 'Option 1';
    dropdownOptions = ['Option 1', 'Option 2', 'Option 3'];

    @action
    onSelect(value) {
        this.selectedOption = value;
    }
}