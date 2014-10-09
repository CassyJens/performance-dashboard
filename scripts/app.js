$(document).ready(function () {
  var energySavingsOd = createOdometer({
      el: '#energy-savings-od',
      startingVal: 486255844,
      increment: 15.2
  });
  
  var bladeserver = createOdometer({
      el: '#bladeserver-od',
      startingVal: 2265,
      increment: 0.000007
  });


  var CO2SavingsOd = createOdometer({
      el: '#c02-savings-od',
      startingVal: 268609610,
      increment: 0.84
  });
  
   var caryears = createOdometer({
      el: '#caryears-savings-od',
      startingVal: 56890,
      increment: 0.09
  });
  
	var sites = createOdometer({
      el: '#sites-od',
      startingVal: 212,
      increment: 0
  });
  
  var sqft = createOdometer({
      el: '#sqft-od',
      startingVal: 11811640,
      increment: 0
  });
  
  var acunit = createOdometer({
      el: '#acunit-od',
      startingVal: 4298,
      increment: 0
  });
  
  var data = createOdometer({
      el: '#data-od',
      startingVal: 67,
      increment: 0
  });

});
