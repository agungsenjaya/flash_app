export declare const author = "waterdrops";
export declare const version = "0.1.0";
/**
 * Nouns Space Validation proposal validation uses:
 *
 * The current validation implementation mutates the "strategies" field of the space
 * to be able to use proposition power instead of voting power for "nouns-rfp-power".
 *
 */
export default function validate(author: string, space: any, proposal: any, options: any): Promise<boolean>;
