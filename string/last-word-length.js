const getLengthOfLastWord = ()=>{
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

