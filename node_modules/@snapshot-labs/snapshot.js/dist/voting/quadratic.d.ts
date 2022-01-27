export declare function percentageOfTotal(i: any, values: any, total: any): number;
export declare function quadraticMath(i: any, choice: any, balance: any): number;
export default class ApprovalVoting {
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
