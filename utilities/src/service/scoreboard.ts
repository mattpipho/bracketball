import { NCAAData, NCAAEvent, NCAATeam } from "../types/espn-scoreboard-types";

export const getTournamentEvents = async (dates: string, groups: string): Promise<NCAAEvent[]|undefined> => {
    try {
        const response = await fetch(`http://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/scoreboard?dates=${dates}&groups=${groups}`);
        if(response.ok) {
            const result = await response.json() as NCAAData;

            return result.events;
        }
    } catch (e) {
        console.error(e);
    }
}

export const getTournamentTeams = (events: NCAAEvent[]):NCAATeam[] => {
    const teams = new Map();

    events.forEach(event=> {
        event.competitions[0].competitors.forEach(competitor=>{
            if(!teams.has(competitor.id)){
                teams.set(competitor.id, competitor.team);
            }
        })
    })

    return Array.from(teams.values());
}