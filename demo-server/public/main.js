window.onload = init

async function init() {
    
    // 2. get data from response
    // 3. display data
    // 1. call request (async)
    let response = await fetch('http://localhost:8081/get-data') // neu ko co await ---> ham mat dong bo tra ve promise chu ko phai request
    let data = await response.json()
    return data
}

let data = init()
console.log(data)
 //TODO 
 //tìm hiểu về các từ callback promise async/await