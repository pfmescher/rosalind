/**
 * Given: A DNA string s of length at most 1000 nt.
 *
 * Return: Four integers (separated by spaces) counting the respective number of times that the symbols 'A', 'C', 'G',
 * and 'T' occur in s.
 */
declare type base = "A"|"C"|"G"|"T";

let strand: any = process.argv[2];
let result = strand.split("")
    .reduce((previousValue: any, currentValue: base) => (previousValue[currentValue]++,previousValue), {
        A:0,
        C:0,
        G:0,
        T:0
    });

console.log(`${result['A']} ${result['C']} ${result['G']} ${result['T']}`);
process.exit(0);
