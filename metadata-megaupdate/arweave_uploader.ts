import fs from 'fs';
import path from 'path';
import Arweave from 'arweave';
import Transaction from 'arweave/node/lib/transaction';
import { JWKInterface } from 'arweave/node/lib/wallet';



export const doUpload = async (
    arweave: Arweave,
    data: Buffer | string,
    fileType: string,
    jwk: JWKInterface,
    isUploadByChunk = false,
): Promise<Transaction> => {
    const tx = await arweave.createTransaction({ data: data }, jwk);
    tx.addTag('Content-Type', fileType);
    await arweave.transactions.sign(tx, jwk);
    if (isUploadByChunk) {
        const uploader = await arweave.transactions.getUploader(tx);
        while (!uploader.isComplete) {
            await uploader.uploadChunk();
            console.log(`${uploader.pctComplete}% complete, ${uploader.uploadedChunks}/${uploader.totalChunks}`);
        }
    }
    await arweave.transactions.post(tx);
    return tx;
};

export const sleep = (ms: number): Promise<unknown> => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};



const ARWEAVE_URI = 'arweave.net';
const ARWEAVE_PROTOCOL = 'https';
const ARWEAVE_KEY_FILE = "./arweave-keyfile--CCTNvwLcsM3TvRwXDfMerFZW8xhO6cX3n0BT-GjuAQ.json";
const JSONS_DIR = "./arweave-upload";


(async () => {
    const arweave = Arweave.init({
        host: ARWEAVE_URI,
        port: 443,
        protocol: ARWEAVE_PROTOCOL,
        logging: false,
    });

    const jwk = JSON.parse(fs.readFileSync(ARWEAVE_KEY_FILE).toString());
    const files = fs.readdirSync(JSONS_DIR);

    console.log(files);

    const jsonFiles = files.filter((it) => '.json' === path.extname(it));
    const jsonFileCount = jsonFiles.length;

    for (let i = 0; i < jsonFileCount; i++) {
        const metadata = jsonFiles[i];
        // const metadataName = path.basename(metadata);

        // console.log(`Uploading metadata: ${metadataName}`);

        const manifestContent = fs.readFileSync(path.join(JSONS_DIR, metadata)).toString();
        const manifest = JSON.parse(manifestContent);

        // manifest.image = imageUri;
        // manifest.properties.files[0].uri = imageUri;
        // manifest.properties.files[0].type = imageType;
        const manifestTx = await doUpload(arweave, JSON.stringify(manifest), 'application/json', jwk);
        const mainfestUri = `${ARWEAVE_PROTOCOL}://${ARWEAVE_URI}/${manifestTx.id}`;
        console.log(metadata + ' ' + mainfestUri);

        sleep(500);
    }
})();
