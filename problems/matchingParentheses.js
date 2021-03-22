/**
 * Return if string of parentheses are balanced.
 * Input: s = "()"
 * Output: true
 */

// valid parens: '(' '{' '[' -> ']' '}' ')'
const balancedParens = (str) => {
    let stack = [];
    // pop and peek stack to check if top of stack paren is the matching left of the current right.
    for (let i = 0; i < str.length; i++){
        if (str.charAt(i) === '(' || str.charAt(i) === '{' || str.charAt(i) === '['){
            stack.push(str.charAt(i))
        } else if (str.charAt(i) === ')' || str.charAt(i) === '}' || str.charAt(i) === ']'){
            if (stack[stack.length-1] === '(' && str.charAt(i) === ')'){
                stack.pop();
            } else if (stack[stack.length-1] === '{' && str.charAt(i) === '}'){
                stack.pop();
            } else if (stack[stack.length-1] === '[' && str.charAt(i) === ']'){
                stack.pop()
            } else {
                return false;
            }
        }
    }
    if (stack.length > 0) return false;
    return true;
}

console.log(balancedParens("()({)()()}")); // false
console.log(balancedParens("()()()()")); // true