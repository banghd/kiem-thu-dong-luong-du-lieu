const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const test = (price = 0, use) => {
    if(use > 0 ) price = 40
    else return price
    if(use > 100 ) {
        if (use <= 200)return price = price + (use - 100) * 0.5
        else {
            price = price + (use - 100) * 0.5
            if(price >= 100) return price * 0.9
            else return price
        }
    }
    return price
}

rl.question('Nhap use \n', data => {
    data = data*1
    console.log(test(0,data))
})