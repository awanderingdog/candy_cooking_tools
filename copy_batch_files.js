const fs = require('fs');
const readline = require('readline');

const FILES_TO_COPY_NAME = 'files_to_copy.txt';
const SOURCE_DIR = './input_nfts/';
const TARGET_DIR = './output_nfts/';


async function processLineByLine() {
  const fileStream = fs.createReadStream(FILES_TO_COPY_NAME);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    console.log(`Line from file: ${line}`);

    fs.copyFileSync(SOURCE_DIR + line, TARGET_DIR + line);
  }
}

processLineByLine();