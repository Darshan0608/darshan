// let array = [50, 20, 30, 50, 45, 80, 50, 42, 45, 50]
// remove duplicates from this array
// 1. Reverse an array [25, 63, 36, 72, 15, 81]
// 2. Find largest and smallest elements from array given above.
// 3. Delete 72 from the array.
// 4. Add 96 at the first position.
// 5. Get sum of all elements.

let array = [50, 20, 30, 50, 45, 80, 50, 42, 45, 50]
let setar= new Set(array)
let originalarray=Array.from(setar);
console.log("without duplicated fresh Array : " + originalarray);

//1.
let array1=[25,63,36,72,15,81];
let revarr=array1.reverse();
console.log("Reversed Array : " + revarr);
//2.
//for largest
let large=array1[0];
for(let i=0;i<array1.length;i++){
if(array1[i]>large){
    large=array1[i];
}
}
console.log("Largest Element of the Array : "+large);

//for smallest
let small=array1[0];
for(let i=0;i<array1.length;i++){
if(array1[i]<small){
    small=array1[i];
}
}
console.log("Smallest Element of the Array : "+small);
//3.
let deleteelemnt=array1.splice(2,3);
array1=array1.concat(deleteelemnt);
console.log("After deleting 72 from array : "+array1);
//4.
array1.unshift(96)
console.log("After Adding 96 to the array : " + array1);
//5.
let sum=0;
for(let i=0;i<array1.length;i++){
    sum+=array1[i]
}
console.log("Sum of all array elements : " + sum);