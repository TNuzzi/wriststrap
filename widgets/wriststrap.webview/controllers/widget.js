var args = arguments[0] || {};
var url = args.url;

console.log(url);

$.webview.url = url;
$.win.open();

function close() {
    $.win.close();
}