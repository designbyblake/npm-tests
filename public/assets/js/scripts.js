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

var istouch = require('./_includes/istouch');

},{"./_includes/istouch":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9fanMvX2N1c3RvbS9faW5jbHVkZXMvaXN0b3VjaC5qcyIsImJ1aWxkL19qcy9fY3VzdG9tL3NjcmlwdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBO0FBQ0EsSUFBSSxVQUFTO0FBQ1osUUFBTSxFQURNO0FBRVosa0JBQWdCLDJCQUFXO0FBQzFCLFNBQVMsa0JBQWtCLE1BQW5CLElBQWdDLFVBQVUsY0FBVixHQUEyQixDQUEzRCxJQUFtRSxVQUFVLGdCQUFWLEdBQTZCLENBQXhHO0FBQ0EsRUFKVztBQUtaLE9BQUssZ0JBQVU7QUFDZCxPQUFLLEtBQUwsR0FBYSxTQUFTLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBLE1BQUksQ0FBQyxRQUFRLGVBQVIsRUFBTCxFQUFnQztBQUMvQixRQUFLLEtBQUwsQ0FBVyxTQUFYLENBQXFCLEdBQXJCLENBQXlCLGdCQUF6QjtBQUNBLEdBRkQsTUFFSztBQUNKLFFBQUssS0FBTCxDQUFXLFNBQVgsQ0FBcUIsR0FBckIsQ0FBeUIsYUFBekI7QUFDQTtBQUNEO0FBWlcsQ0FBYjtBQWNBLFFBQVEsSUFBUjtBQUNBLE9BQU8sT0FBUCxHQUFpQixPQUFqQjs7Ozs7QUNoQkEsSUFBSSxVQUFVLFFBQVEscUJBQVIsQ0FBZCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBOZXcgdG91Y2ggZGV0ZWN0aW9uIHNpbmNlIE1vZGVybml6ciB3YXMgcmVtb3ZlZFxudmFyIGlzdG91Y2ggPXtcblx0JGh0bWw6JycsXG5cdGlzX3RvdWNoX2RldmljZTpmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gKCgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpICB8fCAobmF2aWdhdG9yLk1heFRvdWNoUG9pbnRzID4gMCkgIHx8IChuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cyA+IDApKTtcblx0fSxcblx0aW5pdDpmdW5jdGlvbigpe1xuXHRcdHRoaXMuJGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJyk7XG5cdFx0aWYgKCFpc3RvdWNoLmlzX3RvdWNoX2RldmljZSgpKSB7XG5cdFx0XHR0aGlzLiRodG1sLmNsYXNzTGlzdC5hZGQoJ25vLXRvdWNoZXZlbnRzJyk7XG5cdFx0fWVsc2V7XG5cdFx0XHR0aGlzLiRodG1sLmNsYXNzTGlzdC5hZGQoJ3RvdWNoZXZlbnRzJyk7XG5cdFx0fVxuXHR9XG59XG5pc3RvdWNoLmluaXQoKTtcbm1vZHVsZS5leHBvcnRzID0gaXN0b3VjaDsiLCJ2YXIgaXN0b3VjaCA9IHJlcXVpcmUoJy4vX2luY2x1ZGVzL2lzdG91Y2gnKTtcbiJdfQ==
