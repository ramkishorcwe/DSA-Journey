var MyStack = function() {
    this.q1=[];
    this.q2=[];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    if(this.q1.length>0){
  const n = this.q1.length;
        for(let i=0; i<n-1; i++){
            const first = this.q1.shift();
            this.q2.push(first);
        }
        const popedItem = this.q1.shift();
        this.q1 = this.q2;
        this.q2 = [];
        return popedItem;
    } 
    return null
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    const n = this.q1.length;
        for(let i=0; i<n-1; i++){
            const first = this.q1.shift();
            this.q2.push(first);
        }
        const top = this.q1.shift();
        this.q2.push(top);
        this.q1 = this.q2;
        this.q2 = [];
        return top?top:null;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q1.length===0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */



// Your MyStack object will be instantiated and called as such:
var obj = new MyStack()
obj.push(1)
obj.push(2)
obj.push(3)
var param_2 = obj.pop()
console.log(param_2)
var param_3 = obj.top()
console.log(param_3)
var param_4 = obj.empty()
console.log(param_4)