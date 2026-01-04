import Component from '@glimmer/component';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

export default class ModalComponent extends Component {
    get isOpen() {
        return this.args.isOpen ?? false;
    }

    get icon() {
        return faCircleXmark;
    }

    acceptAndClose = () => {
        if (this.args.onAccept) {
            this.args.onAccept();
        }
        this.toggleModal();
    }

    toggleModal = () => {
        if (this.args.toggleModal) {
            this.args.toggleModal();
        }
    }
}
