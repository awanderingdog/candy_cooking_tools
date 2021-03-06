const fs = require('fs');

const inputDir = "./metadata-megaupdate/downloaded-metadata-with-trait/";
const outputDir = "./metadata-megaupdate/downloaded-metadata-with-trait-name/";


try {
        fs.mkdirSync(outputDir);
} catch {}

const files = fs.readdirSync(inputDir);

// const creators = [
//         {
//             "address": "GEhPrZ1oqiLxzAAAAAAAAAFbh7EaSXnE87F7x9Kxeno",
//             "share": 100
//         }
//     ];

// const description = "Handmade nft collection";


async function cook() {
        for (let f = 0; f < files.length; f++) {
                const file = files[f];
                // console.log(file);
                if (file.indexOf('.json') !== -1) {
                        if (file.indexOf('#') === -1) {
                                const md = JSON.parse(fs.readFileSync(inputDir + file));

                                // ---/// Comment the ones you don't need. ////---

                                // Add number to nft name
                                const fileNumber = file.substr(0, file.indexOf('.'));
                                md.name = 'A Wandering Dog #' + fileNumber;

                                console.log(md.name);

                                // Set new description
                                // md.description = description;

                                // Set new creators list
                                // md.properties.creators = creators;

                                fs.writeFileSync(outputDir + fileNumber + '.json', JSON.stringify(md));
                        }
                }
        }
        // fs.writeFileSync(outputDir + fileNumber + '.json', JSON.stringify(md));
}

cook();
// shuffleFiles();
