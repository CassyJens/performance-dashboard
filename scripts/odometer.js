/**
 * createOdometer takes an object w/the following params
 *  {
        el: '#my-div',
        startingVal: 333,
        increment: 10,
    }
 */
window.odometerOptions = {
  auto: false, // Don't automatically initialize everything with class 'odometer'
  selector: '.my-numbers', // Change the selector used to automatically find things to be animated
  format: '(,ddd).dd', // Change how digit groups are formatted, and how many digits are shown after the decimal point
  duration: 3000, // Change how long the javascript expects the CSS animation to take
  theme: 'plaza', // Specify the theme (if you have more than one theme css file on the page)
  animation: 'count' // Count is a simpler animation method which just increments the value,
};

var createOdometer = function (options) {
    var el = document.querySelector(options.el);

    od = new Odometer({
      el: el,
      value: 333555,
      format: ''
    });

    od.update(555);

    return od;
}
