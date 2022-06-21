//enum : enumeration of listed objects in a collection
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Purple"] = 1] = "Purple";
    Colors[Colors["Green"] = 5] = "Green";
    Colors[Colors["Blue"] = 6] = "Blue";
})(Colors || (Colors = {}));
var color1 = Colors.Red;
var color2 = Colors.Purple;
var color3 = Colors.Green;
var color4 = Colors.Blue;
console.log("Red : ".concat(color1, " Purple: ").concat(color2, " Green: ").concat(color3, " Blue: ").concat(color4));
