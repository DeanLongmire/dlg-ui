import Component from '@glimmer/component';

export default class ButtonPrimaryComponent extends Component {
    onClick = () => {
        if (this.args.onClick) {
            this.args.onClick();
        }
    }
}
