/**
 * Created by Jan Valentik on 6/11/2016.
 */
'use strict';
const Enigma = require('./enigma');
const eng = new Enigma('magrathea');

let encodeString = eng.encode("Don't panic!");
let decodeString = eng.decode(encodeString);


console.log("Encoded: ", encodeString);
console.log("Decoded: ", decodeString);
