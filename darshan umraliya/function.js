let msg = "i am a function outer variable"
function myfunc() {
    let m = "local variable"
    console.log(msg)
    console.log(m)
}
myfunc()

function mysum(a, b) {
    return a + b
}
let result = mysum(1, 2)
console.log(result)

function subtract(a, b = 10) {
    return a - b;
}
console.log(subtract(5))

function hello(h, f = " fine?") {
    return h + f
}
console.log(hello("hello how are you"))