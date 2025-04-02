// Input: two integers
// THIS IS WRONG IMPROVE IT
// Summary: When distance to travel is longer than distance, we want to get the remainder
//          to know when we're running out of gas, otherwise we'll stop at distance we are traveling
//          if it's before the length of the road, or right at the length of the road
//          if we travel the entire distance
function stoppingPoint(lengthOfRoad, distanceToTravel) {
    if (distanceToTravel > lengthOfRoad) {
        // distance to travel is more than the length of road, return remainder for mile marker
        return distanceToTravel % lengthOfRoad;
    } else if (distanceToTravel < lengthOfRoad) {
        // distance is smaller than length of road
        // therefore the marker is at the distanceToTravel
        return distanceToTravel;
    } else {
        // distance to travel is the same as the length of road
        // 
        return lengthOfRoad;
    }
}
// Time, space: O(1)

// Input: a number, and an array
// DID NOT FINISH
function finalTown(distanceToTravel, townLocations) {
    let okToMoveToNextTown = true;
    for (let i = 0; i < townLocations.length - 1; i++) {
        let distanceBetweenTowns = townLocations[i] - townLocations[i + 1];
        if (distanceBetweenTowns < 0) {
            // negative, make positive
            distanceBetweenTowns = -distanceBetweenTowns;
        }
        if ((distanceToTravel - distanceBetweenTowns) > 0) {

        }
    }
}
