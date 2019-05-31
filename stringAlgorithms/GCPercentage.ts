/**
 * Given: At most 10 DNA strings in FASTA format (of length at most 1 kbp each).
 *
 * Return: The ID of the string having the highest GC-content, followed by the GC-content of that string. Rosalind allows
 *  for a default error of 0.001 in all decimal answers unless otherwise stated;
 */
import {FASTA} from "../types/Fasta";
import {GCContent} from "../helpers/bio";
import {readFile} from "fs";

readFile("examples/gccontent.fasta", 'utf8', (err, input) => {
    if (err) throw err;
    // console.log(input.toString());
    let fastas: FASTA[] = input.toString()
        .split('>')
        .slice(1)
        .map(line => FASTA.fromString(line));

    let ordered : [string, number][] = fastas.map(mapper)
        .sort((a,b) => b[1]-a[1]);

    let result: any = ordered.shift();
    console.log(result[0]);
    console.log((result[1]*100).toFixed(6));

    function mapper(fasta:FASTA) : [string, number] {
        return [fasta.name, GCContent(fasta.sequence)];
    }
});