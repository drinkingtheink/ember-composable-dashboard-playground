import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
	classNames: ['content-outlet'],
	classNameBindings: ['invertColors:inverted', 'removePadding:flattened'],
  height: null,
  width: null,
  outletId: computed('outletIndex', function() {
    return `content-outlet-${this.outletIndex}`;
  }),

  didInsertElement: function() {
    this.setDimensions();
  },

  didUpdateAttrs() {
    this._super(...arguments);
    if(this.recalculateDimensions) {
      this.setDimensions();
    }
  },

  setDimensions() {
    let elemHeight = document.getElementById(`${this.outletId}`).offsetHeight;
    let elemWidth = document.getElementById(`${this.outletId}`).offsetWidth;
    this.set(`height`, elemHeight);
    this.set(`width`, elemWidth);    
  },

  actions: {
    toggleInvertColors() {
      let newSetting = !this.get('invertColors');
      this.set('invertColors', newSetting);
    },
    toggleNoPadding() {
      let newSetting = !this.get('removePadding');
      this.set('removePadding', newSetting);
    }
  }
});
