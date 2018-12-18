let points = [
    [-2, 4],
    [0, -2],
    [-1, 0],
    [3, 5],
    [-2, -3],
    [3, 2]
];


function kclosest(points, k) {
    let origin = [0, 0];

    let obj = {};

    let closest = points.map(function(el) {
        let distance = Math.sqrt((el[0] * el[0]) + (el[1] * el[1]));

        return {
            point: el,
            distance: distance
        }
    });

    closest.sort(function(a, b) {
        return a.distance - b.distance;
    });

    return closest.slice(0, k);
}

console.log(kclosest(points, 2));