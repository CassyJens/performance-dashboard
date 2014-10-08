$(document).ready(function () {
    var energySavingsOd = createOdometer({
        el: '#energy-savings-od',
        startingVal: 485686484,
        increment: 15.2
    });
	
	/*var CO2SavingsOd = createOdometer({
        el: '#CO2-savings-od',
        startingVal: 295827,
        increment: 4.7
    });*/
})