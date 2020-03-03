(function() {var css = [
	".losKji {",
	"    color: #0083b0;",
	"}",
	".dRdAVb {",
	"    background: white;",
	"}",
	".gngoBe {",
	"    background: #dcebd8;",
	"}",
	"body.light .messageBadge .chatTimeLineTo {",
	"    background-color: #66a300;",
	"}",
	"body.light .messageBadge .chatTimeLineTo__icon {",
	"    fill: white;",
	"}",
	"body.light .chatTimeLineReply__iconBox {",
	"    background-color: #66a300;",
	"}",
	"body.light .messageBadge .chatTimeLineReply__replyIcon {",
	"    fill: white;",
	"}",
	"body.light .messageBadge__toAllBadge {",
	"    background-color: #66a300;",
	"}",
	"body.light .messageBadge .chatTimeLineReply__icon {",
	"    fill: white;",
	"}",
	"body.light .messageBadge__toAllBadgeIcon {",
	"    fill: white;",
	"}"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		document.documentElement.appendChild(node);
	}
}
})();
