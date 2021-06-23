bannerInit = function() {
    container = document.getElementById('content_ad');
    container.style.opacity = 1;
    container.style.visibility = "visible";
    anim();
    confettiFunction(true);

}



confettiFunction = function(falling) {

    if(falling == true){
        TweenLite.set("#confetti",{perspective:600})
        TweenLite.set("#confetti div",{xPercent:"-50%",yPercent:"-50%"})
    
        // add more confetti
        var total = 120;
        // set x and y of where the confetti spawn
        var confetti = document.getElementById("confetti"),	w = 600 , h = 250;
        
        // generate confetti and repeat
        for (i=0; i<total; i++){
            // create a div with the confetti in it
            var Div = document.createElement('div');
            // place the div in a random place
            TweenLite.set(Div,{attr:{class:'dot'},x:R(0,w),y:R(-200,-150),z:R(-200,200)});
            // append html front and back card to each confetti
            Div.innerHTML = '<div class="flip-card-front"></div><div class="flip-card-back"></div>';
            // add it to the div
            confetti.appendChild(Div);
            // use function below to animate the div
            animm(Div);
            // and repeat obviously
        }
        
        function animm(elm){   
            TweenMax.to(elm,R(4,8),{y:h+100,ease:Linear.easeNone,repeat:-1,delay:-15});
            TweenMax.to(elm,R(2,6),{x:'+=100',rotationZ:R(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut});
            TweenMax.to(elm,R(2,8),{rotationX:R(0,360),rotationY:R(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
        };
    
        function R(min,max) {return min+Math.random()*(max-min)};
    }
}


anim = function() {
    var animateIn = 300;
    var animateOut = 600;
    var masterTl = new TimelineMax();

    // TweenMax.set(".shadow",{scale: 0})

    masterTl
    .to(".card", 1, { y: -80, scale: 1.2, rotation: -740 }, 0.5)
    .to(".shadow1, .tee-shadow", .2, { ease: Power4.easeOut, autoAlpha: 0 }, 0.5)
    .to(".bg", 1.5, { ease: Power4.easeOut, scale: 2, transformOrigin: '50% 75%', y: 200 }, 0.5)
    .to(".tee, .tee-front, .tee-shadow", 1.5, { ease: Power4.easeOut, y: 200, }, 0.5)
    .to(".goalpost1, .goalpost2", 5, { ease: Power4.easeOut, x: -716 }, 1.5)
    .to(".card", 2, { y: 24, x: 2, rotation: -720, scale:1 }, 2)
    .to(".bg2", .5, { autoAlpha: 1, y: -100 }, 3)
    .to(".shadow2", .5, { autoAlpha: .4 }, 3.5)
    .to(".copy1", 0.5, { ease: Power4.easeOut, autoAlpha: 1, x: animateIn }, 3.5)
    .to("#confetti", 0.5, { ease: Power4.easeOut, autoAlpha: 1 }, 3.5)
    .to(".copy1", 0.5, { ease: Power4.easeOut, autoAlpha: 1, x: animateOut }, 6.5)
    .to(".copy2, .tc, .promo, .cta", 0.5, { ease: Power4.easeOut, autoAlpha: 1, x: animateIn }, 6.5)
    .to(".copy2", 0.5, { ease: Power4.easeOut, autoAlpha: 1, x: animateOut }, 9.5)
    .to(".copy3", 0.5, { ease: Power4.easeOut, autoAlpha: 1, x: animateIn }, 9.5)
    .to(".copy3, .promo", 0.5, { ease: Power4.easeOut, autoAlpha: 1, x: animateOut }, 12.5)
    .to(".copy4, .offer", 0.5, { ease: Power4.easeOut, autoAlpha: 1, x: animateIn }, 12.5);
};