var a,
    h;

function getTriangleArea (a, h) {
    if (a<=0 || h<=0) {
        console.log('Nieprawidłowe dane');
    } else {
        return a*h/2;
    }
}

console.log(getTriangleArea(-2, 6));

var triangle1Area = getTriangleArea(3,10);
var triangle2Area = getTriangleArea(4,10);
var triangle3Area = getTriangleArea(5,12);

console.log(triangle1Area, triangle2Area, triangle3Area);