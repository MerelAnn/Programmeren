/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

console.log("Hello!");

var randomNum = Math.floor((Math.random() * 6) + 1);

console.log(randomNum);

var ogen = randomNum;

console.log(ogen);

console.log('U heeft ' + ogen + ' gegooid.');





var imgArray =['one.png', 'two.png', 'three.png', 'four.png', 'five.png', 'six.png'];

console.log(imgArray);

var dobbelsteenImg = "img/" + imgArray[ogen-1];
console.log(dobbelsteenImg);


document.querySelectorAll("img")[0].src = dobbelsteenImg;


