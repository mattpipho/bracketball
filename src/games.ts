import { NCAAData, NCAAEvent } from "./types/espn-scoreboard-types";

const getTournamentEvents = async (): Promise<NCAAEvent[]|undefined> => {
    try {
        const response = await fetch('http://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/scoreboard?dates=2024&groups=100');
        if(response.ok) {
            const result = await response.json() as NCAAData;

            return result.events;
        }
    } catch (e) {
        console.error(e);
    }
}

(async () => {

    console.log('Get the List of Tourney Games');
    const events = await getTournamentEvents();

    events?.forEach(event=> {
        console.log(event.id, 
            event.name, 
            (event.competitions[0].competitors[0].winner)? event.competitions[0].competitors[0].team.shortDisplayName : event.competitions[0].competitors[1].team.shortDisplayName);
    })

})()