import QS from 'qs'
function ajax(method, url, params, done){
    // 创建xhr对象
    let xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

    method = method.toUpperCase();
    
    let pair = []
    
    params.forEach(key => {
        pair.push(key + '=' + params[key]);
    });
    let str = pair.join('&');
    if(method === 'GET') {
        url += '?' + str;    
    }
    xhr.open(method, url, true);

    if(method === 'POST') {
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');  
    }

    xhr.send(str)

    xhr.onReadyStateChange = function() {
        if(this.readyState === 4) {
            done(JSON.parse(this.responseText))
        }
    }
}
ajax('get', "http://localhost:8080/users", {
    name:'za',
    age:45
},function(a){
    console.log(a)
})
export function get(url, params){
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        })
    })
}
export function  post(url, params){
    return new Promise((resolve, reject) => {
        axios.POST(url, QS.stringify(params))
        .then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        })
    })
}
