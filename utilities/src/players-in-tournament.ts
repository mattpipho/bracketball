import { getRoster } from "./service/roster";
import { getTournamentEvents, getTournamentTeams } from "./service/scoreboard";
import { NCAATeam } from "../../types/espn-scoreboard-types";
import { PlayerInfoType } from "../../types/types";


const YEAR = '2024';
const GROUP_ID = '100';

const printTeams = (teams: NCAATeam[]) => {

    console.log('id,name,abbreviation,displayName,shortDisplayName');
    teams.forEach(team=> {
        console.log(`${team.id},${team.name},${team.abbreviation},${team.displayName},${team.shortDisplayName}`)
    })
    
}

const printPlayers = (players:PlayerInfoType[]):void => {

    console.log("teamId, playerId, firstName, lastName, displayName, shortName");
    players.forEach(player=>{
        console.log(`${player.teamId}, ${player.playerId}, ${player.firstName}, ${player.firstName}, ${player.displayName}, ${player.shortName}`)
    })

}

(async () => {

    //Get Events
    const events = await getTournamentEvents(YEAR, GROUP_ID);

    //Get Teams
    if(!events) {
        console.log('No Events');
        return;
    }

    const teams = getTournamentTeams(events);
    if(!teams){
        console.log("No Teams");
        return;
    }
    printTeams(teams);

    //console.log('Number of Teams', teams.length);

    // //Get Players

    // let allPlayers:PlayerInfoType[] = [];
    // for(const team of teams) {
    //     allPlayers = allPlayers.concat(await getRoster(team.id, YEAR));
    // }

    // // Display Players
    // printPlayers(allPlayers);

})()