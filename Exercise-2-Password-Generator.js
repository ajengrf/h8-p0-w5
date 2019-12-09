function changeVocals(str) {
    //code di sini
    var tampung = ''
    for (var i = 0; i < str.length; i++) {
        if (str[i] == 'a') {
            tampung += 'b'
        } else if (str[i] == 'i') {
            tampung += 'j'
        } else if (str[i] == 'u') {
            tampung += 'v'
        } else if (str[i] == 'e') {
            tampung += 'f'
        } else if (str[i] == 'o') {
            tampung += 'p'
        } else if (str[i] == 'A') {
            tampung += 'B'
        } else if (str[i] == 'I') {
            tampung += 'J'
        } else if (str[i] == 'U') {
            tampung += 'V'
        } else if (str[i] == 'E') {
            tampung += 'F'
        } else if (str[i] == 'O') {
            tampung += 'P'
        } else {
            tampung += str[i]
        }
    }
    return tampung
}

function reverseWord(str) {
    //code di sini
    var noVocal = changeVocals(str)
    var tampung = ''

    for (var j = 1; j <= noVocal.length; j++) {
        tampung += noVocal[noVocal.length - j]
    }
    return tampung
}

function setLowerUpperCase(str) {
    //code di sini
    var reversed = reverseWord(str)
    var tampung = ''

    for (var k = 0; k < reversed.length; k++) {
        if (reversed[k] == reversed[k].toLowerCase()) {
            tampung += reversed[k].toUpperCase()
        } else if (reversed[k] == reversed[k].toUpperCase()) {
            tampung += reversed[k].toLowerCase()
        }
    }
    return tampung
}

function removeSpaces(str) {
    //code di sini
    var lowUp = setLowerUpperCase(str)
    var tampungWord = ''
    var tampungSpace = ''

    for (var l = 0; l < lowUp.length; l++) {
        if (lowUp[l] == ' ') {
            tampungSpace += lowUp[l]
        } else {
            tampungWord += lowUp[l]
        }
    }
    return tampungWord
}

function passwordGenerator(name) {
    //code di sini
    var named = removeSpaces(name)
    if (name.length > 5) {
        return named
    } else {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'