var animation = require('alloy/animation');
var args = arguments[0] || {};

// Required
var content = args.content;

// Optional
var animate = args.animate || false;
var fade = args.fade || false;
var contentHeight = args.contentHeight || Ti.Platform.displayCaps.platformHeight;


var hiddenHeight = '-' + contentHeight + 'dp';

$.container.height = Ti.Platform.displayCaps.platformHeight - 20;
$.container.add(content);

// Animated dialog
if (animate && !fade) {
    $.container.top = hiddenHeight;
    $.widget.addEventListener("open", function(){
        animateOpen();
    });
}

// Fade dialog
if (fade && !animate) {
    $.container.opacity = 0;
    $.widget.addEventListener("open", function(){
        fadeInOpen();
    });
}

$.widget.open({
    animated: false
});

// animatedOpen and fadeInOpen are called automatically when the widgets open() 
// function is called
function animateOpen() {
    $.container.animate(Ti.UI.createAnimation({
        top: 0,
        duration: 500
    }));
}

function fadeInOpen() {
    animation.fadeIn($.container, 500);
}

// Parent controller must call the corresponding animateClose or fadeOutClose. 
function animateClose() {
    var animateClosing = Ti.UI.createAnimation({
        top: hiddenHeight,
        duration: 500
    });
    animateClosing.addEventListener("complete", function(){
        $.widget.close();
    });

    $.container.animate(animateClosing);
}
$.widget.animateClose = animateClose;


function fadeOutclose() {
    animation.fadeOut($.container, 500, function(){
        $.widget.close();
    });
}
$.widget.fadeOutclose = fadeOutclose;