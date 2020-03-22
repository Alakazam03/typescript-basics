type RankingTuple = [number, string, boolean]

// 2 - defined typed variables
let position: number;
let playerName: string;
let finishedGame: boolean;
let ranking: RankingTuple;
let hallOfFame: Array<RankingTuple> = [];


//3- define values for players
position = 1;
playerName = "vaibhav Aggarwal";
finishedGame = true;
ranking = [position, playerName, finishedGame];
hallOfFame.push(ranking);

//4- secnd player
position = 2;
playerName = "Maria Helena";
finishedGame = true;
ranking = [position, playerName, finishedGame];
hallOfFame.push(ranking);

// function to log all rankings
function printRankings(rankings: Array<RankingTuple>): void {
    for (let ranking of rankings) {
        console.log(ranking)
    }
}

// call function
printRankings(hallOfFame);