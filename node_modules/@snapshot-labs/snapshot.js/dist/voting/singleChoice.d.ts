export default class SingleChoiceVoting {
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
