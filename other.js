//1.阶乘
//非递归实现
function factorialize(num) {
    var result = 1;
    if (num < 0) return -1;
    if (num == 0 || num == 1) return 1;
    while (num > 1) {
        result *= num--;
    }
    return result;
}
//递归实现
function factorialize(num) {
    var result = 1;
    if (num < 0) return -1;
    if (num == 0 || num == 1) return 1;
    if (num > 1) return num * factorialize(num - 1);
}

//2.生成斐波那契数列
//强行递归实现
function getfib(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    if (n > 1) return getfib(n - 1) + getfib(n - 2);
}

function fibo(len) {
    var fibo = [];
    for (var i = 0; i < len; i++) {
        fibo.push(getfib(i));
    }
    return fibo;
}
//简约非递归实现
function getFibonacci(n) {
    var fibarr = [];
    var i = 0;
    while (i < n) {
        if (i <= 1) {
            fibarr.push(i);
        } else {
            fibarr.push(fibarr[i - 1] + fibarr[i - 2])
        }
        i++;
    }
    return fibarr;
}
//3.二分查找
//非递归实现
function binary_search(arr, key) {
    var low = 0,
        high = arr.length - 1;
    while (low <= high) {
        var mid = parseInt((high + low) / 2);
        if (key == arr[mid]) {
            return mid;
        } else if (key > arr[mid]) {
            low = mid + 1;
        } else if (key < arr[mid]) {
            high = mid - 1;
        }
    }
    return -1;
}
//递归实现
function binary_search2(arr, low, high, key) {
    if (low > high) return -1;
    var mid = parseInt((low + high) / 2);
    if (key == arr[mid]) {
        return mid;
    } else if (key > arr[mid]) {
        return binary_search2(arr, mid + 1, high, key);
    } else if (key < arr[mid]) {
        return binary_search2(arr, low, mid - 1, key);
    }
}