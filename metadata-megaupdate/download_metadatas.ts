import { PublicKey, Connection, clusterApiUrl, Cluster } from '@solana/web3.js';
import {
    getMultipleAccounts,
    saveMetaData,
} from './utils-downmeta';
import { Metadata } from './metaplex/classes';
import { getMetadataAddress } from './metaplex/utils';
import { decodeMetadata } from './metaplex/metadata';
import fetch from 'node-fetch';

const RPC_CLUSTER_API = 'https://ssc-dao.genesysgo.net';  // https://solana-api.projectserum.com
const RPC_CLUSTER = RPC_CLUSTER_API;
const OUTPUT_DIR = './downloaded-metadata';

const getConnection = (env: string) => {
    const cluster = env === 'mainnet-beta' ? RPC_CLUSTER : clusterApiUrl(env as Cluster);
    const connection = new Connection(cluster);
    return connection;
};

const downloadMetadata = async () => {

    const data = [
        // ['1800', 'Cx7uATPcvA24fqxpMxzeCryDNY2VwJmbRSz7R9eBzafF'],
        // ['1801', 'Gb196LDYu3BbifCYU7daGoU9vuWKN6f2cMj4cs6gYgKh'],
        // ['1802', '7JBYrLxE3qzHbBot4mH4kNeZxNnb4qbZPzGi9FgBravi'],
        // ['1803', 'E1xtiC6n8eegtLraBUjTKhxJ23e8shdYAwywKDYwkbJY'],
        // ['1804', '7Ap6sCGYnWi4RhdwBmiCPSzUDWFeawPdVmMQdAos1SM3'],
        // ['1805', '3t8MXVbCvquFYESngzVaX7RRfFmrqE3sUVdUxG6sSaZy'],
        // ['1806', 'ASnQxiSsvPa4dU8BQQXZ4dzDjqe7FV5xQhuau3eytxBJ'],
        // ['1807', '47XoW39HRo1edhBroDu6HbhCpgMWB9mpLNfoWNJyJxJY'],
        // ['1808', 'E28BmTEZX5XfiTPr1hb8aaDJndAagr3rAEK6Dnz6Ko7w'],
        // ['1809', 'BeujcJseG5QBQWyMuBxe55FuMHfTJ8W1rfnV18K1re7P'],
        // ['1810', '8sjQ3kQqiVC9PtLAQXzDcg8kmowfqysmthTUzk5EZGZn'],
        // ['1811', 'DBav24TV7tWCeiAfuitwqd9XSKoWhjuSeFfoudHy6KAZ'],
        // ['1812', 'CNXMQEmVGtBJJG6RwkSk7K7YQPU63JzZ2ReoohvtZLiM'],
        // ['1813', '8Thn3L9N6gAbZxcx3FyXW9yK1uPwrri1nw2hTCiR61aa'],
        // ['1814', 'FvzsBhWu5LHdyjBdrWYMsThFPWYTmNUZyad6URhTxeVx'],
        // ['1815', '43wiSuEUs6RK4Chkn1FHjpqq4W4JGs8oJbVPoYWScfvp'],
        // ['1816', 'HidveJdhq4FQQucjsdyvg5YPsKhxv5D2BXbNjNxZfZDT'],
        // ['1817', 'HtZ6rucZt1JuVGvyTjTHJ5KC7KGdyBWCTsXJ5meKBd7V'],
        // ['1818', '8fJg8UJS1sUAwpt6J18joqbhBSrk8bfiwYYPnQozoCKt'],
        // ['1819', 'G4VHdQFKFP1eGiuAYXByK4a5AmDsNxAKtZF7oQFdyWf2'],
        // ['1820', '22DaWWQx4nTrqRi8my1r4z1uXbjLbHJp9cFEtGya3HA1'],
        // ['1821', '8sQmZMDJwGWXYYa3g4czUQyY2NstR7bKNcfECPaFhSrB'],
        // ['1822', 'ERmh2hGEAGujRHJptY2XCXzdakG21zfnyYiSt9YE9tVg'],
        // ['1823', '14mNSHJdnjEJatDhgVYZfkcTZ1eTx1PBcm9T9BKGxc6v'],
        // ['1824', 'BF2NFcC4sMUmuzC23Zu8Jp2Qs8qcRrUnaYAEdBp43neL'],
        // ['1825', '3tnSP7BCLPawDvJ5tSQgpXY1Gis3zVMZJCC9K76hB56n'],
        // ['1826', '5gFKZAd2S6mUSbJLgVyJ6kHWNHtyTMVyEExfraDg6sU2'],
        // ['1827', '4wHh2BEBRaCk9aUV4w9mviKJYbZNCec4hZA2SMiBhire'],
        // ['1828', 'MhpHYASpw6fHyyvzqg5JHsFie3Sq2bSFvZpWUgApnWE'],
        // ['1829', '6id7pwF5bLHp9F7ZuPN9eUsSzg5525TRzaGpS8uWQBgZ'],
        // ['1830', '9b9xjnSxcPcvohB8ZMpw4QHHf8aREPRhMXaDHser9dcz'],
        // ['1831', 'BEwCjGy46e7CSU1ppCGfkcv7uRRBnxmc13dmnUhE7vbx'],
        // ['1832', 'AzbUDTue5MXYwWdk5oDCy55mvWNTZWmwsvGoCqv8pDeR'],
        // ['1833', 'GrSSDNazy6KEFp1AGpmnAffoUFjW9k83QYuihfCsG7YW'],
        // ['1834', '6oi5a5AzPmRdfYKaQwVZAeVnDVWqPEKwSu2biBCw4jAo'],
        // ['1835', 'EtjvM7egpfLrYnfJgTmKiH32yeWSmMPizuBAaCbkEt4Z'],
        // ['1836', '4yTFmy4vzSvvyA9NPDLowfPCRwGAn9XaWEi9AGu95Eju'],
        // ['1837', 'FRopgqwx29fcU7nKTdn71DewLT2Ea8ianEd8SsdhHy5H'],
        // ['1838', 'EuwBPNVTk6bTCQMgvwYRBsEWBgzyRymP4bMV4nki9grs'],
        // ['1839', '6CtRKbqzpcbauUYUZutM4uFBkYt4LKAV2CEzVPiftp36'],
        // ['1840', '6jqrpMNVhMKbABzcjLb6KjXFu24dtQv4bzSvx3WpmrFF'],
        // ['1841', 'F9Sb5fv7sMmLfZoH5zHj2221g2dZVcR3wRPFKr8chMsF'],
        // ['1842', '9RTyqv1EgmTzgxhJhWCSJptpZ8NyqURDea542phwaeFr'],
        // ['1843', '2fBM36mbTWQJ2cn1CRFvyKHhvyphxvrFVEQq7sX4VYs2'],
        // ['1844', '4dPThn3gutsLsPGruZhFEAmcdTdSErHFqoA7GFXc5vfY'],
        // ['1845', '5yhD6F1KteBgXsSULQ2EnLm4k8vYUbPuceQ1TYHewDu1'],
        // ['1846', 'Dk2Jfar2PyrYkCXu3WmbgfrywDRqtzLadv9prEo1bMHc'],
        // ['1847', 'vafhvp53X9MQirmnYEWCM7rpGipDbbipn1GTMTEmQii'],
        // ['1848', '5nJvULuWJg2wJL6aAKxVFQB3iBKqeAe4UrbmXF1TRjee'],
        // ['1849', 'DuhykDyvJF7N67bxJXoEJoVMDW2JzH29NWPRe5xu3vA4'],
        // ['1850', 'FEy8pJsfxdFsvHS5PZzzkTS9w26FtGq5F5zJEAW7fisM'],
        // ['1851', '9svk6U9AmqmezbHHfCRETnoweWtfBZsGCpceXzc2AFdR'],
        // ['1852', 'FDb46robwFJ2kA7MsRa5fsTE4WuqQK9wqbBMmSrtT9YN'],
        // ['1853', 'BnByANMHkZ9QuvxTjUR2UA5xrUum1HxBBjGdkCnUV4gr'],
        // ['1854', 'E9BCUSNrFND1hdhBDqqg7ovW6hQnX5akySptx8zbHHm2'],
        // ['1855', 'F1Rs7tQSUGuqRq7WHaTJjS95gQ9gmZGnomRchSCubMPf'],
        // ['1856', '5GXheFerXCakzzmZrw5HF6L4TEA4xaGJxJmMeJBdPa68'],
        // ['1857', 'GkUb6kDoS6b3ZnUL4bn7HQNMmwZFShGGvKW7FtB5gKMX'],
        // ['1858', 'C4nMyGNHtWKwhYXNRE5Yu6ESKeykBWJCdvLRpCj4dUFf'],
        // ['1859', 'DAJhTWkLV6zJcSyxVyoyCoMVpQrm7N2F3xXiLENfd92X'],
        // ['1860', 'GpDUHb2ZNAkzhPWbBxWY76orfePHAT1TWw8eY67k87we'],
        // ['1861', 'KJreAPjZoG2Z2tGg3K5d4XqucVQXnv9aUHoidvNqNKg'],
        ['1862', '37Cwbd7fTPrFgwpe8mtTLqYB4oKegkYgwxeyXyJRk5nP'],
        ['1863', 'HYEqko8HiLvVGZ7L7fAL8AEx9txbVR6be68C2nnWRZ7s'],
        ['1864', '6J8jnzRLoXSF64atr2dfdNCrDMjRtR1gWzuHmrDbsmXS'],
        ['1865', 'DpjR1Rx94N7sCx1wDngHsLsg3Jrfjd7oQA69yes4bGvT'],
        ['1866', '4XoSQfqH43YUqywwHoVGc5YBhjLad3wbKLNr7hrSe5Nu'],
        ['1867', 'CHd9XtSN9GUJ2fpRri2ZsMGjgNBPHxNk264tgGsugqLQ'],
        ['1868', '6q6XVbzgHU5ogBHKK3T44aNApYhnyvMjvwJSGpSK9jiK'],
        ['1869', 'XBoezKCSbqodhxGrS2gyecGhqc9CzozuqahNLP9dCqN'],
        ['1870', 'EVV2Q8KuGWGu83gFwjp8sg7sDcN6RaazTT4HKoHnBuWg'],
        ['1871', 'BrFUChx7GBmku1sx7g6KnHHpTw5gpJ3inCu9aMXk12x6'],
        ['1872', 'HCbCCEryCRgGGdKDM3CMbxDrnaGWG1Vu2mFQ8eeqvacv'],
        ['1873', 'GtXoT23nu7sygNfx1X4bjakCCcDxmVAtmoTPWyt4bd5j'],
        ['1874', 'J6Eu6emjEqMiRmRFXVyWrAwu84yy4cdr632aRhc9fV1t'],
        ['1875', 'DCWmCaCbEtCMrcZj4i9tASt3k4LKbXbY6LaFwBUgB3FS'],
        ['1876', '3dE6P25XuHoDWV7VqjrsPJGrR6T7hBAFJnAi7EY9CNF5'],
        ['1877', 'B8v3Dr7jYsR4T5WAmH78DMJ7N8KQofkNEMeqLRLDCDKj'],
        ['1878', 'EkLkdE6dHHArvvitr4STKBkPtw5rKCVQSa8HkxweD2vi'],
        ['1879', '9w1YdqY93BHKh87F36wANQYvZm1iTJcJ8AC8VZ8wRJJ9'],
        ['1880', 'F7gaFx5SLXk8nFtgoymJbiERXhNad1eMPvwQBykHJVG5'],
        ['1881', '4VoN8Tc9vacfjW3NRR4hwVo4Un2xPYCV9AKYRHgvPKwJ'],
        ['1882', 'EdnhxTomnZMRd9xiWatXxY6bJVodoD9zCgKvwRCCM1Gg'],
        ['1883', 'GvwWiw1MBrmnxyxu9JGKohwvdpLFua7FZo8FJTVCPDK1'],
        ['1884', 'EPo3PTTHMrUP1bi9urW5c6gQF3GohtWBsQ5fgShFGmp5'],
        ['1885', '5FEfY4G8E8XCwnK4eDUNDQRaZH1MXEANTtWnZo37Qzik'],
        ['1886', '6jnP4W4rrnsf88vucqv9JNe9bdbxQ8xHm56AQ62sGa1n'],
        ['1887', '5FQFVrvxwybuCEXRBs4rwuy1mp7ckcxRjiPfcZSbUyG2'],
        ['1888', 'HU3zSjXZwB1QqK4TpXjano8VemTRKTJR6hghpXJ4mXQv'],
        ['1889', '5PGi2nYn4n6dWo5oaA4FpT1PY4yBSBz1bwYaMV9VkqSY'],
        ['1975', '9CbiT3MBCPPK6Dih2EXAHJzYYxjwpkxLVxq71y2sLhDm'],
        ['1976', 'EDsCPc2TArD56wNFwzSHrXYX11WMjfH2y5v8YDFxVJoX'],
        ['1977', '8V4u1kQQuwyznEH23TmmGYNLSA6diH8z4uTQ1AQatGvx'],
        ['1978', '7SSfwDyAsNhvaFktHGhcrfqSbt5fQrjVcQ2bRwwA14a4'],
        ['1979', 'Cu84ChrZmw2LH9JiRexMS7HTL3XN14CigVtx9NFCyqmu'],
        ['1980', '4sKsoWdGHHpzn5EefvQ8ydvpXBjnxK1y5BZ3FxiJrMdJ'],
        ['1981', '8Tv9a7psz2ZeHQdMfwWooGiWL759omCubSSd8Mc8ucNK'],
        ['1982', 'B9yb7VXM8tB6yUxGmkkhxrKrsy1HdvPrbXTdzsNbYBzC'],
        ['1983', 'Umpr9K49mAjY4hKELXQTWF43GfuSDjQ4F5FG79Cpygu'],
        ['1984', 'Dyv87Zb9kTXtTyNurb66HJYiyNtQuwJTJR3Vx54TBRmk'],
        ['1985', 'AGjgB6CNTvc8Qh3X6XP4uqDhQgVH4Xt9yCy8UeKqk6MN'],
        ['1986', '2MV91bp2FdC4ExiBi1X8jgaYueWwF5EFHcuAApEqC82A']
    ];

    
    const connection = getConnection('mainnet-beta');

    console.log(`Reading metadata for: ${data.length} items`);
    console.log('Get the token metadata from the chain...');
    const intermediateResult: { [key: string]: string } = {};
    for (let index = 0; index < data.length; index++) {
        const key = data[index][1];
        const metaKey = await getMetadataAddress(new PublicKey(key));
        intermediateResult[metaKey.toBase58()] = key;
    }
    const rawMetas = await getMultipleAccounts(connection, Object.keys(intermediateResult), 'finalized');

    // const result: MetadataContainer = {};

    console.log('Decode the token metadata, this WILL take a while');
    for (let index = 0; index < rawMetas.keys.length; index++) {
        // console.log(index);

        // const metaKey = rawMetas.keys[index];
        const metaAccount = rawMetas.array[index];
        if (!metaAccount) {
            continue;
        }

        let mintMetaData: Metadata | undefined = undefined;
        try {
            mintMetaData = decodeMetadata(metaAccount.data);
        } catch {
            // do nothing
        }
        console.log(`Decoded #${index}: ${mintMetaData?.data.name}`);
        // const mintKey = intermediateResult[metaKey];
        // console.log('mintMetaData', mintMetaData);

        const uri = mintMetaData?.data.uri;
        console.log(uri);

        const response = await fetch(uri);
        const offChainMeta = await response.json();
        // console.log(offChainMeta);

        const jsonName = data[index][0] + '.json';
        saveMetaData(JSON.stringify(offChainMeta, null, 2), OUTPUT_DIR, jsonName);
    }

}

// const fs = require('fs');

// const allFileContents = fs.readFileSync(ADDRESSES_FILE_NAME, 'utf-8');
// allFileContents.split(/\r?\n/).forEach(line =>  {
//     console.log(`Line from file: ${line}`);
// });

(async () => {
    downloadMetadata();
})();


