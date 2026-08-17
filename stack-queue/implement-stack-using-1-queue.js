class MyStack {
    constructor(){
        this.q1=[];
        this.q2=[];
    }

    push = function(x) {
        this.q1.push(x);
    };

    pop = function() {
        for(let i=0; i<this.q1.length-1; i++){
            const first = this.q1.shift();
            this.q1.push(first);
        }
        const popedItem = this.q1.shift();
        return popedItem;
    };
    top = function() {
        if(this.q1.length>0){
            for(let i=0; i<this.q1.length-1; i++){
            const first = this.q1.shift();
            this.q1.push(first);
        }
        // console.log(this.q1,this.q2);
        const top = this.q1[0];
        this.q1.push(top);
        return top?top:null;
        }
        return null
    };
    empty = function() {
        return this.q1.length===0
    };
};

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