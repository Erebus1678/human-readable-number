module.exports = function toReadable(number) {
    let under20 = [
        '',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'
    ]
    let tens = [
        '',
        '',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety'
    ]
    let numberToStr = number.toString();
    if (number === 0) {
        return 'zero';
    }
    if (number <= 19) {
        return under20[number];
    }
    if (numberToStr.length === 2) {
        if (numberToStr[1] === '0') {
            return tens[Number(numberToStr[0])];
        } else return (tens[Number(numberToStr[0])] + ' ' + under20[Number(numberToStr[1])]
        )
    }
    if (numberToStr.length == 3) {
        if (numberToStr[1] === '0' && numberToStr[2] === '0') {
            return under20[Number(numberToStr[0])] + ' hundred'
        } else return (under20[Number(numberToStr[0])] + ' hundred ' + toReadable(+(numberToStr[1] + numberToStr[2]))
        )
    }
}