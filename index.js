let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]

function largestSubarraySum(array) {
    // code to write here
    let sum = 0
    let max = 0
    array.forEach(value => {
        if (max < sum)
            max = sum
        if (sum < 0)
            sum = 0
        sum += value
    });
    if (max < sum)
        max = sum
    return max
}