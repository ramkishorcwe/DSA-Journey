// // 1021. Remove Outermost Parentheses


// //   1.-without using stack we can use counter variable to keep track of open and close parentheses brute force approach
// var removeOuterParentheses = function(s) {
//     let stack = [];
//     let counter = 0
//     for(let i=0; i<s.length; i++){
//         if(s[i]==='('){
//             ++counter;
//         }else{
//             --counter;
//         }

//         if(counter===1 && s[i]==='('){
//             stack.push(i);
//         }else if(counter===0 && s[i]===')'){
//             stack.push(i);
//         }
//     }
//     let newStr = "";
//     console.log(stack)
//     for(let i=0; i<stack.length; i+=2){
//         newStr += s.slice(stack[i]+1,stack[i+1]);
//     }
//     console.log(newStr)
// };


var removeOuterParentheses = function(s) {
    // without stack
// let stack = [];
//     let counter = 0
//     for(let i=0; i<s.length; i++){
//         if(s[i]==='('){
//             ++counter;
//         }else{
//             --counter;
//         }

//         if(counter===1 && s[i]==='('){
//             stack.push(i);
//         }else if(counter===0 && s[i]===')'){
//             stack.push(i);
//         }
//     }
//     let newStr = "";
//     console.log(stack)
//     for(let i=0; i<stack.length; i+=2){
//         newStr += s.slice(stack[i]+1,stack[i+1]);
//     }
//     return newStr;

// // with stack
// let stack = [];
//     let str = '';
//     for(let i=0; i<s.length; i++){
//         if(s[i]==='('){
//             stack.push(s[i]);
//         }else{
//             stack.pop();
//         }
//         if(stack.length>1 ||stack.length===1 && s[i]=== ')' ){
//             str+=s[i];
//         }
//     }
//     return str

// best aproch
    let stack = [];
    let ans = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(s[i]);
            if (stack.length > 1) {
                ans = ans + s[i];
            }
        } else {
            if (stack.length > 1) {
                ans = ans + s[i];
            }
            stack.pop();
        }
    }

    return ans;

};

// const s = "(()())(())"
// // var s = "(()())(())";
// // var s = "(()())(())(()(()))"
// // const s = "(()())(())(()(()))"
// // const s = "()()"
// // const s = "(()())(())"
// // const s = "(()())(())(()(()))"

// removeOuterParentheses(s);

console.log(removeOuterParentheses(s)) // Output: "()()()()(())";
