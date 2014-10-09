/**
 * createOdometer takes an object w/the following params
 *  {
        el: '#my-div',
        startingVal: 333,
        increment: 10,
    }
 */
window.odometerOptions = {
  duration: 3000, // Change how long the javascript expects the CSS animation to take
  theme: 'plaza' // Specify the theme (if you have more than one theme css file on the page)
};

var createOdometer = function (options) {
  var el = document.querySelector(options.el);
  var currentVal = options.startingVal;

  var od = new Odometer({
    el: el,
    value: currentVal,
    format: '(,ddd)'
  });

  setInterval(function(){
    currentVal += options.increment
    od.update(currentVal)
  }, 3000);

  return od;
}
