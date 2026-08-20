// 496. Next Greater Element I
const nextGreaterElement = (nums1, nums2)=>{
    const stack = [];
    const greaterElement = {};
    for(let i=nums2.length-1; i>=0; i--){
        if(stack[stack.length-1] > nums2[i]){
            greaterElement[nums2[i]] = stack[stack.length-1];
            stack.push(nums2[i]);
        } else {
            let length = stack.length;
            while(length>0){
                stack.pop();
                --length;
                if(length && stack[length-1] > nums2[i]){
                    greaterElement[nums2[i]] = stack[length-1];
                    stack.push(nums2[i]);
                    break;
                }else if(length === 0){
                    greaterElement[nums2[i]] = -1;
                    stack.push(nums2[i]);
                }
            }
                if(stack.length===0){
                stack.push(nums2[i])
                greaterElement[nums2[i]] = -1;
                continue;
            }
        }
    }
    const ans = [];
    for(let i=0; i<nums1.length; i++){
        ans.push(greaterElement[nums1[i]])
    }
    return ans;
}
// const num1 = [4,1,2], num2 = [1,3,4,2]
const num1 = [4, 1, 7, 3, 9, 2, 6, 5], num2 = [1, 3, 4, 2, 7, 5, 9, 6, 8, 10]
console.log(nextGreaterElement(num1, num2))