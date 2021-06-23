// JavaScript Document
// HTML5 Ad Template JS from DoubleClick by Google // modified to remove DCS specific code

// var someElementInHTML;

//Function to run with any animations starting on load, or bringing in images etc
bannerInit = function() {
    // Limit framerate to 5fps
    TweenLite.ticker.fps(22);
    anim();
}
anim = function() {

    t1repeat = new TimelineMax({ repeat: 3 }); //repeat 3 times for fire animation
    t1 = new TimelineMax();
    t1repeat.to("#fire1", 0.3, { alpha: 1, ease: Power3.easeInOut }, 0.3)
        .to("#fire2", 0.3, { alpha: 1, ease: Power3.easeInOut }, 0.6)
        .to("#fire3", 0.3, { alpha: 1, ease: Power3.easeInOut }, 0.9)
        .to("#fire4", 0.3, { alpha: 1, ease: Power3.easeInOut }, 1.2)
        .to("#fire5", 0.3, { alpha: 1, ease: Power3.easeInOut }, 1.5)
        .to("#fire6", 0.3, { alpha: 1, ease: Power3.easeInOut }, 1.8)
        .to("#fire7", 0.3, { alpha: 1, ease: Power3.easeInOut }, 2.1)
        .call(copyanimation);
}

function copyanimation() {
    t1.to("#rectangle", 1, { alpha: 1, ease: Power3.easeInOut }, 6.5)
        .to("#copy1", 1, { alpha: 1, ease: Power3.easeInOut }, 7.5)
        .to("#logo", 1, { alpha: 1, ease: Power3.easeInOut }, 7.5)
        .to("#copy1", 1, { alpha: 0, ease: Power3.easeInOut }, 9.5)
        .to("#copy2", 1, { alpha: 1, ease: Power3.easeInOut }, 10.5)
        .to("#tc", 1, { alpha: 1, ease: Power3.easeInOut }, 10.5)
        .to("#copy2", 1, { alpha: 0, ease: Power3.easeInOut }, 12.5)
        .to("#copy3", 1, { alpha: 1, ease: Power3.easeInOut }, 13.5)
        .to("#cta", 1, { alpha: 1, ease: Power3.easeInOut }, 14.5);

}