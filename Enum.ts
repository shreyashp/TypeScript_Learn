//enum : enumeration of listed objects in a collection
enum Colors {
    Red,
    Purple,
    Green = 5,
    Blue,
  }
  
  let color1: Colors = Colors.Red;
  let color2: Colors = Colors.Purple;
  let color3: Colors = Colors.Green;
  let color4: Colors = Colors.Blue;
  
  console.log(
    `Red : ${color1} Purple: ${color2} Green: ${color3} Blue: ${color4}`
  );