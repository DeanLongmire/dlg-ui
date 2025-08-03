import EmberRouter from '@ember/routing/router';
import config from 'dummy/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('accounts', function () {
    this.route('account', { path: '/:account_id' });
  });
  this.route('profile', function () {
    this.route('settings');
  });
  this.route('billing', function () {
    this.route('settings');
  });
  this.route('more');
});
