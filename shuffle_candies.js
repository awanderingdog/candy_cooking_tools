const fs = require('fs');

const inputDir = "./input_nfts/";
const outputDir = "./output_nfts/";


try {
        fs.mkdirSync(outputDir);
} catch {}

const files = fs.readdirSync(inputDir);

shuffle(files);

sortJsonPng(files);
console.log(files);


async function shuffleFiles() {
        let nftIndex = 0;

        for (let f = 0; f < files.length; f++) {
                if (f != 0 && f % 2 == 1) {
                        continue;
                }

                const file = files[f];
                let fileNumber;
                console.log(' --> ' + file);

                if (file.indexOf('.json') !== -1) {
                        fileNumber = nftIndex + '.json';
                        fs.copyFileSync(inputDir + file, outputDir + fileNumber);

                        console.log(fileNumber);

                        // Assuming next image is png as they are sorted
                        fileNumber = nftIndex + '.png';
                        fs.copyFileSync(inputDir + files[f+1], outputDir + fileNumber);

                        console.log(fileNumber);
                }

                nftIndex++;
        }
}


function shuffle(array) {
        let currentIndex = array.length,  randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {
                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);

                // Swap odds
                if (randomIndex % 2 == 1) {
                        currentIndex--;
                        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];

                        currentIndex--;
                        [array[currentIndex], array[randomIndex-1]] = [array[randomIndex-1], array[currentIndex]];
                } 
                // Swap pairs
                else {
                        currentIndex--;
                        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];

                        currentIndex--;
                        [array[currentIndex], array[randomIndex+1]] = [array[randomIndex+1], array[currentIndex]];
                }
        }

        return array;
}

function sortJsonPng(array) {
        for (let i = 0; i < array.length; i++) {
                if (i != 0 && i%2 == 1) {
                        continue;
                }
                const file = array[i];

                // If this is not json, swap it
                if (file.indexOf('.json') === -1) {
                        // console.log(i + ' ' + file);
                        [array[i], array[i+1]] = [array[i+1], array[i]];
                }
        }
}

shuffleFiles();
