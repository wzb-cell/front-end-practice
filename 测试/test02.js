const valid = (str) => {
    const stack = [];
    for (let i = 0; i < str.length; i++) {
        if (['(', '{', '['].includes(str.charAt(i))) {
            stack.push(str.charAt(i));
        } else {
            if (stack.length === 0) {
                return false;
            }
            let temp = stack.pop()
            if ((temp === '(' && str.charAt(i) === ')')
             || (str.charAt(i) === '{' && str.charAt(i) === '}')
             || (str.charAt(i) === '[' && str.charAt(i) === ']')) {
                continue;
             }
             return false;
        }
    }
    return true;
}

// 深拷贝
const deepCopy = (obj) => {
    let newObj = {};
    if (typeof obj === 'object' && obj !== null) {
        newObj = obj instanceof Array ? [] : {}
        for (let i in obj) {
            newObj[i] = deepCopy(obj[i])
        }
    } else {
        newObj = obj
    }
    return newObj
}