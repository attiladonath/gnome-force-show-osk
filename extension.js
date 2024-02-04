import Clutter from 'gi://Clutter';
import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';

let seat = null;
let originalGetTouchMode = null;

export default class ForceShowOskExtension extends Extension {
	constructor(metadata) {
		super(metadata);

		seat = Clutter.get_default_backend().get_default_seat();
		originalGetTouchMode = seat.get_touch_mode;
	}

	enable() {
		seat.get_touch_mode = () => true;
	}

	disable() {
		seat.get_touch_mode = originalGetTouchMode;
	}
}