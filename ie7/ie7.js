/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'GLGlyphs\'">' + entity + '</span>' + html;
	}
	var icons = {
		'glg-project': '&#x61;',
		'glg-contract2': '&#x68;',
		'glg-follow': '&#x66;',
		'glg-edit': '&#x67;',
		'glg-watch': '&#xe603;',
		'glg-email': '&#x69;',
		'glg-multi_project': '&#x6a;',
		'glg-lock': '&#x6b;',
		'glg-phone': '&#x6c;',
		'glg-list': '&#x6d;',
		'glg-group': '&#x6e;',
		'glg-x': '&#x6f;',
		'glg-check': '&#x70;',
		'glg-recruit': '&#x64;',
		'glg-company': '&#x71;',
		'glg-print': '&#x72;',
		'glg-send_email': '&#x73;',
		'glg-beaker': '&#x74;',
		'glg-action_arrow': '&#x65;',
		'glg-cog': '&#x75;',
		'glg-money': '&#x76;',
		'glg-contract': '&#x77;',
		'glg-expand': '&#x78;',
		'glg-pin': '&#x79;',
		'glg-profile': '&#x7a;',
		'glg-tiles': '&#x31;',
		'glg-refresh': '&#x32;',
		'glg-caution': '&#x33;',
		'glg-idea': '&#x34;',
		'glg-star': '&#x35;',
		'glg-download': '&#x36;',
		'glg-add2': '&#x37;',
		'glg-new_burst': '&#x38;',
		'glg-dashboard': '&#x30;',
		'glg-grid': '&#x39;',
		'glg-lines': '&#x3d;',
		'glg-tick': '&#x60;',
		'glg-alert': '&#x41;',
		'glg-share': '&#x42;',
		'glg-check2': '&#x43;',
		'glg-heart': '&#x44;',
		'glg-forward': '&#x45;',
		'glg-back': '&#x46;',
		'glg-car': '&#x47;',
		'glg-search': '&#x48;',
		'glg-arrow_down': '&#x49;',
		'glg-arrow_up': '&#x4a;',
		'glg-arrow_left': '&#x4b;',
		'glg-arrow_right': '&#x4c;',
		'glg-activity': '&#x4d;',
		'glg-multi_doc': '&#x4e;',
		'glg-add_doc': '&#x4f;',
		'glg-stop': '&#x50;',
		'glg-people': '&#x51;',
		'glg-info': '&#x52;',
		'glg-chevron_right': '&#x53;',
		'glg-help': '&#x54;',
		'glg-chevron_down': '&#x55;',
		'glg-add': '&#x56;',
		'glg-delete': '&#x57;',
		'glg-trash': '&#x58;',
		'glg-paper': '&#x59;',
		'glg-thumbs_up': '&#x5a;',
		'glg-tick-right': '&#x21;',
		'glg-comment': '&#x63;',
		'glg-time': '&#x62;',
		'glg-pin_fill': '&#xe600;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/glg-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
