 function isBalanced (input){
    const array = [];
      
    const open = {
      '{': '}',
      '[': ']',
      '(': ')'
    };
      
    const closed = {
      '}': true,
      ']': true,
      ')': true
    }
      
    for (let i = 0; i < input.length; i++) {
      let char = input[i];
      
      if (open[char]) {
        array.push(char);
      } else if (closed[char]) {
        if (open[array.pop()] !== char){
            return false;
        }
      }
    }
  
    return array.length === 0;  
  }

  console.log(isBalanced())
  export default isBalanced


