let myArr = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]

function largestSubarraySum(arr){
    let sv = arr[0];
    for (let i = 0; i < arr.length; i++){
        let sum = 0
        for (let b = i; b < arr.length; b++){
            sum += arr[b]
            if (sv < sum) {
                sv = sum
            }
        }
    }
    return sv > 0 ? sv : 0
}