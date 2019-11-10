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
// 4.object - class

// 5.array