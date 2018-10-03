module.exports = function getZerosCount(number, base) {
    let mnojitel = 0;
    let res = 0;
    for (let i = 2; i <= base; i++) {
        while  (((base % i) === 0) && (base > 1)) {
          mnojitel = i;
          base /= i;
        }
    }
    while(number > 0){
        number /= mnojitel;
        let number1 = ~~number; 
        res += number1;
    }
    return res;
}