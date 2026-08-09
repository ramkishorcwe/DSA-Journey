var isAnagram = function(s, t) {
    if(s.length!==t.length) return false
    const sObj = {};
    for(let i=0;i<s.length;i++){
        if(sObj[s[i]]){
            sObj[s[i]]=sObj[s[i]]+1
        }else{
            sObj[s[i]]=1;
        }
    }
        console.log("Before ",sObj)
    for(let i=0;i<t.length;i++){
            sObj[t[i]]=sObj[t[i]]-1
    }
    console.log("After ",sObj)
    const keys = Object.keys(sObj);
    let n = 0;
     while(n<keys.length){
           if(sObj[keys[n]] !==0){
               break;
           }
           n++
    }
    if(n===keys.length){
        return true
    }else{
         return false;
    }
    console.log(sObj)
};

console.log(isAnagram("anagram", "nagaram"))