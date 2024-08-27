import { getBasketballEvent, getPoints } from "./service/event";
import { getTournamentEvents } from "./service/scoreboard";
import { EventData } from "./types/espn-event-types";
import { NCAAEvent } from "./types/espn-scoreboard-types";
import { PlayerPointsType } from "./types/types";


const printPlayerStats = (athlete:PlayerPointsType) => {

    console.log(`INSERT INTO athlete_points VALUES ('${athlete.eventId}','${athlete.teamId}','${athlete.playerId}',${athlete.points?athlete.points:0});`)
}

(async () => {



    console.log('Get the List of Tourney Games');
    
    const events = await getTournamentEvents('2024','100') as NCAAEvent[]|undefined;

    if(!events) {
        console.log('No Events');
        return;
    }

    for(const event of events){

        const eventDetails = await getBasketballEvent(event.id) as EventData;
        
        if(eventDetails?.boxscore){
            const athletes =  getPoints(event.id, eventDetails) as PlayerPointsType[];
            
            // for(const athlete of athletes){
            //     printPlayerStats(athlete);
            // }
        }
    }

})()