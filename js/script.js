// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!
// End of Your Code . Don't delete that line below!!
});

$(function collabTransition() {
    var controller = new ScrollMagic.Controller();
    // build tween
    var tween = TweenMax.staggerFromTo("#sponsor_id", 2, {right: 1500}, {right: 0, ease: Power4.easeOut}, 0.0);

    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger_sponsor", duration: 1})
                    .setTween(tween)
//                    .addIndicators({name: "contact"}) // add indicators (requires plugin)
                    .addTo(controller);

                    
});
