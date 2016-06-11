/**
 * Created by Jan Valentik on 6/11/2016.
 */
'use strict';
const qr = require('qr-image');
const fs = require('fs');

let dataToEncode = process.argv[2] || null;
let outImage = process.argv[3] || null;

if(dataToEncode != null && outImage != null) {
    qr.image(dataToEncode, {
        type: 'png',
        size: 20
    }).pipe(fs.createWriteStream(outImage));
    console.log("QR image created");
}
else {
    console.log("Please check command line arguments");
}
