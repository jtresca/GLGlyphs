/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'GLGlyphs\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-project': '&#x61;',
		'icon-contract2': '&#x68;',
		'icon-follow': '&#x66;',
		'icon-edit': '&#x67;',
		'icon-watch': '&#xe603;',
		'icon-email': '&#x69;',
		'icon-multi_project': '&#x6a;',
		'icon-lock': '&#x6b;',
		'icon-phone': '&#x6c;',
		'icon-list': '&#x6d;',
		'icon-group': '&#x6e;',
		'icon-x': '&#x6f;',
		'icon-check': '&#x70;',
		'icon-recruit': '&#x64;',
		'icon-company': '&#x71;',
		'icon-print': '&#x72;',
		'icon-send_email': '&#x73;',
		'icon-beaker': '&#x74;',
		'icon-action_arrow': '&#x65;',
		'icon-cog': '&#x75;',
		'icon-money': '&#x76;',
		'icon-contract': '&#x77;',
		'icon-expand': '&#x78;',
		'icon-pin': '&#x79;',
		'icon-profile': '&#x7a;',
		'icon-tiles': '&#x31;',
		'icon-refresh': '&#x32;',
		'icon-caution': '&#x33;',
		'icon-idea': '&#x34;',
		'icon-star': '&#x35;',
		'icon-download': '&#x36;',
		'icon-add2': '&#x37;',
		'icon-new_burst': '&#x38;',
		'icon-dashboard': '&#x30;',
		'icon-grid': '&#x39;',
		'icon-lines': '&#x3d;',
		'icon-tick': '&#x60;',
		'icon-alert': '&#x41;',
		'icon-share': '&#x42;',
		'icon-check2': '&#x43;',
		'icon-heart': '&#x44;',
		'icon-forward': '&#x45;',
		'icon-back': '&#x46;',
		'icon-car': '&#x47;',
		'icon-search': '&#x48;',
		'icon-arrow_down': '&#x49;',
		'icon-arrow_up': '&#x4a;',
		'icon-arrow_left': '&#x4b;',
		'icon-arrow_right': '&#x4c;',
		'icon-activity': '&#x4d;',
		'icon-multi_doc': '&#x4e;',
		'icon-add_doc': '&#x4f;',
		'icon-stop': '&#x50;',
		'icon-people': '&#x51;',
		'icon-info': '&#x52;',
		'icon-chevron_right': '&#x53;',
		'icon-help': '&#x54;',
		'icon-chevron_down': '&#x55;',
		'icon-add': '&#x56;',
		'icon-delete': '&#x57;',
		'icon-trash': '&#x58;',
		'icon-paper': '&#x59;',
		'icon-thumbs_up': '&#x5a;',
		'icon-tick-right': '&#x21;',
		'icon-comment': '&#x63;',
		'icon-time': '&#x62;',
		'0': 0
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
}());
