## What shuffle_candies does? 

It shuffles pairs of ready to candymachine files, one nft one pair of png and json.

For example, if we have the following files in the input directory:
0.png, 0.json, 4.png, 4.json, 10.png, 10.json, 31.png, 31.json

After running the script it will leave the following files in the output directory:
0.png, 0.json, 1.png, 1.json, 2.png, 2.json, 3.png, 3.json

Take note that before renaming the target files, all of them are shuffled.
So the original 0.png could be the final 2.png.

If the input directory doesn't exists the script will create it.

## Use

1. Check the nft files are in the input directory.
2. Run the script: node shuffle_candies
3. Check the results in the output directory
