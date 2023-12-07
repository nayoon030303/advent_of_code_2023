function solution1(input) {
    const numberArray = input.split('\n').map((data) => data.replace(/[^0-9]/gi, ''))
    const twoDigitArray = numberArray.map((number) => Number(`${number[0]}${number.slice(-1)}`));
    const sum = twoDigitArray.reduce((acc, cur) => acc + cur);
    console.log(sum);
}

function part1() {

    const input =
    `kjrqmzv9mmtxhgvsevenhvq7`;

    solution(input);
}
part1();


function findFirstLastDigit(input) {
    const firstDigitArray = [];
    const lastDigitArray = [];

    const digitToChar2Array = [
        {find: 'one', replace: 1},
        {find: 'two', replace: 2},
        {find: 'three', replace: 3},
        {find: 'four', replace: 4},
        {find: 'five', replace: 5},
        {find: 'six', replace: 6},
        {find: 'seven', replace: 7},
        {find: 'eight', replace: 8},
        {find: 'nine', replace: 9},
        {find: '1', replace: 1},
        {find: '2', replace: 2},
        {find: '3', replace: 3},
        {find: '4', replace: 4},
        {find: '5', replace: 5},
        {find: '6', replace: 6},
        {find: '7', replace: 7},
        {find: '8', replace: 8},
        {find: '9', replace: 9},
    ]

    digitToChar2Array.forEach((data, i) => {
        const index = input.indexOf(data.find);
        if (index !== -1) {
            firstDigitArray.push({index, charIndex: i});
        }
    })
    const firstDigitCharIndex = firstDigitArray.sort((a, b) => a.index - b.index)[0].charIndex;


    digitToChar2Array.forEach((data, i) => {
        const index = input.lastIndexOf(data.find);
        if (index !== -1) {
            lastDigitArray.push({index, charIndex: i});
        }
    })
    const lastDigitCharIndex = lastDigitArray.sort((a, b) => b.index - a.index)[0].charIndex;

    const firstDigit = digitToChar2Array[firstDigitCharIndex].replace;
    const lastDigit = digitToChar2Array[lastDigitCharIndex].replace;

    return Number(`${firstDigit}${lastDigit}`);
}

function solution(input) {
    const array = input.split('\n');
    const replaceToNumber = array.map((data) => findFirstLastDigit(data));

    const sum = replaceToNumber.reduce((acc, cur) => acc + cur);
    console.log('sum::', sum);

}

function part1 () {
    const input =`kjrqmzv9mmtxhgvsevenhvq7`;

    solution(input);
}

part1();