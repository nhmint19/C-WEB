// console.log("hello world")

            //1.khai bao bien ham
                            // khai bao bien: let, const
// let message = "hello world"
// let number = 1
// const num = 10
// let array = [1,2,3]
// number ++
// number += 10

// console.log(num)
// console.log(message)
// console.log(number)
// console.log(array)

                            //  khai bao ham
// function print(value) {
//     console.log(value)
// }

// print(message)
// print(number)

            // 2. cau lenh dieu MSMediaKeySession( if/else, switch/case)
            // false = 0, '', null, undefined, NaN
            // true = else
// function validateNumber() {
//     if(number > 0) {
//         console.log('Valid number!')
//     } else {
//         console.log('Invalid number!')
//     }

//     validateNumber(10)
//     validateNumber(-1)
//     validateNumber("abc")
// }
// if(0) {
//         console.log("not run")
// }
// if(1) {
//     console.log("run")
// }
// if('') {
//     console.log("not run")
// }
// if('abc') {
//     console.log("run")
// }
// if(['1']) {
//     console.log("run")
// }

            // 3.vong lap
// let array = [1,2,3]
// for(let i = 0; i < array.length; i++) {
//     console.log(array[i])
// }

// for (let number of array) {
//     console.log(number)
// }

                    //Bai tap
// console.log(Math.pow(2,3))

equation2(1,2,1) // -1
equation2(0,0,10) // vo nghiem
equation2(0,9,1) // -1/9
equation2(1,3,2) // 1, 2
// co the khai bao ham truoc khi toa ham :)

function equation2(a, b, c) {
    if (a == 0) {
        if (b == 0) {
            if (c == 0) {
                console.log("phuong trinh vo so nghiem")
            }
            else {
                console.log("phuong trinh vo nghiem")
            }
        }
        else {
            console.log("phuong trinh co 1 nghiem la: ", -c/b)
        }
    }
    else {
        let delta = b * b - 4 * a *c
        if (delta < 0) {
            console.log("phuong trinh vo nghiem")
        } 
        else if (delta == 0) {
            console.log("phuong trinh co 1 nghiem kep la: ", -b/2/a)
        }
        else {
            let x1 = (-b - Math.sqrt(delta)) / 2 / a
            let x2 = (-b + Math.sqrt(delta)) / 2 / a
             console.log("phuong trinh co 2 nghiem phan biet la: ", x1, "va ", x2)
        }
    }
}
// console.log(str + int) hoac condole.log(str , int)