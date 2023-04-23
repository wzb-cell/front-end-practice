let obj = { a: {aa:1,bb:1}, b:{aa:2,bb:2}}


let arr = []
for (let key in obj) {
    console.log(key)
    arr.push({key: key, ...obj[key]})
}
console.log(arr)