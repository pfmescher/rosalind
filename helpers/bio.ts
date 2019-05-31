import {DNABase} from "../types";

export function GCContent(sequence: DNABase[]): number {
    if (sequence.length == 0) return 0;
    return sequence.filter(base => base=="C"||base=="G").length/sequence.length;
}