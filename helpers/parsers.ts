import { DNABase, RNABase } from "../types";

function isDNABase(base: string): boolean {
    switch (base) {
        case "A":
        case "C":
        case "G":
        case "T":
            return true;
        default:
            return false;
    }
}

function toDNABase(str: string): DNABase {
    switch (str) {
        case "A":
        case "C":
        case "T":
        case "G":
            return str;
        default:
            throw new Error(`${str} is not a valid DNA base`);
    }
}

export function parseDNAString(str: string): DNABase[] {
    let splitted = str.split("");
    splitted.some((base: string, index: number) => {
        if (!isDNABase(base)) {
            throw new Error(`Character ${base} at position ${index} is not a valid DNA base`);
        }
        return false;
    });

    return splitted.map(toDNABase)
}

export function DNAtoRNA(base: DNABase): RNABase {
    if (base === "T") {
        return "U";
    } else {
        return base;
    }
}