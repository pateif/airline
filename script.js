function showFlights() {
    const flyingFrom = document.getElementById('flying-from').value;
    const flyingTo = document.getElementById('flying-to').value;
    const departing = document.getElementById('departing').value;
    const returning = document.getElementById('returning').value;
    const adults = document.getElementById('adults').value;
    const children = document.getElementById('children').value;
    const travelClass = document.getElementById('travel-class').value;

    alert(`Searching flights from ${flyingFrom} to ${flyingTo}.\nDeparting: ${departing}\nReturning: ${returning}\nAdults: ${adults}\nChildren: ${children}\nClass: ${travelClass}`);
}
