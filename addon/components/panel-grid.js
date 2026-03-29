import Component from '@glimmer/component';

export default class PanelGridComponent extends Component {
  get panels() {
    return this.args.panels || [];
  }
}
