
function object(a, b) {

    // uppercase case-insensitive comparison
    const name1 = a.name.toUpperCase();
    const name2 = b.name.toUpperCase();

    let comparison = 0;


    if (name1 > name2) {
        comparison = 1;
    } else if (name1 < name2) {
        comparison = -1;
    }
    return comparison ;
}

const students = [{ name: 'Sara', age: 5 }, { name: 'John', age: 24 }, { name: 'Jack', age: 25 }, { name: 'zack', age: 25 }];

console.log(students.sort(object));

let arr = ['sanjeev', 'maurya' ,'amit'];
let arr1 = ['mandeep', 'himashu' ,'mahi']; 
 console.log(arr)
console.log(arr1)
const NewArrays = arr.concat(arr1);

console.log(NewArrays);
 let deleteArrys =NewArrays.slice(-1)
console.log(deleteArrys);
// console.log(NewArrays);






