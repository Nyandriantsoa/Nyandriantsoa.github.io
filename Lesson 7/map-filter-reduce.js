function sum(arr){

    let myArr = [ ...arr];
    return myArr.reduce((a , b) => a + b , 0);

}

var arrTest = [1,2,3,4];
console.log(sum(arrTest));


function multiply(arr){
    let myArr = [ ...arr];
    return myArr.reduce((a,b) => a * b , 1);
}

console.log(multiply(arrTest));

function reverse(text){

    return [ ...text].map((c , index, arr) => arr[arr.length - 1 - index]).join('');
}

console.log(reverse("Mickael"));

function filterLongWords(arr , i){
    return [ ...arr].filter(a => a.length > i);
}

console.log(filterLongWords(['test', 'Mickael', 'Milay'] , 5));
