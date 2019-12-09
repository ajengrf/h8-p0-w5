function sorting(arrNumber) {
    // code di sini
    var run = true
    while (run) {
        run = false
        for (var i = 0; i < arrNumber.length; i++) {
            if (arrNumber[i] < arrNumber[i + 1]) {
                [arrNumber[i], arrNumber[i + 1]] = [arrNumber[i + 1], arrNumber[i]]
                run = true
            }
        }
    }
    return arrNumber
}

function getTotal(arrNumber) {
    // code di sini
    var hasil = []

    if (arrNumber.length == 0) {
        return ''
    }

    for (var j = 0; j < arrNumber.length; j++) {
        var run = -1
        for (var k = 0; k < hasil.length; k++) {
            if (hasil[k][0] == arrNumber[j]) {
                run = k
            }
        }
        if (run == -1) {
            hasil.push([arrNumber[j], 1])
        } else {
            hasil[run][1]++
        }
    }
    return `angka paling besar adalah ${hasil[0][0]} dan jumlah kemunculan sebanyak ${hasil[0][1]} kali`
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''