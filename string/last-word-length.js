

const getLengthOfLastWord = ()=>{

const s = "    Start    small.     Ship     something";
//aproch 1st
// const lengthOfWordsArray = s.trim().split(" ");
// console.log(lengthOfWordsArray);
// lengthOfLastWord = lengthOfWordsArray[lengthOfWordsArray.length-1];
// console.log(lengthOfLastWord);
// console.log(lengthOfLastWord.length);

let n = s.length-1;
let count = 0;
let flag = false
while(n>=0){
    if(s[n] !== ' '){
        count++;
        n--;
    }else{
        if(count===0){
            n--;
        }
        else break
    }
}
console.log(count);
return count;
}

getLengthOfLastWord("Give a valid string");

//find word containing given character
// initialIndex stores 
// reset when space come 
// when find word then no reset 
// save last index as well for getting the word now we have first and last index 

