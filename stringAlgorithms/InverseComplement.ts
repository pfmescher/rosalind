/**
 * Given: A DNA string s of length at most 1000 bp.
 * Return: The reverse complement sc of s.
* */
import { complement, parseDNAString } from "../helpers/parsers";

let strand = parseDNAString(process.argv[2]);

strand.reverse();

console.log(strand.map(complement).join(""));

process.exit(0);