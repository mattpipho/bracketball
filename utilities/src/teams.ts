import { getTeams } from "./service/teams";
import { Team } from "../../types/espn-teams";

const printTeams = (teams: Team[]) => {
    console.log('id,slug,abbreviation,displayName,shortDisplayName,name,nickname,location,color,alternatecolor');
    for(const t of teams){
        const team = t.team;
        console.log(`${team.id},${team.slug},${team.abbreviation},${team.displayName},${team.shortDisplayName},${team.name},${team.nickname},${team.location},${team.color},${team.alternateColor}`)
    }
}

(async () => {

    const teams = await getTeams();

    printTeams(teams);

})()