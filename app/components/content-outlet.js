import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
	classNames: ['content-outlet'],
	classNameBindings: ['invertColors:inverted'],
  height: null,
  width: null,
  outletId: computed('outletIndex', function() {
    return `content-outlet-${this.outletIndex}`;
  }),

  didInsertElement: function() {
    this.setDimensions();
  },

  setDimensions() {
    let elemHeight = document.getElementById(`${this.outletId}`).offsetHeight;
    let elemWidth = document.getElementById(`${this.outletId}`).offsetWidth;
    this.set(`height`, elemHeight);
    this.set(`width`, elemWidth);    
  },
});
