/*external js
http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenLite.min.js
http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/CSSPlugin.min.js
*/

window.onload = function() {
  var image1 = document.getElementById("image1"),
  image2 = document.getElementById("image2"),
  image3 = document.getElementById("image3"),
  image4 = document.getElementById("image4"),
  patch = document.getElementById("patch"),
  t1 = document.getElementById("t1"),
  t2 = document.getElementById("t2"),
  t3 = document.getElementById("t3"),
  line = document.getElementById("line"),
  ctaOff = document.getElementById("ctaOff"),
  ctaOn = document.getElementById("ctaOn"),
  logo = document.getElementById("logo");
  
 
TweenLite.to(image1, .1, {css:{y:"-320"}, delay:.1, onComplete:myFunction});
TweenLite.to(image1, .1, {css:{autoAlpha:1}, delay:.2}); 
TweenLite.fromTo(image1, .7, {css:{y:"-320"}}, {css:{y:"0"}, ease:Expo.easeOut, delay:.4}); 
 
TweenLite.to(image2, .1, {css:{y:"-480"}, delay:.1});
TweenLite.to(image2, .1, {css:{autoAlpha:1}, delay:.3}); 
TweenLite.fromTo(image2, .8, {css:{y:"-480"}}, {css:{y:"0"}, ease:Expo.easeOut, delay:2.2});
 
TweenLite.to(image3, .1, {css:{y:"-620"}, delay:.1});
TweenLite.to(image3, .1, {css:{autoAlpha:1}, delay:.3}); 
TweenLite.fromTo(image3, .9, {css:{y:"-620"}}, {css:{y:"0"}, ease:Expo.easeOut, delay:4});


TweenLite.to(patch, .1, {css:{y:"-400"}, delay:.1});
TweenLite.to(patch, .1, {css:{autoAlpha:1}, delay:.3});
TweenLite.fromTo(patch, 1.4, {css:{y:"-400"}}, {css:{y:"0"}, ease:Expo.easeOut, delay:4});


TweenLite.to(patch, 1, {css:{y:"-400"}, ease:Expo.easeIn, delay:7.6});
TweenLite.to(image1, 1.1, {css:{y:"-320"}, ease:Expo.easeIn, delay:7.5});
TweenLite.to(image2, 1.1, {css:{y:"-480"}, ease:Expo.easeIn, delay:7.4});
TweenLite.to(image3, 1.1, {css:{y:"-620"}, ease:Expo.easeIn, delay:7.3});







TweenLite.fromTo(t1, 1, {css:{autoAlpha:0, y:"15"}}, {css:{autoAlpha:1, y:"0"}, ease:Back.easeOut, easeParams:[.5], delay:8.3});
TweenLite.fromTo(t2, 1, {css:{autoAlpha:0, y:"15"}}, {css:{autoAlpha:1, y:"0"}, ease:Back.easeOut, easeParams:[.5], delay:8.4});
TweenLite.fromTo(line, .4, {css:{autoAlpha:0, scaleX:0, transformOrigin:"right center"}}, {css:{autoAlpha:1, scaleX:1, transformOrigin:"right center"}, ease:Sine.easeOut, delay:8.6});
TweenLite.fromTo(t3, 1, {css:{autoAlpha:0, y:"15"}}, {css:{autoAlpha:1, y:"0"}, ease:Back.easeOut, easeParams:[.5], delay:8.7});





  function myFunction() {
    

hit.onmouseover = function() {
TweenLite.to(ctaOn, .1, {css:{autoAlpha:1}, ease:Sine.easeOut});
}

hit.onmouseout = function() {
TweenLite.to(ctaOn, .1, {css:{autoAlpha:0}, ease:Sine.easeOut});
}
	
	
}






}

