const {Clutter} = imports.gi;

let
	seat = null,
	originalGetTouchMode = null;

function init() {
	seat = Clutter.get_default_backend().get_default_seat();
	originalGetTouchMode = seat.get_touch_mode;
}

function enable() {
	seat.get_touch_mode = () => true;
}

function disable() {
	seat.get_touch_mode = originalGetTouchMode;
}
