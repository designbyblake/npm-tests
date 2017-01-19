// New touch detection since Modernizr was removed
function is_touch_device() {
	return (('ontouchstart' in window)  || (navigator.MaxTouchPoints > 0)  || (navigator.msMaxTouchPoints > 0));
}
	 
if (!is_touch_device()) {
	document.classList.add('no-touchevents');
}else{
	document.classList.add('touchevents');
}