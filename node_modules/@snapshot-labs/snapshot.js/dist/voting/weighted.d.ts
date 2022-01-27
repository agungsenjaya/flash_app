export declare function percentageOfTotal(i: any, values: any, total: any): number;
export declare function weightedPower(i: any, choice: any, balance: any): number;
export default class WeightedVoting {
    proposal: any;
    votes: any;
    strategies: any;
    selected: any;
    constructor(proposal: any, votes: any, strategies: any, selected: any);
    resultsByVoteBalance(): any;
    resultsByStrategyScore(): any;
    sumOfResultsBalance(): any;
    getChoiceString(): any;
}
