// Injects JavaScript code into current document.
var script = document.createElement('script');

script.src = chrome.extension.getURL('scripts/upvote_revealer.js');
script.onload = function() {
	this.remove();
};

(document.head || document.documentElement).appendChild(script);
