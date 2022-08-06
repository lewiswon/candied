const fs = require('fs');
const readline = require('readline');

export async function readFileLines(file: string, fn: Function) {
    const fileStream = fs.createReadStream(file);

    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    let lineNumber = 1;
    for await (const line of rl) {
        fn(line,lineNumber)
        lineNumber++;
    }
};