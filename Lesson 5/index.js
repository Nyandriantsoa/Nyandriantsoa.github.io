function myFunction(val, callback){
    let res = callback();
    return res == val? "TEST SUCCEDEED" : "TEST FAILED";
}

// 1 - max()
function max(a, b){
    if (a > b) return a;
    else return b;
}

console.log("max(1,5) =" , max(1,5));
var test = myFunction(5, function(){
    return max(1,5);
});
console.assert(test == "TEST SUCCEDEED" , "TEST FAILED \n");


// 2 - maxOfThree()
function maxOfThree(a, b, c){
    let largest = a;
    if(b > largest) largest = b;
    if(c > largest) largest = c;
    return largest;
}

console.log("maxOfThree(9,23,54) =" , maxOfThree(9,23,54));
test = myFunction(54, function(){
    return maxOfThree(9,23,54);
})
console.assert(test == "TEST SUCCEDEED" , "TEST FAILED \n");

// 3 - isVowel
function isVowel(letter){
    let arr = ["a" , "e" , "i" , "o" , "u" , "y"];
    return arr.includes(letter.charAt(0));
}

console.log("isVowel(b) =", isVowel("b"));
test = myFunction(false , function(){
    return isVowel("b");
})
console.assert(test == "TEST SUCCEDEED" , "TEST FAILED \n");


// 4 - Sum
function sum(arr){
    let total = 0;
    for(let n of arr){
        total += n;
    }
    return total;
}

console.log("sum([1,2,3,4]) =", sum([1,2,3,4]));
test = myFunction(10 , function(){
    return sum([1,2,3,4]);
})
console.assert(test == "TEST SUCCEDEED" , "TEST FAILED \n");


// 5 - Multiply
function multiply(arr){
    let total = 1;
    for(let n of arr){
        total *= n;
    }
    return total;
}

console.log("multiply([1,2,3,4]) =", multiply([1,2,3,4]));
test = myFunction(24 , function(){
    return multiply([1,2,3,4]);
})
console.assert(test == "TEST SUCCEDEED" , "TEST FAILED \n");

// 6 - reverse()
function reverse(text){
    let result = "";
    for(let i = text.length ; i >= 0 ; i--){
        result += text.charAt(i);
    }

    return result;
}

console.log("reverse(jag testar) =" , reverse("jag testar"));
test = myFunction('ratset gaj' , function(){
    return reverse("jag testar");
})
console.assert(test == "TEST SUCCEDEED" , "TEST FAILED \n");

// 7 - findLongestWord()
function findLongestWord(arr){
    let maxLength = 0;
    for(let text of arr){
        if(text.length > maxLength) maxLength = text.length;
    }

    return maxLength;
}

console.log("findLongestWord(['test', 'opera', 'exams', 'university']) =", findLongestWord(['test', 'opera', 'exams', 'university']));
test = myFunction(10, function(){
    return findLongestWord(['test', 'opera', 'exams', 'university']);
})
console.assert(test == "TEST SUCCEDEED" , "TEST FAILED \n");

// 8 - filterLongWords()
function filterLongWords(arr , i){
    let myArr = [...arr];
    return myArr.filter(t => t.length > i);
}

console.log("filterLongWords(['test', 'opera', 'exams', 'university'], 7) =", filterLongWords(['test', 'opera', 'exams', 'university'], 7));
test = myFunction(['university'], function(){
    return filterLongWords(['test', 'opera', 'exams', 'university']);
})
console.assert(test == "TEST SUCCEDEED" , "TEST FAILED \n");

// 9 - JSfiddle
const aa = [1,3,5,3,3]; 
const bb = aa.map(function(elem, i, array) {
  return elem * 10;
})
console.log(bb);
const cc = aa.filter(function(elem, i, array){
  return elem === 3;});
console.log(cc);
const dd = aa.reduce(function(prevValue, elem, i, array){
  return prevValue * elem;
});
console.log(dd);