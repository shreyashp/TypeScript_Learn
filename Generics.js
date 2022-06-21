//Generics are defined with function , classess that allow different data of different types
//to get passed to them and get the desired output
//diffrence between generic and any is that when any is used, we dont know that if number is passed, 
//then number will return, but in generic, we know that if a certai data type is passed, that only is going to return
//normal function
function mydata(data) {
    return data;
}
// console.log(mydata(123) //this will give error as function only accepts string
//Generic function
function mydata2(data) {
    return data;
}
console.log(mydata2(123445));
console.log(mydata2('Generic Function'));
console.log(mydata2({ name: 'class', id: '990' }));
