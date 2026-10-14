/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let prf = strs[0];
  for(let i = 1; i < strs.length; i++){
    while(!strs[i].startsWith(prf)){
        prf = prf.slice(0,-1);
        if(prf === "")
        return ""
    }
  }  
  return prf;
};