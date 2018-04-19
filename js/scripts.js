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

var zm1 = getTriangleArea(3,10);
var zm2 = getTriangleArea(4,10);
var zm3 = getTriangleArea(5,12);

console.log(zm1, zm2, zm3);