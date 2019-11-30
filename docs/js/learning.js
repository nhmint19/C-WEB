// Session 3
// 1. boolean
    // false ~ null, undefined, NaN, 0, '', false
    // true ~ else
if(0) {
    console.log('not run')
}
if(1) {
    console.log('run')
}
if('') {
    console.log('not run')
}
if('abc') {
    console.log('run')
}
        // NaN vd: sqrt(-1)
// 2. string
    // cac dau khoi tao: "", '', ``
    let str = `
        line 1
        line 2    
    `
    let name = 'Minh'
    let str1 = `hello ${name}` // Hello Minh

    console.log(str)
    // cac ham
    console.log(name.charAt(3)) // return h - the 4th letter in 'Minh'
    console.log('abc'.startsWith('ab')) // true
    console.log('abc'.endsWith('c')) // true
    console.log('a b c d'.split(' ')) // ['a', 'b', 'c', 'd']
    console.log('a b'.split('')) // ['a',' ','b']
    console.log('abCdEf'.toLowerCase()) // 'abcdef'
    console.log('abCdEf'.toUpperCase()) // 'ABCDEF'
    console.log('     abc def  '.trim()) // 'abc def' // ngoai ra con xoa ca tab (\t) va xuong dong (\n)
// 3.number
    //parseInt(), parseFloat() ------> chuyen string thanh so
    console.log(parseInt('10')) // 10
    console.log(parseInt('10.5')) // 10
    console.log(parseFloat('10.5')) // 10.5
    console.log(parseInt('abc')) // NaN

    console.log(Math.sqrt(4)) // 2
    console.log(Math.pow(5, 3)) // 125

    console.log(Math.sin(Math.PI / 4)) // sin(45) 
    console.log(Math.asin(Math.asin(0.701067811865475))) // Math.PI / 4

    console.log(Math.ceil(10.5)) // 11
    console.log(Math.floor(10.5)) // 10

    console.log(Math.random()) // tra ve tu 0 --> 1
    console.log(parseInt(10 * Math.random()))

// Session 7
// 4.object - class
    /** e.g.
     * firebase: là một object có các hàm auth(), firestore()
     * loginInfo: là một object có các attibute là 'email','name',...
     */
    
    /**
     * object là 1 đối tượng hướng đến trong code
     * nhiều object có các hàm, attribute giống nhau 
     * ----> tạo ra class - một dạng form giống nhau để nhiều object áp dụng
     */

    /** OOP
     * 1/ So sánh OOP và POP:
     * OOP: object-oriented programming: hướng về đối tượng
     *      class Object { 
     *          function1(),    
     *      }
     * Lợi thế: dễ thay đổi, dễ quản lí
     * POP: 
     *      main() {
     *          function1(),
     *      }
     * Lợi thế: ra kết quả nhanh nhưng khó quản lí khi code nhiều lên và phức tạp
     * 
     * 2/ Về Class:
     * a) class
     * b) object
     * // Cac thanh phan cua class
     * c) constructor
     * d) attribute
     * e) function
     * 
     * 3/ 4 Tính chất của OOP
     *  // 1. Kế thừa (inherit)
        // 2. Đóng gói (encapsulation)
        // 3. Đa hình (polymorphism)
            đa hình trên đối tượng: sinh bởi việc kế thừa
                VD: Student extends Human , student1 là 1 Student 
                ----> student 1 vừa là Human, vừa là Student 
                >> tính đa hình 
            đa hình trên hàm: override: ghi đè >> cùng 1 hàm của con ghi đè hàm của cha
                              overload: Nhiều hàm cùng tên cùng chức năng nhưng có parameter khác nhau
        // 4. Trừu tượng (abstract)
            
     */ 
    
    // Class
        // language class: Date, Error, Object, Array
        let date1 = new Date()
        console.log(date1.toISOString())
        console.log(date1.getDate())
        console.log(date1.getFullYear())
        let date2 = new Date('1999-01-11') // '1999-01-11' is a valid parameter for this class
        console.log(date2.toLocaleString())
        console.log(date2.toLocaleDateString())

        // create class Student
            
        class Human {
            constructor(name, age) {
                this.name = name
                this.age = age
            }
            speak() {
                console.log("human speak")
            }
        }
        class Student extends Human { // kế thừa
            learn() {
                console.log(this.name + ' learning..')
            }

            // Override
            speak() {
                console.log("student speak")
            }
        }

        // console
        let student1 = new Student("Nguyen Van A", 10)
        console.log(student1.name)
        student1.speak()
        student1.learn() // this ~ student1 >> this.name = student1.name = "Nguyen Van A"

        let student2 = new Student("Nguyen Van B", 20)
        console.log(student2.age)
        student2.learn() // this ~ student2 >> this.name = student2.name = "Nguyen Van B"

// 5.array
    let array = [1, 2, 3]

    // push() pop() unshift() shift()
        array.push(4)
        console.log('after push ', array) // [1, 2, 3, 4]
        array.pop()
        console.log('after pop ', array) // [1, 2, 3]
        array.unshift(0)
        console.log('after unshift', array) // [0, 1, 2, 3]
        array.shift()
        console.log('after shift ', array) // [1, 2, 3]

    // splice(): them/xoa phan tu o bat ki vi tri nao
        array.splice(1, 1) // splice(index, so phan tu bi xoa tu index)
        console.log("after splice ", array) // [1,3]
        array1 = [1, 2, 3, 4]
            // xoa roi them
        array1.splice(1, 1, 2.2, 2.3 , 2.4)
        console.log("after splice ", array1) // 1, 2.2, 2.3, 2.4, 3, 4
            // them
        array1.splice(1, 0, 2.2, 2.3 , 2.4)
        console.log("after splice ", array1) // 1, 2.2, 2.3, 2.4, 2, 3, 4

    // duyệt mảng: forEach()
        for(let number of array) {
            console.log(number)
        }
        
        array.forEach(print)

        function print(value) {
            console.log(value)
        }
            // viet gon
        array.forEach(function(value) {
            console.log(value)
        })

    // lọc mảng: filter()
        // not use filter()
        array = [1, 2, 3, 4]
        let evens = []
        for (let number of array) {
            if(isEven(number)) {
                evens.push(number)
            }
        }
        function isEven(number) {
            return number % 2 == 0
        }
        // use filter()
        let evens2 = array.filter(isEven)
        console.log(evens2) // [2, 4]
        let odds = array.filter(function(number) {
            return number % 2 == 1
        })
        console.log(odds) // [1, 3]

    // biến đổi mảng: map()
        array = [1, 2, 3] // >> [2, 4, 6]
        let newArray = array.map(function(number) {
            return number * 2
        })
        console.log(newArray) // [2, 4, 6]

    // tim kiem trong mang voi ham dieu kien: find(), findIndex()
        array = [1, 2, 3, 4, 5] // >> even: 2
        let evenFound = array.find(function(number) {
            return number % 2 == 0 
        
        })
        console.log(evenFound) // 2  -----> chi tim ra gia tir  dau tien thoa man dieu kien
        let greaterthan2 = array.find(function(number) {
            return number > 2
        })
        console.log(greaterthan2) // 3
        // findIndex() tuong tu

    // tim kiem torng mang theo gia tri: IndexOf(), lastIndexOf(), includes()
        array = [1, 2, 3, 2, 1]
        let indexOf2 = array.indexOf(2)
        let lastIndexOf2 = array.lastindexOf(2)
        let notExists = array.indexOf("abc")
        let included = array.includes(3) 
        let notincluded = array.includes(4)
        console.log(indexOf2) // 1 ~ index of 2
        console.log(lastIndexOf2) // 3
        console.log(notExists) // -1 
        console.log(included) // true
        console.log(notincluded) // false

    //dao nguoc mang: reverse()
        array = [1, 2, 3]
        let newArray = array.reverse()
        console.log("newArray reversed ", newArray) // [3, 2, 1]
        
        
    