//数组去重
function unique(arr) {
    var obj = {}
    var result = []
    for (var i in arr) {
        if (!obj[arr[i]]) {
            obj[arr[i]] = true;
            result.push(arr[i]);
        }
    }
    return result;
}
//数组中最大差值
function getMaxProfit(arr) {
    var min = arr[0],
        max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }
    return max - min;
}