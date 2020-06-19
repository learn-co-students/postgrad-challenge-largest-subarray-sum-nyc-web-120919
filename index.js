
function largestSubarraySum(array) {
    // let topSum = [];
    // const reducer = (accumulator, currentValue) => accumulator + currentValue;
    // let arraySum = array.reduce(reducer, 0)
    // if (arraySum > 0) {
    //     return arraySum
    // } else {
    //     return
    // }

    // let posNum = [];
    // let negNum = [];
    // const reducer = (acc, curVal) => acc + curVal;
    // array.forEach(num => {
    //     if (num >= 0) {
    //         posNum.push(num)
    //     } else {
    //         negNum.push(num)
    //     }

    // })
    // return posNum.reduce(reducer, 0)

    let maxSoFar = 0;
    let maxEndHere = 0;
    array.forEach(num => {
        maxEndHere = maxEndHere + num 
        if (maxEndHere < 0) {
            maxEndHere = 0;
        } if (maxSoFar < maxEndHere) {
            maxSoFar = maxEndHere
        }
    })
    return maxSoFar
}