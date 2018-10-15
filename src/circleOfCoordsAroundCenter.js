export const circleOfCoordsAroundCenter = (center, n) => {

    const radius = 1000;

    var points = Array.apply(0, Array(n)).map(function () {
        let theta = Math.random()*2*Math.PI;
        return { 
            lon: center.lon + radius*Math.cos(theta),
            lat: center.lat + radius*Math.sin(theta) 
        }; 
    });

    return points;
};
