const flatten = (arr, level = 1) => {
    return arr.reduce((a, b) => {
        if (b instanceof Array && level > 0) {
            return a.concat(flatten(b, level - 1))
        } else {
            return a.concat([b])
        }
    }, [])

    
    // let result = []
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] instanceof Array && level > 0) {
    //         result = result.concat(flatten(arr[i], level - 1))
    //     } else {
    //         result.push(arr[i])
    //     }
    // }
    // return result
}



console.log(flatten([1, 2, 3, [4, [5, 6]]]))
// [1, 2, 3, 4, [5, 6]]

console.log(flatten([1, 2, 3, [4, [5, 6]]], 2))
// [1, 2, 3, 4, 5, 6]

// console.log(flatten([4, [5, 6]], 1))

// 测试revert回滚111