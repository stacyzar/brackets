module.exports = function check(str, bracketsConfig) {
  let strBracketsConfig = bracketsConfig.map((i) => i.join(''));

  for(let i = strBracketsConfig.length - 1; i >= 0; i--){
      if(str.includes(strBracketsConfig[i])){
          str = str.replace(strBracketsConfig[i], '');
          i = strBracketsConfig.length;
      }
  }
  if(str){
    return false;
  }
  else{
    return true;
  }
}
