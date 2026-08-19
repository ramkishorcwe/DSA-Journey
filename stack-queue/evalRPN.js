
// 150. Evaluate Reverse Polish Notation
var evalRPN = function(tokens) {
     const stack = [];
     const map = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => Math.trunc(a / b),
    };
    for(let i=0; i<tokens.length; i++){

        if(map[tokens[i]]){
            const secondNo = Number(stack.pop());
            const firstNo = Number(stack.pop());
            let result = null;
            result = map[tokens[i]](firstNo, secondNo);
            stack.push(result);
        }else{
            stack.push(tokens[i]);
        }
    }
    return Number(stack.pop());
};