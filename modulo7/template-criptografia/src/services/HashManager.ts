import * as bcript from "bcryptjs"

export class HashManager {
    async hash(plainText: string): Promise<string> {
        const count = Number(process.env.BCRIPT_COST);
        const salt = await bcript.genSalt(count);

        return bcript.hash(plainText, salt)
    }

    async compare(plainText: string, cypherText: string): Promise<boolean> {
        return bcript.compare(plainText, cypherText)
    }
}


