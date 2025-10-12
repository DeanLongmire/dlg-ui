'use strict';

module.exports = {
  name: require('./package').name,

  included(app) {
    this._super.included.apply(this, arguments);

    // Import individual CSS files for proper processing
    app.import('addon/styles/dropdown.css');
    app.import('addon/styles/fly-in.css');
    app.import('addon/styles/navbar.css');
    app.import('addon/styles/player-card.css');
  },
};
