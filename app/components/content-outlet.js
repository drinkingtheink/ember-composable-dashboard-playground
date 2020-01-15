import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
	classNames: ['content-outlet'],
	classNameBindings: ['invertColors:inverted'],
});
