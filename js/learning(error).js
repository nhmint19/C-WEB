/**
 *  *** Lỗi (Error): đối tượng, sinh bởi class Error
 *  -- Có 2 loại lỗi:
 *          Built-in Error: Lỗi do hệ thống đã định nghĩa vd: sai chính tả
 *          Custom Error: Lỗi do lập trình viên tự định nghĩa, được trả về qua throw
 */

// 1) Kĩ thuật xử lí lỗi (try catch throw finally)
    // ------> built-in error
    let a = 10
    let b = 20
    try{
        // code có thể gây lỗi
        let result = sum(a,b)
        console.log('a + b =' + result)
    } catch(error) {
        // code xử lí lỗi
        console.log('Có lỗi: ' + error.message)
    }

    console.log("I'm here to execute")

    // Error có nhiều loại: vd trên Error <---- Reference Error

    // -------> custom error
    let c = -1
    try{
        if(c < 0) {
            throw new Error('c must be greater than 0')
        }
        console.log("I'm here to execute") // not run 
    } catch(error) {
        console.log(error.message)
    }

    // try-catch-throw demo
    function validation(number) {
        if(number < 0) {
            throw new Error('number must be greater than 0')
        }
        return number
    }

    try{
        validation(0) // --> not error
        validation(-1) // --> error
        validation(-2) // not run because an error has been foundA
        validation(2)
    } catch(error) {
        console.log('Error: ' + error.message)
    }

    // finally : tất cả câu lệnh đặt trong khối finally đều đc chạy bất kể chương trình đã bắt lỗi 

    try {
        console.log(validation(1))
        console.log(validation(-2))
        console.log(validation(0))
    } catch(error) {
        console.log('Error: ' + error.message)
    } finally{
        console.log("Can be executed") // để đề phòng trường hợp cả try và catch đều lỗi
    }

// 2) Xử lí bất đồng bộ (async await)
 /**
  * bất đông bộ <> đồng bộ
  * --- đồng bộ: công việc thực hiện từ trên xuống dưới 
  * --- bất đồng bộ: công việc đc thực hiện 1 cách song song với nhau
  * 
  * những trường hợp cần xử lí bất đồng bộ: firebase tương tác WEBAPI, hàm setTimeout(), setInterval()
  *  ---> Tại sao phải xử lí: vd: khi lệnh sau cần lệnh trc để thực hiện nhưng lệnh trc lại mất thời gian chờ
  */

// xử lí 
// bất đồng bộ cần xử lí

// cv1: 5s
setTimeout(function() {
    console.log('Job 1: done')
},5000)

// cv2: 2s
setTimeout(function() {
    console.log('Job 2: done')
},2000)






