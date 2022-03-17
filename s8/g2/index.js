//enumerazioni
var color;
(function (color) {
    color[color["red"] = 4] = "red";
    color[color["green"] = 5] = "green";
    color[color["pink"] = 6] = "pink";
    color[color["black"] = 7] = "black";
    color[color["blue"] = 8] = "blue";
})(color || (color = {}));
var enumeration = color.green;
console.log(enumeration);
var heter;
(function (heter) {
    heter[heter["no"] = 0] = "no";
    heter["yes"] = "ok";
})(heter || (heter = {}));
var enumeration1 = heter.no;
console.log(enumeration1);
//array
var colori = ['rosso', 'verde', 'blue', 'giallo'];
var id;
id = [8, 5, 4, 3, 7, 2];
console.log(colori);
console.log(id);
// funzioni
function myFunction(id, corso, frontend) {
    return corso + ' ' + frontend;
}
console.log(myFunction(1, 'js', 'typescrip'));
//oggetto
var states = {
    name: 'mario',
    age: 6,
    hobby: 'cinema'
};
console.log(states);
