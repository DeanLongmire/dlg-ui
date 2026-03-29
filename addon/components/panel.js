import Component from '@glimmer/component';

export default class PanelComponent extends Component {
  onClick = () => {
    if (this.args.onClick) {
      this.args.onClick();
    }
  };
}
