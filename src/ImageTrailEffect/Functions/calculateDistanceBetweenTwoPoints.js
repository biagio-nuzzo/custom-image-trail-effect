function calculateDistanceBetweenTwoPoints(firstPoint, secondPoint) {
    var distance = Math.sqrt(Math.pow((secondPoint.x - firstPoint.x), 2) + Math.pow((secondPoint.y - firstPoint.y), 2));
    return distance;
}

export default calculateDistanceBetweenTwoPoints;