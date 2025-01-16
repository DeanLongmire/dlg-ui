import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class DropdownComponent extends Component {
    @tracked isOpen = false;

    @action 
    loadClickListener(element) {
        const handleClickOutside = (event) => {
            if (!element.contains(event.target)) {
                this.isOpen = false;
            }
        };

        element.addEventListener('click', (event) => {
            if(!event.target.classList.contains('dropdown-option')) {
                this.isOpen = !this.isOpen;
            }
        });

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }
}
