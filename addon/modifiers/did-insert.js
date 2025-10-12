import { modifier } from 'ember-modifier';

export default modifier(function didInsert(element, [callback]) {
  if (typeof callback === 'function') {
    callback(element);
  }
});
