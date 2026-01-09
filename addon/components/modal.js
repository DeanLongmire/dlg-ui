import Component from '@glimmer/component';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

export default class ModalComponent extends Component {
    get isOpen() {
        return this.args.isOpen ?? false;
    }

    get icon() {
        return faCircleXmark;
    }

    get primaryButtonText() {
        return this.args.primaryButtonText || 'Done';
    }
    
    get secondaryButtonText() {
        return this.args.secondaryButtonText || 'Cancel';
    }

    acceptAndClose = () => {
        this.args.onAccept?.();
        this.toggleModal();
    }
    
    toggleModal = () => {
        this.args.toggleModal?.();
    }
}
