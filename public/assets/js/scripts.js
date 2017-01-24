(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// New touch detection since Modernizr was removed
var istouch = {
	$html: '',
	is_touch_device: function is_touch_device() {
		return 'ontouchstart' in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
	},
	init: function init() {
		this.$html = document.querySelector('html');
		if (!istouch.is_touch_device()) {
			this.$html.classList.add('no-touchevents');
		} else {
			this.$html.classList.add('touchevents');
		}
	}
};
istouch.init();
module.exports = istouch;

},{}],2:[function(require,module,exports){
'use strict';

/*
	http://eslint.org/docs/user-guide/configuring
	Instructions on how to enable and disable sections of code or rules
*/
require('./_includes/istouch');

var foo;
if (foo === 'dave') {
	alert('what');
}

},{"./_includes/istouch":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9fanMvX2N1c3RvbS9faW5jbHVkZXMvaXN0b3VjaC5qcyIsImJ1aWxkL19qcy9fY3VzdG9tL3NjcmlwdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBO0FBQ0EsSUFBSSxVQUFVO0FBQ2IsUUFBTyxFQURNO0FBRWIsa0JBQWlCLDJCQUFZO0FBQzVCLFNBQVMsa0JBQWtCLE1BQW5CLElBQStCLFVBQVUsY0FBVixHQUEyQixDQUExRCxJQUFpRSxVQUFVLGdCQUFWLEdBQTZCLENBQXRHO0FBQ0EsRUFKWTtBQUtiLE9BQU0sZ0JBQVk7QUFDakIsT0FBSyxLQUFMLEdBQWEsU0FBUyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQSxNQUFJLENBQUMsUUFBUSxlQUFSLEVBQUwsRUFBZ0M7QUFDL0IsUUFBSyxLQUFMLENBQVcsU0FBWCxDQUFxQixHQUFyQixDQUF5QixnQkFBekI7QUFDQSxHQUZELE1BRU87QUFDTixRQUFLLEtBQUwsQ0FBVyxTQUFYLENBQXFCLEdBQXJCLENBQXlCLGFBQXpCO0FBQ0E7QUFDRDtBQVpZLENBQWQ7QUFjQSxRQUFRLElBQVI7QUFDQSxPQUFPLE9BQVAsR0FBaUIsT0FBakI7Ozs7O0FDaEJBOzs7O0FBSUEsUUFBUSxxQkFBUjs7QUFFQSxJQUFJLEdBQUo7QUFDQSxJQUFJLFFBQVEsTUFBWixFQUFvQjtBQUNuQixPQUFNLE1BQU47QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBOZXcgdG91Y2ggZGV0ZWN0aW9uIHNpbmNlIE1vZGVybml6ciB3YXMgcmVtb3ZlZFxudmFyIGlzdG91Y2ggPSB7XG5cdCRodG1sOiAnJyxcblx0aXNfdG91Y2hfZGV2aWNlOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICgoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KSB8fCAobmF2aWdhdG9yLk1heFRvdWNoUG9pbnRzID4gMCkgfHwgKG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzID4gMCkpO1xuXHR9LFxuXHRpbml0OiBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy4kaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKTtcblx0XHRpZiAoIWlzdG91Y2guaXNfdG91Y2hfZGV2aWNlKCkpIHtcblx0XHRcdHRoaXMuJGh0bWwuY2xhc3NMaXN0LmFkZCgnbm8tdG91Y2hldmVudHMnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy4kaHRtbC5jbGFzc0xpc3QuYWRkKCd0b3VjaGV2ZW50cycpO1xuXHRcdH1cblx0fVxufTtcbmlzdG91Y2guaW5pdCgpO1xubW9kdWxlLmV4cG9ydHMgPSBpc3RvdWNoO1xuIiwiLypcblx0aHR0cDovL2VzbGludC5vcmcvZG9jcy91c2VyLWd1aWRlL2NvbmZpZ3VyaW5nXG5cdEluc3RydWN0aW9ucyBvbiBob3cgdG8gZW5hYmxlIGFuZCBkaXNhYmxlIHNlY3Rpb25zIG9mIGNvZGUgb3IgcnVsZXNcbiovXG5yZXF1aXJlKCcuL19pbmNsdWRlcy9pc3RvdWNoJyk7XG5cbnZhciBmb287XG5pZiAoZm9vID09PSAnZGF2ZScpIHtcblx0YWxlcnQoJ3doYXQnKTtcbn1cbiJdfQ==
