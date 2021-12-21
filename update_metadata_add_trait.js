const fs = require('fs');

const inputDir = "./input_nfts/";
const outputDir = "./output_nfts/";


try {
        fs.mkdirSync(outputDir);
} catch {}

const files = fs.readdirSync(inputDir);


const new_trait = {
        'trait_type': "Journey",
        'value': "Surreal"
};


async function cook() {
        for (let f = 0; f < files.length; f++) {
                const file = files[f];
                // console.log(file);
                if (file.indexOf('.json') !== -1) {
                        if (file.indexOf('#') === -1) {
                                const md = JSON.parse(fs.readFileSync(inputDir + file));

                                md.attributes.push(new_trait);
                                
                                fs.writeFileSync(outputDir + file, JSON.stringify(md));
                        }
                }
        }
}

cook();
