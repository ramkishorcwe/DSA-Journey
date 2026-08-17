
// best aproch maintain with count variable single variable
var balancedStringSplit = function(s) {
    let count = 0;
    let numberOfSubstring = 0;
    for(let i=0;i<s.length;i++){
        if(s[i]==="R"){
            count++
        }else{
            count--
        }
        if(count===0){
            numberOfSubstring++
        }
    }
    return numberOfSubstring
};

// const s = "RLRRRLLRLL"
// const s = "RLRRLLRLRL"
const s = "LLLLRRRR"
console.log(balancedStringSplit(s));

// common aproch better
// var balancedStringSplit = function(s) {
//     let countR = 0;
//     let countL = 0;
//     let numberOfSubstring = 0;
//     for(let i=0;i<s.length;i++){
//         if(s[i]==="R"){
//             countR++
//         }else{
//             countL++
//         }
//         if(countL===countR){
//             numberOfSubstring++
//         }
//     }
//     return numberOfSubstring
// };
