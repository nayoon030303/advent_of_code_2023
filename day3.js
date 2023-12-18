const input =
`467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`.split('\n');
const schematic = [];


function findNumber(x, y) {

    let n = isNumber(schematic[x][y]) ? `${schematic[x][y]}`: 0;

    for (let i=y+1;  i<schematic[x].length; i++) {
        if (isNumber(schematic[x][i])) {
            n += schematic[x][i];
            schematic [x][i] = '.';
        }else {
            break;
        }
    }

    for (let i=y-1; i>=0; i--) {
        if (isNumber(schematic[x][i])) {
            n = schematic[x][i] + n;
            schematic [x][i] = '.';
        }else {
            break;
        }
    }

    schematic[x][y] = '.';
    console.log(n);
    return Number(n);
}

function isNumber(data) {
    return /[0-9]/.test(data);
}

function part1() {
    let sum = 0;

    for (const data of input) {
        const line = data.split('');
        schematic.push(line);
    }

    for(let i=0; i<schematic.length; i++ ) {
        for (let j=0; j<schematic[i].length; j++) {
            const data = schematic[i][j];
            if (data !== '.' && !isNumber(data)) {
                const down = schematic[i+1][j]
                const up = schematic[i-1][j]

                const right = schematic[i][j+1]
                const left = schematic[i][j-1]

                const right_down_cross = schematic[i+1][j+1]
                const left_down_cross = schematic[i+1][j-1]

                const right_up_cross = schematic[i-1][j+1]
                const left_up_cross = schematic[i-1][j-1]

                sum += isNumber(down) ?  findNumber(i+1, j) : 0;
                sum += isNumber(up) ?  findNumber(i-1, j) : 0;

                sum += isNumber(right) ?  findNumber(i, j+1) : 0;
                sum += isNumber(left) ?  findNumber(i, j-1) : 0;

                sum += isNumber(right_down_cross) ?  findNumber(i+1, j+1) : 0;
                sum += isNumber(left_down_cross) ?  findNumber(i+1, j-1) : 0;

                sum += isNumber(right_up_cross) ?  findNumber(i-1, j+1) : 0;
                sum += isNumber(left_up_cross) ?  findNumber(i-1, j-1) : 0;


                // console.log(down);
                // console.log(up);

                // console.log(right);
                // console.log(left);

                // console.log(right_down_cross);
                // console.log(left_down_cross);

                // console.log(right_up_cross);
                // console.log(left_up_cross);

            }
        }
    }

    console.log(sum);
}
part1();



