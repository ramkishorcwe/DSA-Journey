// 232. Implement Queue using Stacks


class MyQueue{
    constructor(){
        this.stack1 = [];
        this.stack2 = [];
    }
    push = function(x) {
         this.stack1.push(x);
    };
    pop = function() {
        if(this.stack2.length>0){
            const top = this.stack2.pop();
            return top;
        }else{
            console.log(this.stack1.length)
            const n = this.stack1.length
            for(let i=0;i<n; i++){
            const item = this.stack1.pop();
            this.stack2.push(item);
            }
            const top = this.stack2.pop();
            return top;
        }
    };
    peek = function() {
       if(this.stack2.length>0){
            const top = this.stack2[this.stack2.length-1];
            return top;
        }else{
            console.log("this.stack1.length", this.stack1.length)
            const n = this.stack1.length
            for(let i=0;i<n; i++){
                const item = this.stack1.pop();
                this.stack2.push(item);
            }
            console.log("peek", this.stack2)
            const top = this.stack2[this.stack2.length-1];
            return top;
        }
    };

    empty = function() {
        return  this.stack1.length === 0;
    };

}

const myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
console.log(myQueue.stack1, myQueue.stack2);
const peek = myQueue.peek(); // return 1
// console.log(peek);
console.log(myQueue.stack1, myQueue.stack2);
// myQueue.pop();
// const pop1 = myQueue.pop(); // return 1, queue is [2]
// console.log(pop1);
const isEmpty = myQueue.empty(); // return false
// console.log(isEmpty);