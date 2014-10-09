$(function () {
  var data = [1, 2, 3, 10, 11, 12, 20, 21, 22, 30, 40];

  new Contour({
      el: '.graph',
  })
  .cartesian()
  .line(data)
  .render();
});
