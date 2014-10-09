$(document).ready(function () {
  var energySavingsOd = createOdometer({
      el: '#energy-savings-od',
      startingVal: 485686544,
      increment: 15.2
  });

  var CO2SavingsOd = createOdometer({
      el: '#c02-savings-od',
      startingVal: 295827,
      increment: 4.7
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

});
