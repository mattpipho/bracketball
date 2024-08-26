import { NCAAData, NCAAEvent } from "./types/espn-scoreboard-types";

const getBasketballEvent = async (eventId: string): Promise<EventData|undefined> => {
    try {
        const response = await fetch(`http://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/summary?event=${eventId}`);
        if(response.ok) {
            const result = await response.json() as EventData;

            return result;
        }
    } catch (e) {
        console.error(e);
    }
}


const listStats = (boxscore: Boxscore) => {

    boxscore.players.forEach(team=>{
        team.statistics.forEach(statistic=> {
            const pointsIndex = statistic.keys.indexOf('points');
            statistic.athletes.forEach(athlete=>{
                console.log(team.team.abbreviation, athlete.athlete.shortName, athlete.stats[pointsIndex]);
            })
        })
    })

}

const formatPoints = (pointsString: string|undefined) => {
    if(pointsString) return parseInt(pointsString);
    return 0;
}

const getPoints = (eventId: string, event: EventData): PlayerPointsType[] => {

    let playersPoints = [] as PlayerPointsType[];

    event.boxscore.players.forEach(team=>{
        team.statistics.forEach(statistic=> {
            const pointsIndex = statistic.keys.indexOf('points');
            statistic.athletes.forEach(athlete=>{
                const singlePlayer:PlayerPointsType = {
                    eventId: eventId,
                    teamId: team.team.id,
                    playerId: athlete.athlete.id,
                    points: formatPoints(athlete.stats[pointsIndex])
                }

                playersPoints.push(singlePlayer);
            })
        })
    })

    return playersPoints
}

(async () => {



    console.log('Get the List of Tourney Games');
    
    const eventId = '401638580';
    
    const event = await getBasketballEvent(eventId);

    if(event?.boxscore){
       const athletes =  getPoints(eventId, event);

       console.log('a', athletes[0])
    }

})()