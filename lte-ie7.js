/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'GLG_Icons\'">' + entity + '</span>' + html;
	}
	var icons = {
<<<<<<< HEAD
			'icon-action_arrow' : '&#x65;',
			'icon-recruit' : '&#x64;',
			'icon-comment' : '&#x63;',
			'icon-time' : '&#x62;',
			'icon-project' : '&#x61;'
=======
			'icon-project' : '&#x61;',
			'icon-time' : '&#x62;',
			'icon-comment' : '&#x63;',
			'icon-recruit' : '&#x64;'
>>>>>>> 1c748a586453c60818154e917b33c09575c2041a
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};