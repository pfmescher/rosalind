import { DNABase } from "./index";
import {parseDNAString} from "../helpers/parsers";

export class FASTA {
    private _name: string;
    private _sequence: DNABase[];

    public get name() {
        return this._name;
    }

    public get sequence() {
        return this._sequence;
    }

    public constructor(name: string, sequence: DNABase[]) {
        this._name = name;
        this._sequence = sequence;
    }

    public static fromString(str: string): FASTA {
        let name: string = "";
        let sequence: DNABase[] = [];

        str.split("\n")
            .forEach((line, index) => {
                line = line.trim();
                if (index==0) {
                    name = line;
                } else {
                    sequence = sequence.concat(parseDNAString(line));
                }
            });

        return new FASTA(name, sequence);
    }
}