/**
 * Given: A DNA string t having length at most 1000 nt.
 *
 * Return: The transcribed RNA string of t.
 */
import { DNAtoRNA, parseDNAString } from "../helpers/parsers";

let strand = parseDNAString(process.argv[2]);

console.log(strand.map(DNAtoRNA).join(""));

process.exit(0);