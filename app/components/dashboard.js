import Component from '@ember/component';
import content from '../fixtures/content-map';

export default Component.extend({
	classNames: ['app-dashboard'],
  content: content,
  resizeListener: null,
	getCalcPropValue(item, prop) {
		return parseInt(window.getComputedStyle(item).getPropertyValue(prop));
  },

  init() {
    this._super();
    this.resizeListener = () => this.resizeContent();
    window.addEventListener('resize', this.resizeListener);
  },

	didRender() {
		this.resizeContent();
  },

  willDestroyElement() {
    window.removeEventListener('resize', this.resizeListener);
  },

	resizeContent() {
		const resizeItem = (item) => {
      const content = item.querySelector('.content')
			const rowHeight = this.getCalcPropValue(this.element, 'grid-auto-rows');
      const rowGap = this.getCalcPropValue(this.element, 'grid-row-gap');
			const rowSpan = Math.ceil(
				(content.clientHeight + rowGap) / (rowHeight + rowGap)
      );

			item.style.gridRowEnd = `span ${rowSpan}`;
		}

		this.element.querySelectorAll('.content-outlet').forEach(resizeItem);
	},
});
