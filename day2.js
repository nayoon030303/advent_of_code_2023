function replcaeToNumber(input) {
    const numberToCharArray = [
        {find: 'one', replace: 1},
        {find: 'two', replace: 2},
        {find: 'three', replace: 3},
        {find: 'four', replace: 4},
        {find: 'five', replace: 5},
        {find: 'six', replace: 6},
        {find: 'seven', replace: 7},
        {find: 'eight', replace: 8},
        {find: 'nine', replace: 9},
    ]

    while(true) {
        let firstReplaceIndex = null;
        let firstReplaceCharIndex = null;

        numberToCharArray.forEach((data, index) => {
            let position = 0;
            while(true) {
                position = input.indexOf(data.find, position);
                console.log('position',position);
                console.log('firstReplaceIndex',firstReplaceIndex);
                console.log('firstReplaceCharIndex',firstReplaceCharIndex);
                console.log('data',data);
                console.log('input',input);

                if (position === -1) {
                    break;
                };

                if (firstReplaceIndex === null || firstReplaceIndex > position) {
                    firstReplaceIndex = position;
                    firstReplaceCharIndex = index;
                }
                position++;
            }
        })

        console.log('*************', );
        console.log('firstReplaceCharIndex',firstReplaceCharIndex);

        if (firstReplaceCharIndex === null) {
            break;
        }

        const data = numberToCharArray[firstReplaceCharIndex];
        console.log('data', data);
        input = input.replace(data.find, data.replace);
        console.log('input', input);

    }

    console.log(input);
    return input;
}

function solution(input) {
    const array = input.split('\n');
    const replaceToNumber = array.map((data) => {
        const replaceData = replcaeToNumber(data).trim().replace(/[^0-9]/gi, '');
        return Number(`${replaceData[0]}${replaceData.slice(-1)}`)
    });

    const sum = replaceToNumber.reduce((acc, cur) => acc + cur);
    console.log('sum::', sum);

}

function main () {
    const input =
    `sixfour9fivernqcknsbgpfrzmgz3`;
    // 32193

    solution(input);
}

main();