//判断回文字符串
function palindrome(str) {
    // \W匹配任何非单词字符。等价于“[^A-Za-z0-9_]”。
    var re = /[\W_]/g;
    // 将字符串变成小写字符,并干掉除字母数字外的字符
    var lowRegStr = str.toLowerCase().replace(re, '');
    // 如果字符串lowRegStr的length长度为0时，字符串即是palindrome
    if (lowRegStr.length === 0) return true;
    // 如果字符串的第一个和最后一个字符不相同，那么字符串就不是palindrome
    if (lowRegStr[0] != lowRegStr[lowRegStr.length - 1]) return false;
    //递归
    return palindrome(lowRegStr.slice(1, lowRegStr.length - 1));
}

//翻转字符串
//1.反向遍历字符串
function reverseString(str) {
    var tmp = '';
    for (var i = str.length - 1; i >= 0; i--)
        tmp += str[i];
    return tmp
}
//2.转化为array操作
function reverseString(str) {
    var arr = str.split("");
    var i = 0,
        j = arr.length - 1;
    while (i < j) {
        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
        i++;
        j--;
    }
    return arr.join("");
}
//生成指定长度随机字符串
function randomString(n) {
    var str = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var tmp = '';
    for (var i = 0; i < n; i++) {
        tmp += str.charAt(Math.round(Math.random() * str.length));
    }
    return tmp;
}
//统计字符串中次数最多字母
function findMaxDuplicateChar(str) {
    if (str.length == 1) {
        return str;
    }
    var charObj = {};
    for (var i = 0; i < str.length; i++) {
        if (!charObj[str.charAt(i)]) {
            charObj[str.charAt(i)] = 1;
        } else {
            charObj[str.charAt(i)] += 1;
        }
    }
    var maxChar = '',
        maxValue = 1;
    for (var k in charObj) {
        if (charObj[k] >= maxValue) {
            maxChar = k;
            maxValue = charObj[k];
        }
    }
    return maxChar + '：' + maxValue;
}