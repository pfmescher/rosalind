import { DNABase, RNABase } from "../types";

function assertNever(x: never): never {
    throw new Error("Unexpected switch value: " + x);
}

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

/**
 * Returns the RNA equivalent of a given DNA base
 * (mostly useful to change the type of the variable)
 * */
export function DNAtoRNA(base: DNABase): RNABase {
    if (base === "T") {
        return "U";
    } else {
        return base;
    }
}

/**
 * Return the complementary base for a given base
 * Accepts DNA or RNA bases
 * */
export function complement(base: DNABase|RNABase): DNABase|RNABase {
    switch (base) {
        case "A":
            return "T";
        case "T":
        case "U":
            return "A";
        case "C":
            return "G";
        case "G":
            return "C";
        default:
            assertNever(base);
    }

    throw new Error(`Found no complementary base for ${base}`);
}