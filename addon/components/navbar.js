import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class NavbarComponent extends Component {
  @service router;

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
    if (this.args.onSelect) {
      this.args.onSelect(value);
    }
    if (!this.args.preventDefault) {
      this.router.transitionTo(value.route);
    }
  }
}
