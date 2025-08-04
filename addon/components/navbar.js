import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class NavbarComponent extends Component {
  @service router;
  @tracked selectedOption = null;

  get title() {
    return this.args.title || 'dlg-ui';
  }

  get homeRoute() {
    return {
      route: this.args.homeRoute || 'index',
    };
  }

  get navbarOptions() {
    let options = this.args.options;
    return options.sort((a, b) => b.index - a.index);
  }

  // TODO: try and detect word wrap on first element and style accordingly, can be done with JS

  constructor() {
    super(...arguments);
    if (!this.args.options) {
      throw new Error('Navbar requires an options array');
    }
  }

  @action
  onSelect(value) {
    this.selectedOption = value;
    if (this.args.onSelect) {
      this.args.onSelect(value);
    }
    if (!this.args.preventDefault && !value.param) {
      this.router.transitionTo(value.route);
    } else if (!this.args.preventDefault && value.param) {
      this.router.transitionTo(value.route, value.param);
    }
  }
}
