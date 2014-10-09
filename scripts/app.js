$(document).ready(function () {
  $.getJSON('config/visualizations.json', function (data) {
    $.each(data, function() {
      $.each(this, function(k, v) {
        console.log(k, v);
      });
    });
  });
});
